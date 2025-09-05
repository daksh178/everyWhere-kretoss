import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Mainlayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full">
                <Navbar />
            </header>

            <main className="flex-1">
                <div className="absolute top-0 left-0 w-full -z-10">
                    <img src="/hero_bg.png" alt="Hero Background"
                        className="w-full object-cover"
                    />
                </div>
                <div className="relative z-10 py-10 w-[1440px] m-auto">
                    {children}
                </div>
            </main>

            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    )
}