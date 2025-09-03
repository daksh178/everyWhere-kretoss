import React from "react";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col text-white">
            {/* Top Links Section */}
            <div className="w-full bg-sky-500 flex items-center justify-center px-4 py-2">
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-white text-center">
                    <a href="#" className="hover:underline">100% secured payments</a>
                    <a href="#" className="hover:underline">GCU</a>
                    <a href="#" className="hover:underline">Terms and conditions</a>
                    <a href="#" className="hover:underline">Legal</a>
                    <a href="#" className="hover:underline">Cookies</a>
                    <a href="#" className="hover:underline">Personal data</a>
                    <a href="#" className="hover:underline">Giveaways</a>
                    <a href="#" className="hover:underline">More about us</a>
                </div>
            </div>

            {/* Bottom Copyright + Socials */}
            <div className="w-full bg-[#61C1EA] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-2">
                <div className="text-xs md:text-sm text-center md:text-left">
                    © Everywhere Jobs
                </div>

                <div className="flex items-center justify-center gap-3 mt-2 md:mt-0">
                    <img src="/footer/facebook.png" alt="Facebook" className=" cursor-pointer" />
                    <img src="/footer/twitter.png" alt="X" className=" cursor-pointer" />
                    <img src="/footer/instagram.png" alt="Instagram" className=" cursor-pointer" />
                    <img src="/footer/linkedin.png" alt="LinkedIn" className=" cursor-pointer" />
                    <img src="/footer/youtube.png" alt="YouTube" className=" cursor-pointer" />
                </div>
            </div>
        </footer>
    );
}
