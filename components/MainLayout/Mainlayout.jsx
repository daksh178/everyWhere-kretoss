import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Mainlayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <header className="w-full">
                <Navbar />
            </header>

            {/* Main content grows to push footer down */}
            <main className="flex-1">
                {/* Hero Section with actual image */}
                <div className="relative w-full">
                    <img
                        src="/hero_bg.png"
                        alt="Hero Background"
                        className="w-full object-cover"
                    />
                    {/* Content overlaps the image */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        {children}
                    </div>
                </div>
            </main>

            {/* Footer stays at bottom */}
            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    )
}
