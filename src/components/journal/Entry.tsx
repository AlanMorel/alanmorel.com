"use client";

import EntryButton from "@/src/components/journal/EntryButton";
import { addDays, getReadableDate, isDateEarlier } from "@/src/helpers/server/DateHelper";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
    entry: string;
}

export default function Entry(props: Props): JSX.Element {
    const today = new Date();

    const [entry, setEntry] = useState(props.entry);
    const [date, setDate] = useState(today);

    const fetchNewEntry = async (days: number): Promise<any> => {
        const newDate = addDays(date, days);

        const payload = {
            date: newDate.getTime()
        };

        const request = await fetch("/journal/fetch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const response = await request.json();

        if (!response.success) {
            return;
        }

        setEntry(response.data);
        setDate(newDate);
    };

    const onPrev = (): void => {
        fetchNewEntry(-1);
    };

    const onNext = (): void => {
        fetchNewEntry(1);
    };

    const onSave = (): void => {
        console.log("save");
    };

    const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setEntry(event.target.value);
    };

    return (
        <div>
            <h2 className="mb-8 text-slate-800">{getReadableDate(date)}</h2>
            <textarea
                className="h-[50rem] w-full rounded-2xl bg-slate-100 p-4 outline-none"
                value={entry}
                onChange={onTextareaChange}
            />
            <div className="space-x-6">
                <EntryButton onClick={onPrev}>
                    <ArrowSmallLeftIcon className="mr-2 h-4 w-4" /> Prev
                </EntryButton>
                <EntryButton onClick={onSave}>
                    <DocumentArrowDownIcon className="mr-2 h-4 w-4" /> Save
                </EntryButton>
                {isDateEarlier(date, today) && (
                    <EntryButton onClick={onNext}>
                        Next <ArrowSmallRightIcon className="ml-2 h-4 w-4" />
                    </EntryButton>
                )}
            </div>
        </div>
    );
}
