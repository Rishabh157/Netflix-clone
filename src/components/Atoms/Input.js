import React from 'react'
import { twMerge } from 'tailwind-merge';

const Input = ({ label, type, placeholder, className, id, errorMsg = false }) => {
    return (
        <div className="form-floating">
            <input
                type={type}
                className={twMerge('form-control text-white placeholder:text-white focus:text-white pt-[1.5rem] focus:bg-transparent pb-[0.5rem] px-[1rem]', `${className}`)}
                placeholder={placeholder}
                id={id}
            />
            <label
                className='text-white opacity-70'
                htmlFor={id}>
                {label}
            </label>

            {errorMsg && <p className='text-inp-err text-[0.875rem] font-normal mt-[0.25rem]' >
                Please enter a valid email address.
            </p>}
        </div>
    )
}

export default Input;
