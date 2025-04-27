"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { DialogDemo } from "./product/Create";
import { Input } from "./ui/input";
import { BlogCreate } from "./blog/features/Create";
import Image from "next/image";
import Cookies from "js-cookie";

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
            const token = Cookies.get("auth_token");
            if (!token) {
                console.error("No auth token found in cookies");
                return;
            }

            try {
                setLoading(true);
                const response = await fetch(
                    "http://127.0.0.1:8000/api/v1/users/me",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json"
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch user profile");
                }

                const userData = await response.json();

                setProfile({
                    avatar: userData.data?.profile,
                    name: userData.data?.name,
                    email: userData.data?.email,
                    role: userData.data?.role
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        window.history.pushState({}, "", `?search=${searchQuery}`);
    }, [searchQuery]);

    const getFirstLetter = () => {
        return profile?.email ? profile.email.charAt(0).toUpperCase() : "S";
    };

    return (
        <div className="flex items-center justify-between">
            <h1 className="pl-5 text-2xl font-medium text-green-500">
                {title}
            </h1>
            <div className="flex mx-5 h-20 items-center justify-end gap-x-5 text-black">
                {enableSearch && (
                    <div className="flex items-center">
                        <SearchIcon className="size-4 text-gray-400 -mr-6" />
                        <Input
                            className="w-[200px] placeholder:text-gray-400 pl-8"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                    </div>
                )}
                {showAddButton && (
                    <div>{blog ? <BlogCreate /> : <DialogDemo />}</div>
                )}

                <div className="flex items-center">
                    {loading ? (
                        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                    ) : profile?.avatar ? (
                        <Image
                            alt="User Avatar"
                            src={profile.avatar}
                            width={40}
                            height={40}
                            className="rounded-full"
                            onError={() =>
                                setProfile({ ...profile, avatar: "" })
                            }
                        />
                    ) : (
                        <div
                            className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center text-lg font-medium"
                            title={profile?.name || "User"}
                        >
                            {getFirstLetter()}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
