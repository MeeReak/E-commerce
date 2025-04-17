// components/MetricsPanel.jsx
import React from "react";
import {
    DollarSign,
    Users,
    CreditCard,
    Activity,
    Newspaper,
    ClipboardListIcon
} from "lucide-react";

interface MetricCardProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
    period: string;
    iconBg: string;
}

const MetricCard = ({
    title,
    value,
    change,
    icon,
    period,
    iconBg
}: MetricCardProps) => {
    const isPositive = change.startsWith("+");

    return (
        <div className=" w-full bg-[#ffffff] shadow-sm rounded-lg p-6 flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 font-medium text-lg">
                    {title}
                </span>
                <div className={`p-2 rounded-full ${iconBg}`}>{icon}</div>
            </div>

            <div className="mt-1">
                <h2 className="text-gray-800 text-3xl font-bold mb-1">
                    {value}
                </h2>
                <p className="text-sm">
                    <span
                        className={`${isPositive ? "text-green-500" : "text-red-500"}`}
                    >
                        {change}
                    </span>
                    <span className="text-gray-400"> {period}</span>
                </p>
            </div>
        </div>
    );
};

const MetricsPanel = () => {
    const metrics = [
        {
            title: "Total Sales",
            value: "$45,231.89",
            change: "+20.1%",
            period: "last month",
            icon: <DollarSign size={20} className="text-white" />,
            iconBg: "bg-gray-700"
        },
        {
            title: "Orders",
            value: "2350",
            change: "32",
            period: "pending",
            icon: <ClipboardListIcon size={20} className="text-white" />,
            iconBg: "bg-[#ff0f7e]"
        },
        {
            title: "Customers",
            value: "8910",
            change: "+5%",
            period: "new customers",
            icon: <Users size={20} className="text-white" />,
            iconBg: "bg-[#32b24a]"
        },
        {
            title: "Blogs",
            value: "100",
            change: "+7",
            period: "since last week",
            icon: <Newspaper size={20} className="text-white" />,
            iconBg: "bg-[#0387d2]"
        }
    ];

    return (
        <div className=" flex gap-x-4">
            {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
            ))}
        </div>
    );
};

export default MetricsPanel;
