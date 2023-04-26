"use client";

import { addDays, getReadableDate, isDateEarlier } from "@/src/helpers/server/DateHelper";
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
                <button className="mt-4 rounded bg-slate-100 px-4 py-2 transition hover:bg-slate-200" onClick={onPrev}>
                    Prev
                </button>
                <button className="mt-4 rounded bg-slate-100 px-4 py-2 transition hover:bg-slate-200" onClick={onSave}>
                    Save
                </button>
                {isDateEarlier(date, today) && (
                    <button
                        className="mt-4 rounded bg-slate-100 px-4 py-2 transition hover:bg-slate-200"
                        onClick={onNext}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}
