import React, { useRef, useState, useEffect } from "react"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import HomePgaebutton from "@/components/UI/HomePgaebutton"
import JobCard from "@/components/UI/JobCard"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useRouter } from "next/router"
import JobCardtwo from "@/components/UI/JobCardtwo"
import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
  ssr: false,
});

export default function Index() {
  const router = useRouter();
  const currentPath = router.pathname;
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const el = scrollRef.current
    const scrollAmount = 200 // px per click
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
  }

  const filterButtons = [
    { leftImg: "/location.png", text: "Location" },
    { leftImg: "/contact.png", text: "Contact" },
    { leftImg: "/salary.png", text: "Salary" },
    { leftImg: "/exp.png", text: "Experience" },
    { leftImg: "/language.png", text: "Languages" },
    { leftImg: "/rating.png", text: "Rating level" },
    { leftImg: "/workstyle.png", text: "Work style" },
  ]

  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[64px] z-40 bg-white shadow-md px-5 py-2 flex items-center gap-4 justify-between">
        {/* Mobile view (Filter + Save Search side by side) */}
        <div className="flex sm:hidden w-full gap-2">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="w-1/2 flex items-center justify-center gap-2 border border-[#29ABE2] text-[#29ABE2] px-4 py-2 rounded-md"
          >
            <img src="filter.png" alt="filter" className="w-4 h-4" />
            <span className="font-medium">Filters</span>
          </button>
          <button className="w-1/2 flex items-center justify-center gap-2 bg-[#29ABE2] text-white px-4 py-2 rounded-[10px] shadow hover:bg-[#1e90c2] transition">
            <img src="savesearch.png" alt="save" className="w-4 h-4" />
            <span className="text-sm font-medium">SAVE SEARCH</span>
          </button>
        </div>

        {/* Desktop view */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <img src="filter.png" alt="filter" />
          <span className="text-[#29ABE2]">All Filters</span>
        </div>

        {/* Left Arrow (desktop only) */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex flex-shrink-0 bg-white border rounded-full shadow p-1 hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Center Filter Buttons (desktop only) */}
        <div
          ref={scrollRef}
          className="hidden sm:flex flex-1 gap-2 overflow-x-auto flex-nowrap scrollbar-hide scroll-smooth"
        >
          {filterButtons.map((btn, idx) => (
            <HomePgaebutton
              key={idx}
              leftImg={btn.leftImg}
              text={btn.text}
              rightImg={"/dropdown.png"}
              className="whitespace-nowrap border border-[#EBEBEB] text-[#757575]"
            />
          ))}
        </div>

        {/* Right Arrow (desktop only) */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex flex-shrink-0 bg-white border rounded-full shadow p-1 hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Save Search (desktop only) */}
        <div className="hidden sm:flex flex-shrink-0">
          <button className="flex items-center gap-2 bg-[#29ABE2] text-white px-4 py-2 rounded-[10px] shadow hover:bg-[#1e90c2] transition whitespace-nowrap">
            <img src="savesearch.png" alt="save" className="w-4 h-4" />
            <span className="text-sm font-medium">SAVE SEARCH</span>
          </button>
        </div>
      </div>


      {/* Mobile Filters Panel */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-3/4 sm:w-1/3 bg-white h-full p-4 shadow-lg overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-lg font-medium">Filters</h2>
              <button onClick={() => setShowMobileFilters(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {filterButtons.map((btn, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-3 border border-gray-200 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  <img src={btn.leftImg} alt={btn.text} className="w-5 h-5" />
                  <span>{btn.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Column (scrollable jobs) */}
        <div className="w-full lg:w-3/5 overflow-y-auto px-5 py-3 scrollable">
          <span className="text-[#757575] text-sm">15 results found</span>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3">
            {/* Left section */}
            <div className="flex items-center gap-4">
              <div className="flex rounded-md bg-gray-100 p-2 overflow-hidden">
                {/* Jobs button */}
                <button
                  onClick={() => router.push("/")}
                  className={`px-4 py-2 text-sm font-medium rounded-md 
                                        ${currentPath === "/"
                      ? "bg-[#29ABE2] text-white"
                      : "text-black hover:bg-gray-100"
                    }`}
                >
                  Jobs
                </button>

                {/* Accommodations button */}
                <button
                  onClick={() => router.push("/accomodationsPage")}
                  className={`px-4 py-2 text-sm font-medium rounded-md 
                                        ${currentPath === "/accomodationsPage"
                      ? "bg-[#FFAB24] text-white"
                      : "text-black hover:bg-gray-100"
                    }`}
                >
                  Accommodations
                </button>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
              <img src="/sort.png" alt="sort" />
              <span>Sort by:</span>
              <span className="font-medium">Most recent</span>
              <img src="/arrow.png" alt="sort" />
            </div>
          </div>

          <JobCard />
          <JobCardtwo />
        </div>

        {/* Right Column (fixed map) */}
        <div className="hidden lg:block w-2/5">
          <div className="h-[calc(100vh-210px)]">
            <CustomMap />
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 z-50">
        <Footer />
      </div>
    </div>
  )
}
