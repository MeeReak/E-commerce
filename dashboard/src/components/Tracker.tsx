"use client";

import * as React from "react";
import { Progress } from "./ui/progress";

export function Tracker({ status }: { status?: string }) {
    const [progress, setProgress] = React.useState(0);

    const progressMap: Record<string, number> = {
        pending: 0,
        processing: 35,
        shipped: 70,
        delivered: 100,
        cancelled: 0
    };

    const statusKey = status?.toLowerCase() ?? "";
    const targetProgress = progressMap[statusKey] ?? 0;

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(targetProgress), 500);
        return () => clearTimeout(timer);
    }, [targetProgress]);

    return (
        <Progress
            value={progress}
            className={`max-w-[90%]  ${
                statusKey === "cancelled" ? "bg-red-200" : ""
            }`}
        />
    );
}
