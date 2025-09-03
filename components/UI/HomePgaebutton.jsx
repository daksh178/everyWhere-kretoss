import React from 'react'

export default function HomePgaebutton({ leftImg, rightImg, text, className = "" }) {
    return (
        <button
            className={`
                ${className} 
                flex items-center justify-center gap-2
                px-4 py-2 border rounded-md bg-white 
                hover:bg-gray-50 transition 
                whitespace-nowrap
                w-40 sm:w-48 md:w-56 lg:w-60 xl:w-64
                max-w-full
            `}
        >
            {leftImg && (
                <img
                    src={leftImg}
                    alt="left"
                    className="flex-shrink-0"
                />
            )}

            <span className="text-sm font-medium truncate">
                {text}
            </span>

            {rightImg && (
                <img
                    src={rightImg}
                    alt="right"
                    className="flex-shrink-0"
                />
            )}
        </button>
    )
}
