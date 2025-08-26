import React from 'react'

export default function HomePgaebutton({ leftImg, rightImg, text, className = "" }) {
    return (
        <button
            className={`${className} flex items-center gap-1 px-4 py-2 border rounded-md bg-white hover:bg-gray-50 transition`}
        >
            {leftImg && (
                <img
                    src={leftImg}
                    alt="left"
                />
            )}

            <span className="text-sm font-medium hidden xs:inline sm:inline">
                {text}
            </span>

            {rightImg && (
                <img
                    src={rightImg}
                    alt="right"
                />
            )}
        </button>
    )
}
