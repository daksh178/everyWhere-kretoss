import React from 'react'

export default function Footeraccomodations() {
    return (
        <footer className="w-full flex flex-col text-white">
            {/* Top Links Section */}
            <div className="w-full bg-[#FFAB24] px-4 py-3">
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-left sm:text-center">
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

            {/* Bottom Section */}
            <div className="w-full bg-[#FFC973] flex flex-col sm:flex-row items-center sm:items-center justify-between px-4 sm:px-8 md:px-12 py-3 gap-3">
                {/* Left Section */}
                <div className="text-xs sm:text-sm text-left w-full sm:w-auto">
                    © Everywhere Jobs
                </div>

                {/* Right Section - Socials */}
                <div className="flex items-center justify-start sm:justify-end gap-4 w-full sm:w-auto">
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
