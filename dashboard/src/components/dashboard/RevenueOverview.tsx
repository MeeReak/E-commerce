"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";

const RevenueOverview = () => {
    // Sample data for the chart
    const data = [
        { month: "Jan", value: 3000 },
        { month: "Feb", value: 4500 },
        { month: "Mar", value: 2300 },
        { month: "Apr", value: 4600 },
        { month: "May", value: 6000 },
        { month: "Jun", value: 3800 },
        { month: "Jul", value: 6000 },
        { month: "Aug", value: 1400 },
        { month: "Sep", value: 1500 },
        { month: "Oct", value: 5200 },
        { month: "Nov", value: 5500 },
        { month: "Dec", value: 2800 }
    ];

    // Formatter for y-axis labels to add $ symbol
    const formatYAxis = (value: number) => {
        if (value === 0) return "$0";
        return `$${value}`;
    };

    return (
        <Card className=" w-[65%] bg-black border-gray-800">
            <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl">Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
                        >
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#888", fontSize: 12 }}
                            />
                            <YAxis
                                tickFormatter={formatYAxis}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#888", fontSize: 12 }}
                                domain={[0, 6000]}
                                ticks={[0, 1500, 3000, 4500, 6000]}
                            />
                            <Bar
                                dataKey="value"
                                fill="#22c55e"
                                radius={[5, 5, 0, 0]}
                                barSize={40}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueOverview;
