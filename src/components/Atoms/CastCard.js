import React from 'react';
import { Link } from 'react-router-dom';

const CastCard = ({ castId, image, originalName, characterName }) => {
    return (
        <Link
            className='mx-1 text-white'
            to={`/person/${castId}/${originalName?.replaceAll(' ', '-')?.toLowerCase()}`}
        >
            <div className='border-[1px] rounded border-[#ffffff33] h-[260px]'>
                <div className='relative bg-black h-[175px] w-[138px] rounded-top'>
                    <img
                        src={image}
                        className='absolute top-0 left-0 h-full w-full rounded-top'
                        alt={originalName ?? 'cast'}
                        loading='lazy'
                    />
                </div>
                <div className='px-2 py-2'>
                    <h2 title={originalName} className='inline font-bold text-[15px] hover:text-[#8f8a8a]'>{originalName}</h2>
                    <h2 title={characterName} className='text-white text-[14px] truncate-text'>{characterName}</h2>
                </div>
            </div>
        </Link>
    )
}

export default CastCard;
