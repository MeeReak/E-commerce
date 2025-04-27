import MetricsPanel from "@/components/dashboard/MetricsPanel";
import BlogPosts from "@/components/dashboard/BlogPosts";
import RecentOrders from "@/components/dashboard/RecentOrders";
import RevenueOverview from "@/components/dashboard/RevenueOverview";
import TopProducts from "@/components/dashboard/TopProduct";
import { Header } from "@/components/Header";
import { Suspense } from "react";
import { cookies } from "next/headers";

export default async function Home() {
    const token = (await cookies()).get("auth_token")?.value || "";

    return (
        <Suspense>
            <div className="bg-[#eef2f8]">
                <Header title="Dashboard" />
                <div className=" px-5 pb-5 gap-y-5 flex flex-col">
                    <MetricsPanel token={token} />
                    <div className="flex items-start gap-x-4">
                        <RevenueOverview token={token} />
                        <RecentOrders token={token} />
                    </div>
                    <div className="flex items-start gap-x-4">
                        <TopProducts token={token} />
                        <BlogPosts token={token} />
                    </div>
                </div>
            </div>
        </Suspense>
    );
}
