import React from 'react';


const ATMInputPagination = ({ totalPages, currentPage, onChange, isHover, onRemoveToolTip, ...rest }) => {

    return (
        <div className='flex justify-center'>
            <div className='lg:w-[3.5%] md:w-[5.5%] sm:w-[10.5%] ms:w-[10.5%] relative' onMouseLeave={onRemoveToolTip}>
                <input
                    className='outline-none py-[6px] w-[100%] border-[4px] border-black text-center text-[14px] rounded-[2px]'
                    type='number'
                    inputMode='numeric'
                    value={currentPage}
                    {...rest}
                    onChange={(e) => {
                        onChange(e.target.value)
                    }}
                />

                <div className={`absolute -right-24 -top-7 bg-black px-2 rounded transition-all ${isHover ? 'opacity-100' : 'opacity-0'}`}>
                    <span className='text-white font-semibold text-[13px]'> Total Pages {totalPages} </span>
                </div>

            </div>
        </div>
    )
}

export default ATMInputPagination;
