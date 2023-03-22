import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({ label, type, placeholder, className, id, errorMsg, isError, isSuccess }) => {
    return (
        <div>
            <div className="form-floating">
                <input
                    type={type}
                    className={twMerge(`form-control placeholder:select-none bg-transparent shadow-none text-white text-[15px] pt-[1.5rem] pb-[0.5rem] px-[1rem] placeholder:text-white focus:text-white focus:border-white ${isSuccess && 'focus:border-green-400 border-green-400'} ${isError && 'focus:border-inp-err'} focus:bg-transparent`, `${className}`)}
                    placeholder={placeholder}
                    id={id}
                />
                <label
                    className='text-white opacity-70 select-none'
                    htmlFor={id}>
                    {label}
                </label>


            </div>
            {isError && <p className='text-inp-err text-[0.875rem] font-normal mt-[0.25rem]'> {errorMsg} </p>}
        </div>
    )
};

export default Input;
