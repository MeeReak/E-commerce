"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";
import api from "@/lib/axios";

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const generateRandomValue = () => Math.floor(Math.random() * 4000) + 1000;

const RevenueOverview = () => {
    const [data, setData] = useState<{ month: string; value: number }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRevenueData = async () => {
            try {
                const response = await api.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/v1/total-spent`
                );
                const aprilValue = response.data.total;

                const chartData = MONTHS.map((month, index) => ({
                    month,
                    value:
                        index === 3
                            ? aprilValue
                            : index < 3
                              ? generateRandomValue()
                              : 0
                }));

                setData(chartData);
            } catch (error) {
                console.error("Failed to fetch revenue data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRevenueData();
    }, []);

    const formatYAxis = (value: number) => `$${value}`;

    return (
        <Card className="w-[65%] bg-white shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="text-gray-400 text-xl">
                    Overview
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-80">
                    {!loading && (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 10,
                                    left: 0,
                                    bottom: 0
                                }}
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
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default RevenueOverview;
