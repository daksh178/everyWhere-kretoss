import React, { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import { MapPin, Clock, Calendar, Star, Globe, Users, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';


export default function jobOfferSeenByUser() {
    const [skillLevel, setSkillLevel] = useState(30);
    const [attachCV, setAttachCV] = useState(false);
    const [needVisa, setNeedVisa] = useState(false);


    return (
        <Layout>
            <div className="min-h-screen bg-gray-50">
                {/* Main Content Container */}
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-62">

                        {/* Left Column - Job Details */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Job Header Card */}
                            <div className="bg-white rounded-xl shadow-sm p-6 top-[185px] left-[50px] w-[982px] h-[459px]">
                                <div className="flex items-start justify-between mb-4">
                                    {/* Left Section - Job Details */}
                                    <div>
                                        <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
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
                                            <p className="text-[#757575] font-medium text-base">
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
                                                    <span className="flex justify-center items-center p-2 rounded-full bg-[#F5F5F5] font-poppins font-medium text-sm leading-5">
                                                        0%
                                                    </span>

                                                </div>
                                                <div className="text-center">
                                                    <p className="font-poppins font-medium text-sm leading-6 text-gray-500">
                                                        Starting Date
                                                    </p>

                                                    <p className="font-medium text-blue-600">02/09/25</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-gray-500">Duration</p>
                                                    <p className="font-medium">1 year</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    {/* Right Section - Location & Map */}
                                    <div className="flex flex-col items-end">
                                        {/* Location Pin */}
                                        <div className="flex items-center text-gray-600 mb-3">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            <span className="text-sm">Paris, France</span>
                                        </div>

                                        {/* Map Image */}
                                        <div className="w-[483px] h-[369px] rounded-xl overflow-hidden shadow">
                                            <img
                                                src="/Group 1000009838.png"  // replace with your uploaded map image path
                                                alt="Map"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Skills and Languages Section */}
                            <div className="bg-white rounded-xl shadow-sm w-[982px] p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                    {/* Contract & Experience */}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">Contract & Experience</h3>
                                        <div className="flex items-center mb-2">
                                            <Users className="w-5 h-5 text-gray-400 mr-2" />
                                            <span className="text-sm text-gray-600">Work study</span>
                                        </div>
                                        <p className="text-sm text-blue-600 font-medium">1 Year</p>
                                    </div>

                                    {/* Languages */}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                                        <div className="flex space-x-2 mb-2">
                                            <div className="w-6 h-4 bg-blue-500 rounded-sm"></div>
                                            <div className="w-6 h-4 bg-white border border-red-500 rounded-sm"></div>
                                            <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                                            <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
                                            <div className="w-6 h-4 bg-white border border-red-500 rounded-sm"></div>
                                        </div>
                                        <div className="flex space-x-2 text-xs text-gray-600">
                                            <span>Fluent</span>
                                            <span>Others</span>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-3">Skills</h3>
                                        <div className="space-y-1 text-sm">
                                            <p className="text-gray-700">Customer service</p>
                                            <p className="text-gray-700">Customer Relationship</p>
                                            <p className="text-gray-700">Drink Preparation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-xl shadow-sm  p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Description</h3>
                                <p className="text-gray-700 mb-4">Our company is looking for a new talent !</p>
                                <p className="text-gray-700">You will accomplish the following tasks within a team of 10 persons :</p>
                            </div>

                            {/* Responsibilities */}
                            <div className="bg-white rounded-xl shadow-sm  p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Responsibilities</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0 mt-0.5 mr-3">
                                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1.5"></div>
                                        </div>
                                        <p className="text-gray-700">Welcome customers at our restaurant and invite them to take seat</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0 mt-0.5 mr-3">
                                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1.5"></div>
                                        </div>
                                        <p className="text-gray-700">Take notes of their orders and register them on our tickets</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-5 h-5 bg-blue-500 rounded-full flex-shrink-0 mt-0.5 mr-3">
                                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1.5"></div>
                                        </div>
                                        <p className="text-gray-700">Bring ordered meals or their table and check whether they are satisfied</p>
                                    </div>
                                </div>
                            </div>

                            {/* Why Join Us */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Why Join Us</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <div className="w-5 h-5 bg-cyan-400 rounded-full flex-shrink-0 mt-0.5 mr-3">
                                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1.5"></div>
                                        </div>
                                        <p className="text-gray-700">Easy e-learning training and personalized integration program</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-5 h-5 bg-cyan-400 rounded-full flex-shrink-0 mt-0.5 mr-3">
                                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1.5"></div>
                                        </div>
                                        <p className="text-gray-700">We adapt to your schedule so you can balance work and personal life</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-5 h-5 bg-cyan-400 rounded-full flex-shrink-0 mt-0.5 mr-3">
                                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1.5"></div>
                                        </div>
                                        <p className="text-gray-700">At each service, a meal is offered to you to enjoy, to eat or to take away</p>
                                    </div>
                                </div>
                            </div>

                            {/* Qualifications */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Qualifications</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>• Baccalaureate or equivalent experience</p>
                                    <p>• Proven experience as a waiter for 2 or more years</p>
                                    <p>• Strong communication and interpersonal skills</p>
                                    <p>• Fluency in French, English well desired</p>
                                </div>
                            </div>

                            {/* Apply Section */}
                            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6">
                                <div className="flex items-start mb-4">
                                    <div className="bg-white rounded-lg p-3 mr-4">
                                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Define honestly how many relevant skills you have for this job & apply !</h3>

                                        {/* Skill Slider */}
                                        <div className="mb-4">
                                            <div className="flex items-center space-x-4">
                                                <span className="text-sm text-gray-600">FEW</span>
                                                <div className="flex-1">
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="100"
                                                        value={skillLevel}
                                                        onChange={(e) => setSkillLevel(e.target.value)}
                                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                </div>
                                                <span className="text-sm text-gray-600">ALL</span>
                                            </div>
                                        </div>

                                        {/* Checkboxes */}
                                        <div className="space-y-2 mb-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={attachCV}
                                                    onChange={(e) => setAttachCV(e.target.checked)}
                                                    className="mr-2"
                                                />
                                                <span className="text-sm text-gray-700">Attach my CV</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={needVisa}
                                                    onChange={(e) => setNeedVisa(e.target.checked)}
                                                    className="mr-2"
                                                />
                                                <span className="text-sm text-gray-700">I need a visa to work in this country</span>
                                            </label>
                                        </div>

                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Job Alert */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                        <Clock className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-sm">
                                            If you do not get an answer within <strong>2 weeks</strong>, consider the job offer closed at the moment but we look forward to hearing from you !
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* About Us */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    We are an innovative software company created in 2019 in the South of France! We are an innovative software company created
                                    in 2019 in the South of France. We are an innovative software company created in 2019 in the South of France! We are an
                                    innovative software company created in 2019 in the South of France! We are an innovative software company created in 2019
                                    in the South of France! We are an innovative software company created in 2019 in the South of France! We are an innovative
                                    software company created in 2019 in the South of France!
                                </p>
                                <p className="text-gray-700 text-sm mt-3 font-medium">
                                    We are inherent friendly ; You do you, we won't bother you.
                                </p>
                            </div>

                            {/* Workplace Overview */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Workplace Overview</h3>
                                <div className="bg-gray-100 rounded-lg h-64 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                                        <div className="bg-white rounded-lg p-4 shadow-lg">
                                            <Coffee className="w-8 h-8 text-brown-500 mx-auto" />
                                            <p className="text-xs text-gray-600 mt-2">Modern Restaurant Interior</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Similar Jobs */}
                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="font-semibold text-gray-900 mb-4">Similar Jobs</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white text-xs font-bold">E</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm">Job Title Will Go Here</p>
                                                    <p className="text-xs text-gray-600">Company name here</p>
                                                </div>
                                            </div>
                                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
                                                Apply →
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex justify-center space-x-2 mt-4">
                                    <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center">
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="w-[345px] h-[691px] bg-white rounded-[25px] shadow-sm p-6 overflow-hidden">
                                {/* Menu */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-gray-900 mb-3">Menu</h3>
                                    <div className="space-y-2 text-sm">
                                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                            <img src="/nav/circle.png" alt="Change mode" className="w-4 h-4" />
                                            <span>Change mode</span>
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                            <img src="/nav/menu.png" alt="Dashboard" className="w-4 h-4" />
                                            <span>Dashboard</span>
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
                                            <img src="/nav/mail.png" alt="Messages" className="w-4 h-4" />
                                            <span>Messages</span>
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 ">
                                            <img src="/iconamoon_question-mark-square.png" alt="FAQ" className="w-5 h-6 " />
                                            <span>FAQ</span>
                                        </a>
                                    </div>

                                </div>

                                {/* Similar Companies */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-gray-900 mb-3">Similar Companies</h3>
                                    <div className="space-y-3">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="flex items-center">
                                                {/* Company Icon */}
                                                <img
                                                    src="/Group 1000009809.png"
                                                    alt="Company Icon"
                                                    className="w-[44px] h-[44px] border-gray-300 rounded-full mr-3"
                                                />

                                                {/* Company Text */}
                                                <div>
                                                    <p className="font-medium text-sm">Everywhere Jobs</p>
                                                    <p className="text-xs text-gray-600">Business & Tech</p>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>

                                {/* Office Image */}
                                <div className="rounded-lg h-32 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="rounded p-2">
                                            <img src="Frame 1618873061.png" alt="filter" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
