import React from 'react';
import { Link } from 'react-router-dom';

const MobileBrowsePanel = () => {
    return (
        <div className='flex flex-col justify-between items-center py-4 px-2 w-[300%] text-white rounded-[4px] border-notifi-border border-[1px] child-browse'>
            <span className='mb-2 cursor-pointer'>
                <Link
                    to='/browse'
                    className='text-white'
                >
                    HOME
                </Link>
            </span>
            <span className='mb-2 cursor-pointer'>
                <Link to='/browse/tv' className='hover:text-white'>
                    Tv Shows
                </Link>
            </span>
            <span className='mb-2 cursor-pointer'>
                <Link to='/browse/movie' className='hover:text-white'>
                    Movies
                </Link>
            </span>
            <span className='mb-2 cursor-pointer'>
                <Link to='/browse/discover' className='hover:text-white'>
                    Documentries
                </Link>
            </span>
            <span className='mb-2 cursor-pointer'>
                <Link to='/browse/action' className='hover:text-white'>
                    Actions
                </Link>
            </span>
            <span className='cursor-pointer'>
                <Link to='/browse/my-list' className='hover:text-white'>
                    My List
                </Link>
            </span>
        </div>
    )
}

export default MobileBrowsePanel;
