import React from 'react'
import Layout from '@/components/Layout/Layout'
import HomePgaebutton from '@/components/UI/HomePgaebutton'
import JobCard from '@/components/UI/JobCard'
export default function index() {
  return (
    <Layout>
      <div className="bg-white flex items-center gap-5 px-5 py-2 shadow-md overflow-hidden">

        <div className='flex gap-2'>
          <div className="flex items-center gap-2">
            <img src="filter.png" alt="filter" />
            <span className="text-[#29ABE2]">All Filters</span>
          </div>

          <div className="w-px h-6 bg-gray-300"></div>
        </div>
        <div className='flex gap-2'>
          <HomePgaebutton
            leftImg={'/location.png'}
            text={'Location'}
            rightImg={'/dropdown.png'}
            className="border border-[#61C1EA] text-[#61C1EA]"
          />
          <HomePgaebutton
            leftImg={'/contact.png'}
            text={'Contact'}
            rightImg={'/dropdown.png'}
            className="border border-[#61C1EA] text-[#61C1EA]"
          />

          <HomePgaebutton
            leftImg={'/salary.png'}
            text={'Salary'}
            rightImg={'/dropdown.png'}
            className="border border-[#EBEBEB] text-[#757575]"
          />
          <HomePgaebutton
            leftImg={'/exp.png'}
            text={'Experience'}
            rightImg={'/dropdown.png'}
            className="border border-[#EBEBEB] text-[#757575]"
          />
          <HomePgaebutton
            leftImg={'/language.png'}
            text={'Languages'}
            rightImg={'/dropdown.png'}
            className="border border-[#EBEBEB] text-[#757575]"
          />
          <HomePgaebutton
            leftImg={'/rating.png'}
            text={'Rating level'}
            rightImg={'/dropdown.png'}
            className="border border-[#EBEBEB] text-[#757575]"
          />
          <HomePgaebutton
            leftImg={'/workstyle.png'}
            text={'Work style'}
            rightImg={'/dropdown.png'}
            className="border border-[#EBEBEB] text-[#757575]"
          />
          <button className="flex items-center gap-2 bg-[#29ABE2] text-white px-4 py-2 rounded-md shadow hover:bg-[#1e90c2] transition">
            <img src="savesearch.png" alt="save" className="w-4 h-4" />
            <span className="text-sm font-medium">SAVE SEARCH</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] min-h-screen">
        <div className="px-5 py-3">
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
        </div>
        <div className="hidden lg:block relative">
          <img
            src="/jobcard/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Layout>
  )
}
