"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign, Users, Newspaper, ClipboardListIcon } from "lucide-react";
import api from "@/lib/axios";

// Types
interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
    period: string;
    iconBg: string;
    loading?: boolean;
}

interface MetricsData {
    totalSales: string;
    orders: string;
    users: string;
    blogs: string;
}

// Utility Components
const SkeletonBox = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

// Metric Card
const MetricCard: React.FC<MetricCardProps> = ({
    title,
    value,
    change,
    icon,
    period,
    iconBg,
    loading = false
}) => {
    const isPositive = change?.startsWith("+");

    return (
        <div className="w-full bg-white shadow-sm rounded-lg p-6 flex flex-col">
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
                                className={
                                    isPositive
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
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

// Data Fetching Function
const fetchMetricsData = async (): Promise<MetricsData> => {
    const [salesRes, ordersRes, usersRes, blogsRes] = await Promise.all([
        await api.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/total-spent`),
        await api.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/orders`),
        await api.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/users`),
        await api.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/blogs`)
    ]);

    return {
        totalSales: new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(salesRes.data.total),
        orders: ordersRes.data.meta.total.toString(),
        users: usersRes.data.meta.total.toString(),
        blogs: blogsRes.data.meta.total.toString()
    };
};

// Main Panel
const MetricsPanel: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [metricsData, setMetricsData] = useState<MetricsData>({
        totalSales: "",
        orders: "",
        users: "",
        blogs: ""
    });

    useEffect(() => {
        const loadMetrics = async () => {
            try {
                const data = await fetchMetricsData();
                setMetricsData(data);
            } catch (err) {
                console.error("Error fetching metrics:", err);
            } finally {
                setLoading(false);
            }
        };

        loadMetrics();
    }, []);

    const metrics: MetricCardProps[] = [
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
