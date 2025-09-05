import React, { useState } from "react";

const ToggleSwitch = ({ labelOn = "Available", labelOff = "Unavailable" }) => {
    const [isOn, setIsOn] = useState(true);

    const toggle = () => setIsOn(!isOn);

    return (
        <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={toggle}>
            <span className="text-black text-[14px] font-medium">
                {isOn ? labelOn : labelOff}
            </span>
            <div
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isOn ? "bg-[#FFFFFF]" : "bg-black"
                    }`}
            >
                <div
                    className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-6 bg-[#29ABE2]" : "translate-x-0 bg-white"
                        }`}
                ></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;
