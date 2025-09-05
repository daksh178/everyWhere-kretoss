import React from 'react'

export default function JobCard() {
    return (
        <div className=" bg-white rounded-[10px] border border-gray-300 shadow-[4px_4px_11px_0px_rgba(117,117,117,0.19)] overflow-hidden mb-5">
            {/* flex-col on mobile, flex-row on larger screens */}
            <div className="flex flex-col sm:flex-row">

                {/* Image Section */}
                <div className="relative p-3 flex items-center justify-center rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none">
                    <img
                        src="/jobcard/jobimage.png"
                        alt="job"
                        className="w-full sm:w-48 h-auto object-cover rounded-lg"
                    />
                    <div className="absolute top-1 right-1 flex -space-x-2">
                        <img src="/badge2.png" alt="badge2" className="w-7 h-7 rounded-full border-2 border-white" />
                        <img src="/badge1.png" alt="badge1" className="w-7 h-7 rounded-full border-2 border-white" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                            <h3 className="text-base font-medium text-black">Dunkin</h3>
                            <h4 className="text-lg font-semibold text-black">
                                Sales Manager{" "}
                                <span className="font-medium text-[15px] leading-[16px] text-center font-poppins ml-2 text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                    From 02/04/25
                                </span>

                            </h4>
                        </div>
                        <div className="flex items-center justify-center w-[120px] h-[28px] rounded-full gap-[2px] px-[2px] bg-white">
                            {Array(5).fill(0).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[19px] h-[19px] flex items-center justify-center"
                                >
                                    <span className="text-lg font-bold w-[8px] h-[15px] text-[#FFAD2A] flex items-center justify-center">
                                        ★
                                    </span>
                                </div>
                            ))}
                        </div>


                    </div>

                    <hr className="mt-2 text-[#CECECE]" />

                    <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1 text-black h-[21px] w-[56px]">
                            <img src="/jobcard/location.png" alt="location" /> Paris
                        </span>
                        <span className="flex items-center gap-1 text-black h-[22px] w-[91px]">
                            <img src="/jobcard/dollar.png" alt="salary" /> 30K € / Y
                        </span>
                        <span className="flex items-center gap-1 text-black h-[21px] w-[70px]">
                            <img src="/jobcard/loading.png" alt="experience" /> 3 Years
                        </span>
                        <span className="flex items-center gap-1 text-black h-[21px] w-[148px]">
                            <img src="/jobcard/home.png" alt="housing" /> Provides Housing
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                        We're looking for a dynamic Sales Manager to lead our team
                    </p>

                    <div className="flex gap-3 mt-3 w-full">
                        <button className="w-[102px] h-[36px] flex items-center justify-center gap-[8px] border-[1.08px] border-[#757575] text-[#757575] text-[12px] sm:text-[14px] rounded-[10px]">
                            Long term
                        </button>
                        <button className="w-[151px] h-[36px] flex items-center justify-center gap-[8px] border-[1.08px] border-[#757575] text-[#757575] text-[12px] sm:text-[14px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-[10px]">
                            Extrovert Friendly
                        </button>

                        <button className="w-[111px] h-[38px] flex items-center justify-center gap-[8px] bg-[#29ABE2] text-white text-[12px] sm:text-[14px] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-[10px] shadow hover:bg-[#1e90c2] transition">
                            <img src="/jobcard/apply.png" alt="save" className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="font-medium">Apply</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
