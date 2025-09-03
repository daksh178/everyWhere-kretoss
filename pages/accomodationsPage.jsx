import React from 'react'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import HomePgaebutton from '@/components/UI/HomePgaebutton'
import JobCard from '@/components/UI/JobCard'
export default function accomodationsPage() {
    return (
        <div className="flex flex-col h-screen">
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Sticky Filter Bar */}
            <div className="sticky top-[64px] z-40 bg-white shadow-md px-5 py-2 flex items-center gap-4">
                {/* Left Filter */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <img src="filter.png" alt="filter" />
                    <span className="text-[#29ABE2]">All Filters</span>
                </div>

                {/* Center Filter Buttons (stretch to fill) */}
                <div className="flex flex-1 gap-2">
                    <HomePgaebutton
                        leftImg={'/location.png'}
                        text={'Location'}
                        rightImg={'/dropdown.png'}
                        className="flex-1 border border-[#61C1EA] text-[#61C1EA]"
                    />
                    <HomePgaebutton
                        leftImg={'/contact.png'}
                        text={'Contact'}
                        rightImg={'/dropdown.png'}
                        className="flex-1 border border-[#61C1EA] text-[#61C1EA]"
                    />
                    <HomePgaebutton
                        leftImg={'/salary.png'}
                        text={'Salary'}
                        rightImg={'/dropdown.png'}
                        className="flex-1 border border-[#EBEBEB] text-[#757575]"
                    />
                    <HomePgaebutton
                        leftImg={'/exp.png'}
                        text={'Experience'}
                        rightImg={'/dropdown.png'}
                        className="flex-1 border border-[#EBEBEB] text-[#757575]"
                    />
                    <HomePgaebutton
                        leftImg={'/language.png'}
                        text={'Languages'}
                        rightImg={'/dropdown.png'}
                        className="flex-1 border border-[#EBEBEB] text-[#757575]"
                    />
                    <HomePgaebutton
                        leftImg={'/rating.png'}
                        text={'Rating level'}
                        rightImg={'/dropdown.png'}
                        className="flex-1 border border-[#EBEBEB] text-[#757575]"
                    />
                    <HomePgaebutton
                        leftImg={'/workstyle.png'}
                        text={'Work style'}
                        rightImg={'/dropdown.png'}
                        className="flex-1 border border-[#EBEBEB] text-[#757575]"
                    />
                </div>

                {/* Right Save Search */}
                <div className="flex-shrink-0">
                    <button className="flex items-center gap-2 bg-[#29ABE2] text-white px-4 py-2 rounded-md shadow hover:bg-[#1e90c2] transition">
                        <img src="savesearch.png" alt="save" className="w-4 h-4" />
                        <span className="text-sm font-medium">SAVE SEARCH</span>
                    </button>
                </div>
            </div>


            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Column (scrollable jobs) */}
                <div className="w-full lg:w-3/5 overflow-y-auto px-5 py-3">
                    <span className="text-[#757575] text-sm">15 results found</span>

                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-4">
                            <div className="flex rounded-md bg-gray-100 p-2 overflow-hidden">
                                <button className="px-4 py-2 bg-[#29ABE2] rounded-md text-white text-sm font-medium">
                                    Jobs
                                </button>
                                <button className="px-4 py-2 text-black text-sm font-medium hover:bg-gray-100">
                                    Accommodations
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
                            <img src="/sort.png" alt="sort" />
                            <span>Sort by:</span>
                            <span className="font-medium">Most recent</span>
                            <img src="/arrow.png" alt="sort" />
                        </div>
                    </div>

                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>

                {/* Right Column (fixed map) */}
                <div className="hidden lg:block w-2/5">
                    <img
                        src="/jobcard/map.png"
                        alt="map"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="sticky bottom-0 z-50">
                <Footer />
            </div>
        </div>
    )
}
