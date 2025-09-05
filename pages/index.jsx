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
  const mapRef = useRef(null);
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
    { leftImg: "/contact.png", text: "Contract" },
    { leftImg: "/salary.png", text: "Salary" },
    { leftImg: "/exp.png", text: "Experience" },
    { leftImg: "/language.png", text: "Languages" },
    { leftImg: "/rating.png", text: "Rating level" },
    { leftImg: "/workstyle.png", text: "Work style" },
  ]

  const toggleFullscreen = () => {
    const mapEl = document.querySelector(".custom-map-container"); // className of map container
    if (!mapEl) return;

    if (!document.fullscreenElement) {
      mapEl.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };


  return (
    <div className="flex flex-col h-screen">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Sticky Filter Bar */}
      <div className="shadow-[0px_4px_6px_0px_rgba(0,0,0,0.11)] sticky top-[64px] z-40 bg-white px-5 py-2 flex items-center gap-6 justify-between">
        {/* Mobile view (Filter + Save Search side by side) */}
        <div className="flex sm:hidden gap-2 w-[338px] h-[38px] ">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="w-1/2 flex items-center justify-center gap-2 border border-[#29ABE2] text-[#29ABE2] px-4 py-2 rounded-[10px]"
          >
            <img src="filter.png" alt="filter" className="w-4 h-4" />
            <span className="font-medium">Filters</span>
          </button>
          <button className="font-semibold w-1/2 flex items-center justify-center gap-2 bg-[#29ABE2] text-white px-4 py-2 rounded-[10px] shadow hover:bg-[#1e90c2] transition">
            <img src="savesearch.png" alt="save" className="w-4 h-4" />
            <span className="text-sm font-medium">SAVE SEARCH</span>
          </button>
        </div>

        {/* Desktop view */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <img src="filter.png" alt="filter" className="w-[24px] h-[24px]" />
          <span className="text-[#29ABE2]  text-sm leading-none tracking-normal text-center">
            All Filters
          </span>
          <div className="w-px h-6 bg-[rgba(235,235,235,1)]"></div>

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
          {/* {filterButtons.map((btn, idx) => (
            <HomePgaebutton
              key={idx}
              leftImg={btn.leftImg}
              text={btn.text}
              rightImg={"/dropdown.png"}
              className={`w-[136px] h-[38px] font-medium whitespace-nowrap border 
      ${idx < 2 ? "border-[rgba(97,193,234,1)] text-[rgba(41,171,226,1)]" : "border-[#EBEBEB] text-[#757575]"}`}
            />
          ))} */}
          {filterButtons.map((btn, idx) => (
            <HomePgaebutton
              key={idx}
              leftImg={btn.leftImg}
              text={btn.text}
              rightImg={idx < 2 ? "/dropdown.png" : "/arrow forward (Stroke).png"}
              className={`w-[136px] h-[38px] font-medium whitespace-nowrap border 
      ${idx < 2
                  ? "border-[rgba(97,193,234,1)] text-[rgba(41,171,226,1)]"
                  : "border-[#EBEBEB] text-[#757575]"}`}
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
              <div className="flex rounded-md bg-[#f9f9f9] p-2 overflow-hidden">
                {/* Jobs button */}
                <button
                  onClick={() => router.push("/")}
                  className={`px-4 py-2 text-sm font-medium rounded-md 
                                        ${currentPath === "/"
                      ? "bg-[#29ABE2] text-white" : "text-black"
                    }`}
                >
                  Jobs
                </button>

                {/* Accommodations button */}
                <button
                  onClick={() => router.push("/accomodationsPage")}
                  className={`px-4 py-2 text-sm font-medium rounded-md 
                                        ${currentPath === "/accomodationsPage"
                      ? "bg-[#FFAB24]"
                      : "text-black"
                    }`}
                >
                  Accommodations
                </button>
              </div>
            </div>

            {/* Right section */}
            <div className="font-medium flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
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
        <div className="relative hidden lg:block w-2/5">
          <div className="h-[calc(100vh-210px)] custom-map-container">
            <CustomMap />
          </div>
          <div
            onClick={toggleFullscreen}
            className="absolute top-[17px] right-[17px] z-[1000] rounded-[12px] p-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
          >
            <img src="./Stepper.png" alt="Fullscreen" className="w-[42px] h-[42px]" />
          </div>

          <div
            id="show-accommodations-btn"
            class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-[15px] py-[10px] rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.15)] text-[#00a0df] text-[12px] flex items-center gap-[10px] z-[999]"
          >
            <input
              type="checkbox"
              id="accommodation-toggle"
              class="peer appearance-none w-4 h-4 border border-[#00a0df] rounded-sm cursor-pointer 
           checked:bg-[#00a0df] checked:border-[#00a0df]
           checked:after:content-['✔'] checked:after:text-white checked:after:text-[10px] 
           checked:after:flex checked:after:items-center checked:after:justify-center"
            />
            <label for="accommodation-toggle" class="cursor-pointer select-none">
              Show nearby accommodations
            </label>
          </div>

          {/* <div
            id="show-accommodations-btn"
            class="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white px-[15px] py-[10px] rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.15)] text-[#00a0df] text-[12px] flex items-center gap-[10px] z-[999]"
          >
            <input
              type="checkbox"
              id="accommodation-toggle"
              class="peer appearance-none w-4 h-4 border border-[#00a0df] rounded-sm cursor-pointer 
           checked:bg-[#00a0df] checked:border-[#00a0df]
           checked:after:content-['✔'] checked:after:text-white checked:after:text-[10px] 
           checked:after:flex checked:after:items-center checked:after:justify-center"
            />
            <label for="accommodation-toggle" class="cursor-pointer select-none">
              Show nearby accommodations
            </label>
          </div> */}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 z-50">
        <Footer />
      </div>
    </div>
  )
}
