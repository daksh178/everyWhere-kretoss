import React, { useState, useRef } from 'react'
import Layout from '@/components/Layout/Layout'
import Mainlayout from '@/components/MainLayout/Mainlayout';
import { MapPin, Clock, Calendar, Star, Globe, Users, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function jobOfferSeenByUser() {
    const [skillLevel, setSkillLevel] = useState(30);
    const [attachCV, setAttachCV] = useState(false);
    const [needVisa, setNeedVisa] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);
    const jobData = [
        { id: 1, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 2, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 3, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 4, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 5, title: "Job Title Will Go Here", company: "Company name here" },
    ];

    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -280, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 280, behavior: 'smooth' });
        }
    };

    const handleSkillLevelChange = (event) => {
        setSkillLevel(parseInt(event.target.value));
    };


    const handleApply = () => {
        console.log('Application submitted with skill level:', skillLevel);
    };

    const InlineButton = ({
        children,
        onClick,
        variant = 'primary',
        size = 'medium',
        disabled = false,
        type = 'button',
        fullWidth = false,
        leftIcon,
        className = '',
        ...props
    }) => {
        const baseClasses =
            'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-1';

        const variants = {
            primary:
                'bg-global-2 text-global-7 hover:bg-blue-700 disabled:bg-gray-400 focus:ring-blue-500',
            secondary:
                'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 focus:ring-gray-500',
            outline:
                'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 focus:ring-gray-500',
        };

        const sizes = {
            small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
            medium: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base',
            large: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
        };

        const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : 'w-auto'
            } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`;

        return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={buttonClasses}
                style={{
                    backgroundColor: variant === 'primary' ? '#29abe2' : undefined,
                    color: variant === 'primary' ? '#ffffff' : undefined,
                }}
                {...props}
            >
                {leftIcon && <img src={leftIcon} alt="" className="w-4 h-4" />}
                {children}
            </button>
        );
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                {/* Main Content Container */}
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-62">

                        {/* Left Column - Job Details */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Job Header Card */}
                            <div className="bg-white rounded-[25px] shadow-sm p-6 top-[185px] left-[50px] w-[982px] h-[459px]">
                                <div className="relative flex items-start justify-between mb-4">
                                    {/* Left Section - Job Details */}
                                    <div>
                                        <span className="absolute -top-[35px] left-1/2 transform -translate-x-1/2 
                 w-[132px] h-[48px] 
                 rounded-full 
                 bg-black text-white 
                 flex items-center justify-center 
                 font-poppins font-medium text-base leading-[24px]">
                                            Waiter
                                        </span>

                                        <div className="flex flex-col items-center text-center gap-3">
                                            {/* Logo */}
                                            <img
                                                src="/Frame 1618873050.png"
                                                alt="Job Logo"
                                                className="w-[112px] h-[112px] rounded-[10px] object-cover"
                                            />

                                            {/* Job Title */}
                                            <h1 className="w-[206px] font-poppins font-semibold text-2xl leading-[20px] text-gray-900 text-center">
                                                Everywhere Jobs
                                            </h1>

                                            <p className="w-[130px] font-poppins font-normal text-sm leading-5 text-gray-600 text-center">
                                                Business & Tech
                                            </p>


                                            {/* Rating */}
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src="/Frame 1618873051.png"
                                                    alt="Rating Stars"
                                                    className="w-[112px] h-[22px] object-contain"
                                                />
                                            </div>
                                            {/* Salary */}
                                            <p className="mt-6 font-poppins font-medium text-[16px] leading-[20px] text-[#757575]">
                                                30K € / Year
                                            </p>

                                            {/* Divider */}
                                            <div className="w-[411px] border-t border-[1px] border-gray-300 my-3"></div>


                                            {/* Job Details */}
                                            <div className="grid grid-cols-3 gap-6 text-sm w-full">
                                                <div className="flex flex-col gap-2">
                                                    <p className="font-poppins font-medium text-sm leading-6 text-gray-500">
                                                        Remote Rate
                                                    </p>
                                                    <span className="w-[42px] h-[28px] rounded-full bg-gray-100 flex items-center justify-center mx-auto font-poppins font-medium text-sm leading-5">
                                                        0%
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="font-poppins font-medium text-sm leading-6 text-gray-500">
                                                        Starting Date
                                                    </p>
                                                    <span className="w-[80px] h-[28px] px-3 py-1 rounded-full bg-[rgba(75,221,182,0.1)]  text-[#4BDDB6] flex items-center justify-center mx-auto font-poppins font-medium text-sm leading-5">02/09/25</span>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className="text-gray-500">Duration</p>
                                                    <span className="w-[64px] h-[28px] rounded-full bg-gray-100 flex items-center justify-center mx-auto font-poppins font-medium text-sm leading-5">1 year</span>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    {/* Right Section - Location & Map */}
                                    <div className="flex flex-col items-end">
                                        {/* Location Pin */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-sm font-poppins text-[rgba(0,0,0,1)]">Paris, France</span>
                                            <img src="/location.png" alt="Location" className="w-4 h-4" />
                                        </div>


                                        {/* Map Image */}
                                        <div className="w-[483px] h-[369px] rounded-xl overflow-hidden shadow">
                                            {/* <img
                                                src="/Group 1000009838.png"  // replace with your uploaded map image path
                                                alt="Map"
                                                className="w-full h-full object-cover"
                                            /> */}
                                            <CustomMap />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Skills and Languages Section */}
                            <div className="bg-white mx-auto w-[982px] h-[199px] shadow-[0_4px_6px_rgba(117,117,117,0.1)] rounded-[25px] p-[32px_24px]">
                                <div className="grid grid-cols-3 h-full">
                                    {/* Contract & Experience */}
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h3 className="font-semibold text-[16px] leading-[19.78px] text-[#333333] mb-6">
                                            Contract & Experience
                                        </h3>

                                        <div className="mb-6">
                                            <img
                                                src="/Vector (2).png"
                                                alt="Contract Icon"
                                                className="w-[25px] h-[35px] ml-[10px] mt-[5px]"
                                            />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <span className="px-3 py-1 rounded-full bg-[rgba(75,221,182,0.1)] text-[#4BDDB6] text-[12px] font-semibold">
                                                Work study
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold">
                                                1 Year
                                            </span>
                                        </div>
                                    </div>

                                    {/* Languages */}
                                    <div className="flex flex-col items-center text-center justify-center border-x border-[#F5F5F5]">
                                        <h3 className="font-semibold text-[16px] leading-[19.78px] text-[#333333] mb-6">
                                            Languages
                                        </h3>

                                        <div className="flex justify-center items-center space-x-6 mb-6">
                                            <img

                                                src="/image (1).png"
                                                alt="French flag"
                                                className="w-[44px] h-[32px] rounded-sm object-cover"
                                            />
                                            <img
                                                src="/image 16.png"
                                                alt="UK flag"
                                                className="w-[44px] h-[32px] rounded-sm object-cover"
                                            />
                                            <img
                                                src="/image 17.png"
                                                alt="Italian flag"
                                                className="w-[44px] h-[32px] rounded-sm object-cover"
                                            />
                                        </div>

                                        <div className="flex justify-center items-center space-x-4">
                                            <span className="px-3 py-1 rounded-full bg-[rgba(75,221,182,0.1)] text-[#4BDDB6] text-[12px] font-semibold">
                                                Fluent
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold">
                                                Others
                                            </span>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h3 className="font-semibold text-[16px] leading-[19.78px] text-[#333333] mb-6">
                                            Skills
                                        </h3>

                                        <div className="flex flex-col space-y-3">
                                            <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold whitespace-nowrap">
                                                Customer Service
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold whitespace-nowrap">
                                                Customer Relationship
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold whitespace-nowrap">
                                                Drink Preparation
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white mx-auto w-[982px] flex flex-col justify-start items-center bg-global-12 rounded-[24px] shadow-[0px_4px_6px_#75757519] px-[20px] py-[20px]">
                                <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                    Description
                                </span>
                                <span className="font-poppins font-normal text-sm text-gray-700 leading-5 text-center mt-1.5 block">
                                    Our company is looking for a new talent!
                                    <br />
                                    You will accomplish the following tasks within a team of 10 persons:
                                </span>


                                <div className="flex flex-col justify-start items-center w-full mt-[24px] mb-[10px]">
                                    <div className="top-[994px] left-[83px] w-[918px] h-[1px] border-t border-gray-300 opacity-100"></div>

                                    {/* Responsibilities */}
                                    <div className="flex flex-col gap-[8px] justify-start items-start w-full mt-[20px] mx-[142px]">
                                        {/* Centered Heading */}
                                        <span className="w-full text-center text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                            Responsibilities
                                        </span>

                                        <div className="flex flex-col gap-4 w-full items-center">
                                            <div className="flex flex-col gap-4 items-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                        <img src="/Vector (3).png" alt="Check" className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                        Welcome customers in our restaurant and invite them to take seat
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                        <img src="/Vector (3).png" alt="Check" className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                        Take notes of their orders or register them on our tablets
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                        <img src="/Vector (3).png" alt="Check" className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                        Bring ordered meals at their table and check whether they are satisfied
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <br />

                                    </div>

                                    <div className="top-[994px] left-[83px] w-[918px] h-[1px] border-t border-gray-300 opacity-100"></div>
                                    {/* Why Join Us */}
                                    <div className="flex flex-col gap-[8px] justify-start items-center w-full mt-[18px] mx-[190px]">
                                        <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                            Why Join Us
                                        </span>
                                        {/* <div className="flex justify-between items-center w-full mr-[10px]">
                                            <div className="flex flex-col gap-[12px] justify-start items-center">
                                                <img
                                                    src="/images/img_tabler_hand_click.svg"
                                                    alt="Hand Click"
                                                    className="w-[26px] h-[26px]"
                                                />
                                                <img
                                                    src="/images/img_tabler_hand_click.svg"
                                                    alt="Hand Click"
                                                    className="w-[26px] h-[26px]"
                                                />
                                                <img
                                                    src="/images/img_tabler_hand_click.svg"
                                                    alt="Hand Click"
                                                    className="w-[26px] h-[26px]"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-[16px] justify-start items-start w-full">
                                                <span className="text-[14px] font-poppins font-normal leading-[21px] text-global-5">
                                                    Easy e-learning training and personalized integration program
                                                </span>
                                                <span className="text-[14px] font-poppins font-normal leading-[21px] text-global-5">
                                                    We adapt to your schedule so you can balance work and personal life
                                                </span>
                                                <span className="text-[14px] font-poppins font-normal leading-[21px] text-global-5">
                                                    At each service, a meal is offered to you to enjoy, to eat in or take away
                                                </span>
                                            </div>
                                        </div> */}


                                        <div className="flex flex-col gap-4 w-full items-center">
                                            <div className="flex flex-col gap-4 items-start">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                        <img src="/tabler_hand-click.png" alt="Check" className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                        Easy e-learning training and personalized integration program
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                        <img src="/tabler_hand-click.png" alt="Check" className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                        We adapt to your schedule so you can balance work and personal life
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                        <img src="/tabler_hand-click.png" alt="Check" className="w-5 h-5" />
                                                    </div>
                                                    <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                        At each service, a meal is offered to you to enjoy, to eat in or take away
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="top-[994px] left-[83px] w-[918px] h-[1px] border-t border-gray-300 opacity-100"></div>


                                    {/* Qualifications */}
                                    <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1 mt-[18px]">
                                        Qualifications
                                    </span>
                                    <div className="flex flex-col gap-[6px] justify-start items-center w-[38%] mt-[10px]">
                                        <span className="font-poppins text-sm text-gray-700 text-[14px] font-normal leading-[21px] text-global-5">
                                            Baccalaureate or equivalent experience
                                        </span>
                                        <div className="flex flex-col gap-[6px] justify-start items-center w-full">
                                            <span className="font-poppins font-normal text-sm text-gray-700 text-[14px] leading-[21px] text-global-5">
                                                Proven experience as a waiter for 2 or more years
                                            </span>
                                            <span className="font-poppins font-normal text-sm text-gray-700 text-[14px] leading-[21px] text-global-5">
                                                Strong communication and interpersonal skills
                                            </span>
                                            <span className="font-poppins font-normal text-sm text-gray-700 text-[14px] leading-[21px] text-global-5">
                                                Fluency in French, English and Italian
                                            </span>
                                        </div>
                                    </div>
                                    <br />
                                    {/* Application Section */}
                                    <div className="rounded-[24px] flex justify-start items-center w-[918px] bg-[linear-gradient(107.8deg,#F2FEFE_0%,#32D3D5_50%,#29FFC6_100%)]">
                                        <div
                                            className="flex justify-center items-center w-full bg-cover bg-center bg-no-repeat px-9 py-8"
                                            style={{ backgroundImage: "" }}
                                        >
                                            <div className="flex flex-col gap-6 justify-start items-center  mb-2">
                                                <span className="font-poppins font-semibold text-base leading-6 text-center text-[#000000]">
                                                    <span>Define </span>
                                                    <span className="text-[#29abe2]">honestly</span>
                                                    <span> how many relevant skills you have for this job & apply !</span>
                                                </span>

                                                {/* Skill Level Slider */}
                                                <div className="relative w-[464px] h-[15px] flex justify-center items-center rounded-[24px]" style={{ backgroundColor: '#ffffff' }}>
                                                    <div className="relative w-[520px] h-[24px] opacity-100  flex items-center">
                                                        {/* Left Label - "FEW" */}
                                                        <span className="absolute left-0 text-sm text-blue-500 transform -translate-x-2/2">FEW</span>
                                                        <div className="relative w-full h-7 mx-2">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="w-[464px] h-full appearance-none bg-transparent cursor-pointer"
                                                                style={{
                                                                    background: `linear-gradient(to right, #29abe2 0%, #29abe2 ${skillLevel}%, #e5e5e5 ${skillLevel}%, #e5e5e5 100%)`,
                                                                    borderRadius: '10px', // Rounded edges for smooth look
                                                                    height: '5px', // Adjusting the slider height
                                                                    outline: 'none', // Remove focus outline
                                                                    transition: 'background 0.2s ease' // Smooth transition effect
                                                                }}
                                                            />
                                                        </div>
                                                        {/* Right Label - "ALL" */}
                                                        <span className="absolute right-0 text-sm text-blue-500 transform translate-x-2/2">ALL</span>
                                                    </div>
                                                </div>

                                                {/* Checkboxes */}
                                                <div className="flex justify-between items-center w-full ">
                                                    <div className="flex justify-start items-start w-full">
                                                        <div
                                                            className="ml-10 w-4 h-4 border border-gray-500 rounded cursor-pointer"
                                                            onClick={() => setAttachCV(!attachCV)}
                                                        >
                                                            {attachCV && (
                                                                <div className="w-full h-full rounded" style={{ backgroundColor: '#29abe2' }}></div>
                                                            )}
                                                        </div>
                                                        <span className="text-sm font-normal leading-5 self-center ml-2" style={{ color: '#757575' }}>
                                                            Attach my CV
                                                        </span>

                                                    </div>

                                                    <div className="flex justify-end items-start w-full">
                                                        <div
                                                            className="w-4 h-4 border border-gray-500 rounded cursor-pointer"
                                                            onClick={() => setNeedVisa(!needVisa)}
                                                        >
                                                            {needVisa && (
                                                                <div className="w-full h-full rounded" style={{ backgroundColor: '#29abe2' }}></div>
                                                            )}
                                                        </div>
                                                        <span className="text-sm font-normal leading-5 self-center ml-2" style={{ color: '#757575' }}>
                                                            I need a visa to work in this country
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Apply Button */}
                                                <InlineButton
                                                    variant="primary"
                                                    size="large"
                                                    leftIcon="/Frame.png"
                                                    onClick={handleApply}
                                                    className="rounded-lg px-5 py-3 pl-10"
                                                >
                                                    Apply
                                                </InlineButton>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Notice */}
                                    <div className="w-[918px] h-[114px] flex justify-start items-center border border-gray-500 rounded-lg px-4 mt-3" style={{ backgroundColor: '#f7f7f7f7' }}>
                                        <img
                                            src="/Frame 1618872956.png"
                                            alt="Notice Icon"
                                            className="w-1/10 self-end mt-4"
                                        />
                                        <span className="font-poppins font-normal text-sm leading-6 tracking-normal text-center w-full ml-11 text-[#757575]">
                                            <span>If you do not get an answer within </span>
                                            <span className="bg-white border border-gray-300 rounded px-1.5 py-0.5 font-semibold">
                                                2 weeks
                                            </span>
                                            <span>
                                                , consider the job offer closed at the moment. We look forward to hearing from you!
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* About Us Section */}
                            <div className="bg-white mx-auto w-[982px] flex flex-col justify-start items-center bg-global-12 rounded-[24px] shadow-[0px_4px_6px_#75757519] px-[20px] py-[20px]">
                                <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                    About Us
                                </span>
                                <span className="font-poppins tracking-normal  ml-11 text-[#757575] text-[14px] leading-[24px]">
                                    We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France!
                                </span>

                                <span className="font-poppins font-normal text-[14px] text-[#757575] leading-[21px] text-global-5 mb-2">
                                    <span className="font-semibold">We are introvert friendly: </span>
                                    <span className="font-semibold italic">You do you, we will not bother you.</span>
                                </span>
                            </div>

                            {/* Workplace Overview */}
                            <div className="bg-white mx-auto w-[982px] h-[421px] flex flex-col justify-start items-center bg-global-12 rounded-[24px] shadow-[0px_4px_6px_#75757519] px-[20px] py-[20px]">
                                <h3 className="items-center font-semibold text-gray-900 mb-4">Workplace Overview</h3>
                                <div className="bg-gray-100 rounded-lg overflow-hidden  w-[918px] h-[314px] left-[82px] opacity-100">
                                    <img src="/image (2).png" className="w-full h-full object-cover" alt="Illustration" />
                                </div>

                            </div>

                            {/* Similar Jobs */}
                            <div className="bg-white mx-auto w-[982px] h-[329px] flex flex-col justify-start items-center bg-global-12 rounded-[24px] shadow-[0px_4px_6px_#75757519] px-[20px] py-[20px]">
                                <h3 className="font-semibold text-gray-900 mb-4">Similar Jobs</h3>

                                {/* Scrollable Section */}
                                <div className="bg-background mx-auto w-full max-w-[982px] min-h-[329px] flex flex-col justify-start items-center rounded-[24px] shadow-[0px_4px_6px_hsl(var(--job-shadow))] px-5 py-5 relative">
                                    {/* Scrollable Section */}
                                    <div className="relative w-full overflow-hidden">
                                        <div
                                            ref={scrollRef}
                                            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
                                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                        >
                                            {jobData.map((job) => (
                                                <div
                                                    key={job.id}
                                                    className="min-w-[265px] h-[228px] border border-border rounded-[20px] bg-gradient-to-br from-job-card-gradient-from to-job-card-gradient-to p-4 flex flex-col justify-between"
                                                >
                                                    <div className="flex items-center mb-3">
                                                        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mr-3 shadow-sm">
                                                            <img
                                                                src="/Group 1000009809.png"
                                                                alt="Company Logo"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="text-job-text-primary font-medium text-sm leading-tight">
                                                                {job.title}
                                                            </p>
                                                            <p className="text-job-text-secondary text-xs mt-1">
                                                                {job.company}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                                                        <img src="/frame.png" alt="Icon" className="w-4 h-4" />
                                                        Apply
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Navigation Arrows */}
                                    <button
                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 w-[30px] h-[25px] bg-job-nav hover:bg-job-nav-hover rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 shadow-sm"
                                        onClick={handleScrollLeft}
                                        aria-label="Scroll left"
                                    >
                                        <ChevronLeft className="w-4 h-4 text-job-text-primary" />
                                    </button>

                                    <button
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 w-[30px] h-[30px] bg-job-nav hover:bg-job-nav-hover rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 shadow-sm"
                                        onClick={handleScrollRight}
                                        aria-label="Scroll right"
                                    >
                                        <ChevronRight className="w-4 h-4 text-job-text-primary" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="w-[335px] h-[691px] bg-white rounded-[25px] shadow-sm p-6 overflow-hidden">
                                {/* Menu */}
                                <div className="mb-6">
                                    <h3 className="font-poppins font-semibold text-[16px] leading-[20px] text-gray-900 mb-3">
                                        Menu
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <a
                                            href="#"
                                            className="flex items-center w-[137px] h-[20px] gap-2 text-gray-600 hover:text-blue-600"
                                        >
                                            <img
                                                src="/nav/circle.png"
                                                alt="Change mode"
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm leading-none">Change mode</span>
                                        </a>

                                        <a
                                            href="#"
                                            className="flex items-center w-[113px] h-[20px] gap-2 text-gray-600 hover:text-blue-600"
                                        >
                                            <img
                                                src="/nav/menu.png"
                                                alt="Dashboard"
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm leading-none">Dashboard</span>
                                        </a>

                                        <a
                                            href="#"
                                            className="flex items-center w-[109px] h-[24px] gap-2 text-gray-600 hover:text-blue-600"
                                        >
                                            <img
                                                src="/nav/mail.png"
                                                alt="Messages"
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm leading-none">Messages</span>
                                        </a>

                                        <a
                                            href="#"
                                            className="flex items-center w-[65px] h-[24px] gap-2 text-gray-600 hover:text-blue-600"
                                        >
                                            <img
                                                src="/iconamoon_question-mark-square.png"
                                                alt="FAQ"
                                                className="w-5 h-6"
                                            />
                                            <span className="text-sm leading-none">FAQ</span>
                                        </a>

                                    </div>
                                    <div className="w-[281px] border-t border border-[#F5F5F5] my-3"></div>

                                </div>

                                {/* Similar Companies */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-gray-900 mb-3">Similar Companies</h3>
                                    <div className="space-y-3">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center w-[177px] h-[50px]"  // match figma size
                                            >
                                                {/* Company Icon */}
                                                <div className="w-[50px] h-[50px] flex items-center justify-center">
                                                    <img
                                                        src="/Group 1000009809.png"
                                                        alt="Company Icon"
                                                        className="w-[44px] h-[44px] rounded-full"
                                                    />
                                                </div>


                                                {/* Company Text */}
                                                <div>
                                                    <p className="font-poppins font-semibold text-[14px] leading-[16px]">
                                                        Everywhere Jobs
                                                    </p>
                                                    <p className="font-poppins font-normal text-[12px] leading-[20px] text-gray-600">
                                                        Business & Tech
                                                    </p>

                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                                <div className="w-[281px] border-t border border-[#F5F5F5] my-3"></div>
                                <div className="text-[#CECECE] font-poppins font-semibold text-[16px] leading-[20px] px-3 py-1 rounded">
                                    Ad
                                </div>


                                {/* Office Image */}
                                <div className="relative rounded-lg h-33 w-full overflow-hidden">
                                    {/* Background Image */}
                                    <div className="relative w-[281px] h-[134px] rounded-lg overflow-hidden">
                                        <img
                                            src="Frame 1618873061.png"
                                            alt="filter"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>


                                    {/* Overlay Texts */}
                                    <div className="absolute inset-0 flex justify-between items-start px-4 py-2">
                                        {/* Left Text */}
                                        <span className="font-poppins font-semibold text-[12px] leading-[15.7px] text-white px-3 py-1 rounded-md">
                                            Flat in Paris
                                        </span>


                                        {/* Right Text */}
                                        <span className="font-poppins font-medium text-[12px] leading-[15.99px] text-white border border-white px-3 py-1 rounded-md text-center">
                                            ABC Agency
                                        </span>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Layout >
    )
}
