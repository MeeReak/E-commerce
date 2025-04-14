"use client";

import * as React from "react";
import { Progress } from "./ui/progress";

export function Tracker({ status }: { status?: string }) {
    const [progress, setProgress] = React.useState(0);
    let loading = 0;

    console.log(status!.toLocaleLowerCase());
    if (status?.toLocaleLowerCase() == "processing") {
        loading = 35;
    } else if (status?.toLocaleLowerCase() == "on the way") {
        loading = 70;
    } else {
        loading = 100;
    }

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(loading), 500);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Progress value={progress} className=" max-w-[90%]" />;
}
