import React from 'react';
import NetflixLoader from './NetflixLoader';
import { twMerge } from 'tailwind-merge';

const Button = ({ text, type, className, onBlur, onClick, icon, disable = false, isLoading  }) => {
    return (
        <button
            disabled={disable}
            type={type}
            onClick={onClick}
            onBlur={onBlur}
            className={twMerge('flex justify-center items-center select-none bg-netflix-btn px-[1rem] text-white py-[0.25rem] rounded-[0.25rem] in-btn out-btn hover:bg-netflix-btn-hover transition duration-250', `${className}`)}
        >
            {!isLoading ? <> {text} {icon} </> : <NetflixLoader />}
        </button>
    )
}   

export default Button;
