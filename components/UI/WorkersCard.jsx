import React from 'react'

export default function WorkersCard() {
    return (
        <>
            <div className="bg-white rounded-[10px] shadow-md border border-gray-200 overflow-hidden mb-5">
                {/* flex-col on mobile, flex-row on larger screens */}
                <div className="flex flex-col sm:flex-row">

                    {/* Image Section */}
                    <div className="relative p-3 flex items-center justify-center rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none">
                        <img
                            src="/jobcard/user1.png"
                            alt="job"
                            className="w-full sm:w-48 h-auto object-cover rounded-lg"
                        />
                        <div className="absolute top-1 right-1 flex -space-x-2">
                            {/* <img src="/badge2.png" alt="badge2" className="w-7 h-7 rounded-full border-2 border-white" /> */}
                            <img src="/badge1.png" alt="badge1" className="w-7 h-7 rounded-full border-2 border-white" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                                <h3 className="text-base font-medium text-black">John Doe</h3>
                                <h4 className="text-lg font-semibold text-black">
                                    Cook | Waiter | Barman{" "}
                                    <span className="ml-2 text-sm text-gray-500 font-normal bg-gray-100 px-2 py-0.5 rounded-full">
                                        From 02/04/25
                                    </span>
                                </h4>
                            </div>
                            <div className="flex gap-1 text-yellow-400">
                                {Array(5).fill(0).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        <hr className="mt-2 text-[#CECECE]" />

                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1 text-black">
                                <img src="/jobcard/location.png" alt="location" /> Paris
                            </span>
                            <span className="flex items-center gap-1 text-black">
                                <img src="/jobcard/dollar.png" alt="salary" /> 30K € / Y
                            </span>
                            <span className="flex items-center gap-1 text-black">
                                <img src="/jobcard/loading.png" alt="experience" /> 3 Years
                            </span>
                        </div>

                        <p className="text-gray-500 text-sm mt-2">
                            I am willing to start new adventure. I am very much awaited and thrilled.
                        </p>

                        <div className="flex gap-2 mt-3 w-full">
                            <button className="flex-1 border border-[#757575] text-[#757575] text-[12px] sm:text-[14px] px-2 sm:px-4 py-1 rounded-md">
                                Long term
                            </button>
                            <button className="flex-1 border border-[#757575] text-[#757575] text-[12px] sm:text-[14px] px-2 sm:px-4 py-1 rounded-md">
                                Introvert
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-1 bg-[#29ABE2] text-white text-[12px] sm:text-[14px] px-2 sm:px-4 py-2 rounded-md shadow hover:bg-[#1e90c2] transition">
                                <img src="/jobcard/apply.png" alt="save" className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="font-medium">Contact</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-white rounded-[10px] shadow-md border border-gray-200 overflow-hidden mb-5">
                {/* flex-col on mobile, flex-row on larger screens */}
                <div className="flex flex-col sm:flex-row">

                    {/* Image Section */}
                    <div className="relative p-3 flex items-center justify-center rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none">
                        <img
                            src="/jobcard/user2.png"
                            alt="job"
                            className="w-full sm:w-48 h-auto object-cover rounded-lg"
                        />
                        <div className="absolute top-1 right-1 flex -space-x-2">
                            {/* <img src="/badge2.png" alt="badge2" className="w-7 h-7 rounded-full border-2 border-white" /> */}
                            <img src="/badge1.png" alt="badge1" className="w-7 h-7 rounded-full border-2 border-white" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-4">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                                <h3 className="text-base font-medium text-black">James Smith</h3>
                                <h4 className="text-lg font-semibold text-black">
                                    Cook | Waiter | Barman{" "}
                                    {/* <span className="ml-2 text-sm text-gray-500 font-normal bg-gray-100 px-2 py-0.5 rounded">
                                        From 02/04/25
                                    </span> */}
                                </h4>
                            </div>
                            <div className="flex gap-1 text-yellow-400">
                                {Array(5).fill(0).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        <hr className="mt-2 text-[#CECECE]" />

                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1 text-black">
                                <img src="/jobcard/location.png" alt="location" /> Paris
                            </span>
                            <span className="flex items-center gap-1 text-black">
                                <img src="/jobcard/dollar.png" alt="salary" /> 30K € / Y
                            </span>
                            <span className="flex items-center gap-1 text-black">
                                <img src="/jobcard/loading.png" alt="experience" /> 3 Years
                            </span>
                        </div>

                        <p className="text-gray-500 text-sm mt-2">
                            I am willing to start new adventure. I am very much awaited and thrilled.
                        </p>

                        <div className="flex gap-2 mt-3 w-full">
                            <button className="flex-1 border border-[#757575] text-[#757575] text-[12px] sm:text-[14px] px-2 sm:px-4 py-1 rounded-md">
                                Long term
                            </button>
                            <button className="flex-1 border border-[#757575] text-[#757575] text-[12px] sm:text-[14px] px-2 sm:px-4 py-1 rounded-md">
                                Introvert
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-1 bg-[#29ABE2] text-white text-[12px] sm:text-[14px] px-2 sm:px-4 py-2 rounded-md shadow hover:bg-[#1e90c2] transition">
                                <img src="/jobcard/apply.png" alt="save" className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="font-medium">Contact</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
