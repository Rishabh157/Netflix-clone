import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const TrailerPlayModel = ({ show, url, autoplay = 1, controls = 1, onClose }) => {

    return (
        <div className={`${show ? 'opacity-100 overlay' : 'opacity-0 invisible transition-all'} `}>
            <div className='bg-black h-[96vh] w-[60%] left-[20%] rounded fixed z-50 top-4'>

                <div className='flex justify-between items-center px-3 py-3'>
                    <div>
                        <h4 className='text-[1.10rem] font-semibold text-white'>Play Trailer</h4>
                    </div>

                    <div
                        onClick={onClose}
                        className='group transition-all p-1 cursor-pointer hover:bg-[#262626] rounded'>
                        <RxCross2
                            size={20}
                            // color='#ffffff'
                            className='text-gray group-hover:text-white transition-all cursor-pointer'
                        />
                    </div>
                </div>

                <div className='h-max'>
                    {show && <iframe
                        className='w-full h-[500px]'
                        src={`https://www.youtube.com/embed/${url}?autoplay=${autoplay}&controls=${controls}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        frameBorder="1"
                        allowFullScreen
                    />}
                </div>

            </div>
        </div>
    )
}

export default TrailerPlayModel;
