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

const RevenueOverview = ({ token }: { token: string }) => {
    const [data, setData] = useState<{ month: string; value: number }[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTotalSpent = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/v1/total-spent",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch total spent");
                }

                const result = await response.json();
                const totalSpent = result.total;

                // Random values between 1000 and 5000
                const getRandom = () => Math.floor(Math.random() * 4000) + 1000;

                const fullData = [
                    { month: "Jan", value: getRandom() },
                    { month: "Feb", value: getRandom() },
                    { month: "Mar", value: getRandom() },
                    { month: "Apr", value: totalSpent },
                    { month: "May", value: 0 },
                    { month: "Jun", value: 0 },
                    { month: "Jul", value: 0 },
                    { month: "Aug", value: 0 },
                    { month: "Sep", value: 0 },
                    { month: "Oct", value: 0 },
                    { month: "Nov", value: 0 },
                    { month: "Dec", value: 0 }
                ];

                setData(fullData);
            } catch (error) {
                console.error("Error fetching total spent:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTotalSpent();
    }, []);

    const formatYAxis = (value: number) => {
        return `$${value}`;
    };

    return (
        <Card className="w-[65%] bg-[#ffffff] shadow-sm">
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
