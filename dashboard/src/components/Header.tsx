"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { DialogDemo } from "./product/Create";
import { Input } from "./ui/input";
import { BlogCreate } from "./blog/features/Create";
import Image from "next/image";
import api from "@/lib/axios";

interface IHeaderProps {
    showAddButton?: boolean;
    enableSearch?: boolean;
    title?: string;
    blog?: boolean;
}

interface UserProfile {
    avatar?: string;
    name?: string;
    email?: string;
    role?: string;
}

// Skeleton Loader Component
const SkeletonBox = ({ className = "" }: { className?: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

export function Header({
    showAddButton = false,
    enableSearch = false,
    title = "Header",
    blog
}: IHeaderProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                const response = await api.get("/v1/users/me");
                const user = response.data.data;

                setProfile({
                    avatar: user?.profile || "",
                    name: user?.name,
                    email: user?.email,
                    role: user?.role
                });
            } catch (error) {
                console.error("Error fetching user profile:", error);
                setProfile({
                    name: "User",
                    avatar: ""
                });
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            window.history.pushState({}, "", `?search=${searchQuery}`);
        }
    }, [searchQuery]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const getInitial = () => profile?.email?.charAt(0).toUpperCase() || "S";

    return (
        <div className="flex items-center justify-between px-5 py-3">
            {/* Title or Skeleton */}
            {loading ? (
                <SkeletonBox className="h-8 w-40" />
            ) : (
                <h1 className="text-2xl font-medium text-green-500">{title}</h1>
            )}

            <div className="flex items-center gap-x-5 text-black">
                {/* Search */}
                {enableSearch && (
                    <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                        <Input
                            className="pl-8 w-[200px] placeholder:text-gray-400"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                    </div>
                )}

                {/* Add Button */}
                {showAddButton && (
                    <div>{blog ? <BlogCreate /> : <DialogDemo />}</div>
                )}

                {/* User Avatar or Skeleton */}
                <div className="w-10 h-10">
                    {loading ? (
                        <SkeletonBox className="w-10 h-10 rounded-full" />
                    ) : profile?.avatar ? (
                        <Image
                            alt="User Avatar"
                            src={profile.avatar}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                            onError={() =>
                                setProfile({ ...profile, avatar: "" })
                            }
                        />
                    ) : (
                        <div
                            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg font-medium"
                            title={profile?.name || "User"}
                        >
                            {getInitial()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
