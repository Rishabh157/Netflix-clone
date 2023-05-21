import React, { useState, useRef } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { TMDB_URL } from '../../constants/constants';

const Banner = ({ bannerImg, title, overview, }) => {

    const [isPlay, setIsPlay] = useState(false);

    // refrence element titleHeading and overview Banner
    const titleRef = useRef(null);
    const overviewRef = useRef(null);

    // this function is called for play video
    const handlePlay = () => {

        setTimeout(() => {
            setIsPlay(true);

            titleRef.current.style.transform = 'translateY(90px)';
            titleRef.current.style.opacity = '0.9';
            // titleRef.current.style.fontSize = '42px';

            overviewRef.current.style.opacity = '0';
            overviewRef.current.style.transform = 'translateY(60px)';
        }, 200);
    }


    // this function is called for pause video
    const handlePause = () => {

        setTimeout(() => {
            setIsPlay(false);

            titleRef.current.style.transform = 'translateY(0px)';
            titleRef.current.style.opacity = '1';
            // titleRef.current.style.fontSize = '60px';

            overviewRef.current.style.opacity = '1';
            overviewRef.current.style.transform = 'translateY(0px)';

        }, 200);
    }

    return (
        <div
            style={{
                backgroundImage: `url(${TMDB_URL}${bannerImg})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                position: 'relative',
                top: '-81px',
                zIndex: '10',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '38px'
            }}>

            <div className='lg:pt-40 md:pt-40 sm:pt-28 ms:pt-24 lg:w-[50%] md:w-[60%] sm:w-[80%] ms:w-[80%]'>

                <h1
                    id='banner-heading'
                    ref={titleRef}
                    className='banner-title inline-block font-bold text-white select-none lg:text-[60px] md:text-[54px] sm:text-[38px] ms:text-[36px]'>
                    {title}
                </h1>

                <p
                    id='overView'
                    ref={overviewRef}
                    className={`text-white select-none banner-overview lg:pr-20 md:pr-16 sm:pr-0 ms:pr-0 lg:text-[15px] md:text-[15px] sm:text-[16px] ms:text-[14px]`}>
                    {overview}
                </p>

                <div className='flex mt-5'>

                    <button
                        className='flex top-0 items-center px-6 py-1 bg-white rounded font-bold mr-4 select-none cursor-pointer'
                        type='button'
                        onClick={() => isPlay ? handlePause() : handlePlay()}
                    >
                        {isPlay ? <BsPauseFill
                            size={35}
                            className='mr-1'
                        /> : <BsFillPlayFill
                            size={35}
                            className='mr-1'
                        />}
                        Play
                    </button>

                    <button className={`flex items-center px-6 py-1 bg-[#6d6d6eb3] text-white rounded font-bold select-none ${isPlay && 'opacity-0 transition-all duration-300'}`}>
                        <AiOutlineInfoCircle size={32} color='' className='mr-1' />
                        More Info
                    </button>
                </div>
            </div>

            <div className='absolute select-none right-0 px-4 py-1 font-semibold bg-bg-ag text-white text-[14px] border-l-white border-l-[2px] lg:bottom-24 md:bottom-24 sm:bottom-32 ms:bottom-32'>
                U&#x2f;A 13+
            </div>

        </div>
    )
}

export default Banner;
