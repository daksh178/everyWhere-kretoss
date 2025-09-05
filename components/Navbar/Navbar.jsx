
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
export default function Navbar() {
    return (
        <nav className="w-full h-[80px] border border-[#EBEBEB] flex items-center justify-between bg-white">
            <div className="flex items-center flex-1">
                <Image
                    src="/nav/logo.png"
                    alt="Logo"
                    width={200}
                    height={45}
                    className="object-contain"
                />

                <div className="hidden md:flex flex-1">
                    <div className="w-full relative">
                        <Search className="absolute  text-[#29ABE2] left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Job name, Sector, Keyword ..."
                            className="font-normal text-sm h-[45px] w-[612px] pl-10 pr-4 py-2 rounded-[12px] shadow-[0px_4px_11px_0px_rgba(147,147,147,0.07)] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="w-[160px] h-[45px] hidden md:block bg-white border border-gray-200 text-[#29ABE2] font-poppins font-semibold text-sm leading-none tracking-normal px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                    PUBLISH AN OFFER
                </button>


                <div className="flex items-center gap-3">
                    <img src="/nav/menu.png" alt="Apps" className="cursor-pointer" />
                    <img src="/nav/mail.png" alt="Mail" className="cursor-pointer" />
                    <img src="/nav/bell.png" alt="Notifications" className="cursor-pointer" />
                    <div class="w-[45px] h-[45px] opacity-100 rounded-[10px] border gap-[10px] border border-[rgba(235,235,235,1)] px-[12px] py-[10px] flex items-center justify-center">
                        <img src="/nav/circle.png" alt="Refresh" class="cursor-pointer" />
                    </div>


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
