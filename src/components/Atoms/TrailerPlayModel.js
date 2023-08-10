import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

const TrailerPlayModel = ({ show, url, autoplay = 1, controls = 1, onClose, className }) => {

    return (
        <div className={twMerge(`${show ? 'opacity-100 overlay' : 'opacity-0 invisible transition-all'}`, className)}>
            <div className='bg-black border-white border-[1px] rounded fixed z-50 2xxl:h-[90vh] 2xl:h-[90vh] xl:h-[90vh] lg:h-[96vh] md:h-[94vh] sm:h-[94vh] ms:h-[50vh] 
                              2xl:w-[90%] xl:w-[70%] md:w-[80%] sm:w-[80%] ms:w-[95%] 2xl:left-[5%] xl:left-[15%] lg:left-[10%] md:left-[10%] 
                              sm:left-[10%] ms:left-[3%] 2xl:top-10 xl:top-10 lg:top-4 md:top-4 sm:top-4 ms:top-40'>
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
                <div>
                    {show && <iframe
                        className='w-full 2xxl:h-[900px] 2xl:h-[700px] xl:h-[530px] lg:h-[670px] md:h-[600px] sm:h-[490px] ms:h-[300px]'
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