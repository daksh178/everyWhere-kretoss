"use client";
import React from "react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full border border-[#EBEBEB] shadow-sm px-2 flex items-center justify-between bg-white">
            <div className="flex items-center flex-1">
                <Image
                    src="/nav/logo.png"
                    alt="Logo"
                    width={230}
                    height={50}
                    className="object-contain"
                />

                <div className="hidden md:flex flex-1">
                    <div className="w-full relative">
                        <img
                            src="/nav/search.png"
                            alt="Search"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            type="text"
                            placeholder="Job name, Sector, Keyword ..."
                            className="w-[612px] pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="hidden md:block bg-white border border-gray-200 text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                    PUBLISH AN OFFER
                </button>

                <div className="flex items-center gap-3">
                    <img src="/nav/menu.png" alt="Apps" className="cursor-pointer" />
                    <img src="/nav/mail.png" alt="Mail" className="cursor-pointer" />
                    <img src="/nav/bell.png" alt="Notifications" className="cursor-pointer" />
                    <img src="/nav/circle.png" alt="Refresh" className="cursor-pointer" />

                    {/* User Avatar + Chevron */}
                    <div className="flex items-center gap-1 cursor-pointer">
                        <img
                            src="https://randomuser.me/api/portraits/men/15.jpg"
                            alt="User"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <img
                            src="/nav/Union.png"
                            alt="Dropdown"
                        />
                    </div>
                </div>
            </div>

        </nav>
    );
}
