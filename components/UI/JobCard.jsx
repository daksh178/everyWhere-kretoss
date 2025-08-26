import React from 'react'

export default function JobCard() {
    return (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-5">
            <div className="flex">

                <div className="relative p-3 flex items-center justify-center rounded-tl-2xl">
                    <img
                        src="/jobcard/jobimage.png"
                        alt="job"
                        className="max-w-full max-h-full object-contain rounded-lg"
                    />
                    <div className="absolute top-1 right-0 flex -space-x-2">
                        <img src="/badge2.png" alt="badge2" className="w-7 h-7 rounded-full border-2 border-white" />
                        <img src="/badge1.png" alt="badge1" className="w-7 h-7 rounded-full border-2 border-white" />
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-base font-medium text-black">Dunkin</h3>
                            <h4 className="text-lg font-semibold text-black">
                                Sales Manager{" "}
                                <span className="ml-2 text-sm text-gray-500 font-normal bg-gray-100 px-2 py-0.5 rounded">
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
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/home.png" alt="housing" /> Provides Housing
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                        We're looking for a dynamic Sales Manager to lead our team
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                        <button className='border border-[#757575] text-[#757575] text-[14px] px-4 py-1 rounded-md'>
                            Long term
                        </button>
                        <button className='border border-[#757575] text-[#757575] text-[14px] px-4 py-1 rounded-md'>
                            Extrovert Friendly
                        </button>
                        <button className="flex items-center gap-2 bg-[#29ABE2] text-white px-4 py-2 rounded-md shadow hover:bg-[#1e90c2] transition">
                            <img src="/jobcard/apply.png" alt="save" />
                            <span className="text-sm font-medium">Apply</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
