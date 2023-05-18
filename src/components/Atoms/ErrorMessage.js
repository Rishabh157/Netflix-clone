import React from 'react';
import { twMerge } from 'tailwind-merge';

const ErrorMessage = ({ isError, errorMsg, className }) => {
    return (
        isError && <p className={twMerge('text-inp-err text-[0.875rem] px-[3px] font-normal mt-[0.25rem]', className)}> {errorMsg} </p>
    )
}

export default ErrorMessage;
