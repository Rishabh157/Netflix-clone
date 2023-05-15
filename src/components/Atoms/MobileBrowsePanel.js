import React from 'react';

const MobileBrowsePanel = () => {
    return (
        <div className='flex flex-col justify-between items-center py-4 px-2 w-[300%] text-white rounded-[4px] border-notifi-border border-[1px] child-browse'>
 
            <span className='mb-2 cursor-pointer'> HOME </span>
            <span className='mb-2 cursor-pointer'> Tv Shows </span>
            <span className='mb-2 cursor-pointer'> Movies </span>
            <span className='mb-2 cursor-pointer'> My List </span>
            <span className='mb-2 cursor-pointer'> New & Popular </span>
            <span className='cursor-pointer'> Browse By Languages </span>

        </div>
    )
}

export default MobileBrowsePanel;
