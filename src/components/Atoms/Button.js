import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ text, type, className, onBlur, onClick, icon }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            onBlur={onBlur}
            className={twMerge('flex justify-center items-center bg-netflix-btn px-[1rem] text-white py-[0.25rem] rounded-[0.25rem] in-btn out-btn hover:bg-netflix-btn-hover transition duration-250',`${className}`)}
        >
            {text} {icon}
        </button>
    )
}

export default Button;
