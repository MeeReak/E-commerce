import MetricsPanel from "@/components/dashboard/MetricsPanel";
import BlogPosts from "@/components/dashboard/BlogPosts";
import RecentOrders from "@/components/dashboard/RecentOrders";
import RevenueOverview from "@/components/dashboard/RevenueOverview";
import TopProducts from "@/components/dashboard/TopProduct";
import { Header } from "@/components/Header";
import { Suspense } from "react";

export default async function Home() {
    return (
        <Suspense>
            <div className="bg-[#eef2f8]">
                <Header title="Dashboard" />
                <div className=" px-5 pb-5 gap-y-5 flex flex-col">
                    <MetricsPanel />
                    <div className="flex items-start gap-x-4">
                        <RevenueOverview />
                        <RecentOrders />
                    </div>
                    <div className="flex items-start gap-x-4">
                        <TopProducts />
                        <BlogPosts />
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
