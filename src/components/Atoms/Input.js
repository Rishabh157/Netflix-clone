import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({
    label,
    id,
    name,
    type,
    placeholder,
    value,
    refValue,
    readOnly,
    className,
    labelClassName,
    onChange,
    onFocus,
    onBlur,
    endIcon,
    isInfo,
    isError,
    isSuccess }) => {

    return (
        <div className="form-floating relative">
            <input
                type={type}
                name={name}
                className={twMerge(`form-control placeholder:select-none
                 bg-transparent shadow-none text-white text-[15px] pt-[1.5rem]
                 pb-[0.5rem] px-[1rem] placeholder:text-white focus:text-white
               focus:border-white 
                 ${isSuccess && 'focus:border-green-400 border-green-400'} 
                 ${isInfo && 'border-[#ffc107]'} 
                 ${isError && 'focus:border-inp-err border-inp-err'} 
                 focus:bg-transparent`, `${className}`)
                }
                placeholder={placeholder}
                value={value}
                id={id}
                ref={refValue}
                readOnly={readOnly}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
            />
            <label
                className={twMerge(`text-white opacity-70 select-none`, `${labelClassName}`)}
                htmlFor={id}>
                {label}
            </label>
            {endIcon && <div className='absolute right-2 top-4'>{endIcon}</div>}
        </div>
    )
};

export default Input;
