"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign, Users, Newspaper, ClipboardListIcon } from "lucide-react";

interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
    period: string;
    iconBg: string;
}

const SkeletonBox = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const MetricCard = ({
    title,
    value,
    change,
    icon,
    period,
    iconBg,
    loading
}: MetricCardProps & { loading?: boolean }) => {
    const isPositive = change?.startsWith("+");

    return (
        <div className="w-full bg-[#ffffff] shadow-sm rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-center mb-2">
                {loading ? (
                    <>
                        <SkeletonBox className="h-5 w-24" />
                        <SkeletonBox className="h-9 w-9 rounded-full" />
                    </>
                ) : (
                    <>
                        <span className="text-gray-400 font-medium text-lg">
                            {title}
                        </span>
                        <div className={`p-2 rounded-full ${iconBg}`}>
                            {icon}
                        </div>
                    </>
                )}
            </div>
            <div className="mt-1">
                {loading ? (
                    <>
                        <SkeletonBox className="h-8 w-28 mb-2" />
                        <SkeletonBox className="h-5 w-32" />
                    </>
                ) : (
                    <>
                        <h2 className="text-gray-800 text-3xl font-bold mb-1">
                            {value}
                        </h2>
                        <p className="text-sm">
                            <span
                                className={`${
                                    isPositive
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {change}
                            </span>
                            <span className="text-gray-400"> {period}</span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

const MetricsPanel = ({ token }: { token: string }) => {
    const [loading, setLoading] = useState(true);
    const [metricsData, setMetricsData] = useState({
        totalSales: "",
        orders: "",
        users: "",
        blogs: ""
    });

    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const fetchMetrics = async () => {
            try {
                const [salesRes, ordersRes, usersRes, blogsRes] =
                    await Promise.all([
                        axios.get("http://127.0.0.1:8000/api/v1/total-spent", {
                            headers
                        }),
                        axios.get("http://127.0.0.1:8000/api/v1/orders", {
                            headers
                        }),
                        axios.get("http://127.0.0.1:8000/api/v1/users", {
                            headers
                        }),
                        axios.get("http://127.0.0.1:8000/api/v1/blogs", {
                            headers: {
                                ...headers,
                                Accept: "application/json"
                            }
                        })
                    ]);

                setMetricsData({
                    totalSales: `${new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    }).format(salesRes.data.total)}`,
                    orders: `${ordersRes.data.meta.total}`,
                    users: `${usersRes.data.meta.total}`,
                    blogs: `${blogsRes.data.meta.total}`
                });
            } catch (err) {
                console.error("Error fetching metrics:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMetrics();
    }, [token]);

    const metrics = [
        {
            title: "Total Sales",
            value: metricsData.totalSales,
            change: "+20.1%",
            period: "last month",
            icon: <DollarSign size={20} className="text-white" />,
            iconBg: "bg-gray-700"
        },
        {
            title: "Orders",
            value: metricsData.orders,
            change: "32",
            period: "pending",
            icon: <ClipboardListIcon size={20} className="text-white" />,
            iconBg: "bg-[#ff0f7e]"
        },
        {
            title: "Customers",
            value: metricsData.users,
            change: "+5%",
            period: "new customers",
            icon: <Users size={20} className="text-white" />,
            iconBg: "bg-[#32b24a]"
        },
        {
            title: "Blogs",
            value: metricsData.blogs,
            change: "+7",
            period: "since last week",
            icon: <Newspaper size={20} className="text-white" />,
            iconBg: "bg-[#0387d2]"
        }
    ];

    return (
        <div className="flex gap-x-4">
            {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} loading={loading} />
            ))}
        </div>
    );
};

export default MetricsPanel;
