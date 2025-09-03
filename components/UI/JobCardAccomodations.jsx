import React from 'react'

export default function JobCardAccomodations() {
    return (
        <div className="bg-white rounded-[10px] shadow-md border border-gray-200 overflow-hidden mb-5">
            {/* flex-col on mobile, flex-row on larger screens */}
            <div className="flex flex-col sm:flex-row">

                {/* Image Section */}
                <div className="relative p-3 flex items-center justify-center rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none">
                    <img
                        src="/jobcard/jobimage.png"
                        alt="job"
                        className="w-full sm:w-48 h-auto object-cover rounded-lg"
                    />
                    <div className="absolute top-3 right-1 flex -space-x-2">
                        {/* <img src="/badge2.png" alt="badge2" className="w-7 h-7 rounded-full border-2 border-white" /> */}
                        <img src="/badge3.png" alt="badge3" className="w-7 h-7 rounded-full border-2 border-white" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                            <h3 className="text-lg font-semibold text-black">500 € / month</h3>
                            <h4 className="text-base font-medium text-black">
                                Flat with 2 bedrooms{" "}
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

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3 text-sm text-gray-600">
                        {/* Item 1 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/apartment.png" alt="apartment" className="w-5 h-5" />
                            Apartment
                        </span>

                        {/* Item 2 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/5-locals.png" alt="locals" className="w-5 h-5" />
                            5 locals
                        </span>

                        {/* Item 3 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/100-m2.png" alt="area" className="w-5 h-5" />
                            100 m2
                        </span>

                        {/* Item 4 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/Floor-2.png" alt="floor" className="w-5 h-5" />
                            Floor 2
                        </span>

                        {/* Item 5 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/5-bedrooms.png" alt="bedrooms" className="w-5 h-5" />
                            5 bedrooms
                        </span>

                        {/* Item 6 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/3-bathrooms.png" alt="bathrooms" className="w-5 h-5" />
                            3 bathrooms
                        </span>

                        {/* Item 7 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/Furnished.png" alt="furnished" className="w-5 h-5" />
                            Furnished
                        </span>

                        {/* Item 8 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/Garden.png" alt="garden" className="w-5 h-5" />
                            Garden
                        </span>
                    </div>


                    <p className="text-gray-500 text-sm mt-2">
                        We're looking for a dynamic Sales Manager to lead our team
                    </p>

                    <div className="flex gap-2 mt-3 w-full">
                        <button className="flex-1 border border-[#757575] text-[#757575] text-[12px] sm:text-[14px] px-2 sm:px-4 py-1 rounded-md">
                            Long term
                        </button>
                        <button className="flex-1 border border-[#757575] text-[#757575] text-[12px] sm:text-[14px] px-2 sm:px-4 py-1 rounded-md">
                            Extrovert Friendly
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-1 bg-[#29ABE2] text-white text-[12px] sm:text-[14px] px-2 sm:px-4 py-2 rounded-md shadow hover:bg-[#1e90c2] transition">
                            <img src="/jobcard/apply.png" alt="save" className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="font-medium">Apply</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
