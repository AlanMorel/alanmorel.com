"use client";

import useModal from "@/src/atoms/ModalAtom";
import EntryButton from "@/src/components/journal/EntryButton";
import YesNoModal from "@/src/components/modals/YesNoModal";
import If from "@/src/components/other/If";
import ThemeSwitcher from "@/src/components/other/ThemeSwitcher";
import { showInfoToast } from "@/src/components/toasts/Toasts";
import { addDays, getReadableDate, getYYYYMMDD, isDateEarlier } from "@/src/helpers/shared/DateFormatter";
import { ArrowLeft, ArrowRight, SaveIcon } from "lucide-react";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";

interface Props {
    startDate: number;
    entry: string;
}

export default function Entry(props: Readonly<Props>): ReactElement {
    const today = new Date();
    const startDate = new Date(props.startDate + today.getTimezoneOffset() * 60 * 1000);

    const [control, setControl] = useState(props.entry);
    const [entry, setEntry] = useState(props.entry);
    const [date, setDate] = useState(today);
    const { openModal, closeModal } = useModal();

    useEffect(() => {
        const handleKeyDown = async (event: KeyboardEvent): Promise<void> => {
            if (event.ctrlKey && event.key === "s") {
                event.preventDefault();
                await onSave();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return (): void => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [entry, control]);

    async function fetchNewEntry(date: Date): Promise<any> {
        if (!isDateEarlier(addDays(date, -1), today)) {
            showInfoToast("Cannot load future entries");
            return;
        }

        if (isDateEarlier(date, startDate)) {
            showInfoToast("Cannot load earlier entries");
            return;
        }

        const payload = {
            date: date.getTime()
        };

        const request = await fetch("/api/journal/fetch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const response = await request.json();

        if (!response.success) {
            showInfoToast(response.data);
            return;
        }

        setControl(response.data);
        setEntry(response.data);
        setDate(date);
    }

    async function fetchPrev(): Promise<void> {
        const newDate = addDays(date, -1);
        closeModal();
        await fetchNewEntry(newDate);
    }

    async function fetchNext(): Promise<void> {
        const newDate = addDays(date, 1);
        closeModal();
        await fetchNewEntry(newDate);
    }

    async function onPrev(): Promise<void> {
        if (control !== entry) {
            openModal(<YesNoModal title="Unsaved changes!" content="Do you want to proceed?" onYes={fetchPrev} />);
            return;
        }

        await fetchPrev();
    }

    async function onNext(): Promise<void> {
        if (control !== entry) {
            openModal(<YesNoModal title="Unsaved changes!" content="Do you want to proceed?" onYes={fetchNext} />);
            return;
        }

        await fetchNext();
    }

    async function onSave(): Promise<void> {
        if (control === entry) {
            showInfoToast("No changes to save");
            return;
        }

        const payload = {
            date: date.getTime(),
            entry: entry
        };

        const request = await fetch("/api/journal/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const response = await request.json();

        if (!response.success) {
            showInfoToast(response.data);
            localStorage.setItem(getYYYYMMDD(date), entry);
            return;
        }

        setControl(entry);
        showInfoToast(`Saved ${getReadableDate(date)}`);
        window.onbeforeunload = null;
    }

    function onTextareaChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        if (control === event.target.value) {
            window.onbeforeunload = null;
        } else if (!window.onbeforeunload) {
            window.onbeforeunload = (): boolean => {
                return true;
            };
        }

        setEntry(event.target.value);
    }

    async function onDateChange(event: ChangeEvent<HTMLInputElement>): Promise<void> {
        const rawDate = new Date(event.target.value);

        const newDate = new Date(rawDate.getTime() + rawDate.getTimezoneOffset() * 60 * 1000);

        await fetchNewEntry(newDate);
    }

    return (
        <div>
            <div className="mb-4 flex items-center justify-center">
                <h2 className="mr-2">{getReadableDate(date)}</h2>
                <input
                    type="date"
                    name="date"
                    className="w-5 bg-transparent outline-none dark:invert"
                    value={getYYYYMMDD(date)}
                    min={getYYYYMMDD(startDate)}
                    max={getYYYYMMDD(today)}
                    onChange={onDateChange}
                />
            </div>
            <textarea
                className="h-[calc(100vh-16rem)] w-full rounded-2xl bg-slate-100 p-4 outline-none"
                value={entry}
                onChange={onTextareaChange}
            />
            <div className="mb-6 space-x-6">
                <If condition={!isDateEarlier(addDays(date, -1), startDate)}>
                    <EntryButton onClick={onPrev}>
                        <ArrowLeft className="mr-2 size-4" /> Prev
                    </EntryButton>
                </If>
                <EntryButton onClick={onSave}>
                    <SaveIcon className="mr-2 size-4" /> Save
                    <If condition={control !== entry}> *</If>
                </EntryButton>
                <If condition={isDateEarlier(date, today)}>
                    <EntryButton onClick={onNext}>
                        Next <ArrowRight className="ml-2 size-4" />
                    </EntryButton>
                </If>
            </div>
            <div className="absolute right-4">
                <ThemeSwitcher />
            </div>
        </div>
    );
}
