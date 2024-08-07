import React from 'react';
import ScrollSlider from '../Atoms/ScrollSlider';
import MovieCard, { LoadingMovieCard } from '../Atoms/MoviesCard';
import { BiChevronRight } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';
import { TMDB_URL } from '../../constants/constants';

const SliderSection = ({ title, mediaType, isExploreAllEnable, titleClassName, scrollSliderId, data = [] }) => {

    const loadingItems = Array(10).fill(0)

    return (
        <div className='slider-section-card'>

            <div className='lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2 mb-2 flex items-center'>
                <h2 className={twMerge('slider-section-title z-30 mb-1 text-card-title select-none hover:text-white inline-block lg:text-[17px] md:text-[17px] sm:text-[17px] ms:text-[20px] font-medium cursor-pointer', titleClassName)}>
                    {title}
                </h2>
                {isExploreAllEnable && <div className='select-none z-10 flex items-center lg:flex md:flex sm:flex ms:flex'>
                    <span className='text-cyan-400 flex pl-2 text-[12px] explore-all-text'> Explore All  </span>
                    <BiChevronRight fill='#00FFFF' className='explore-all-icon' />
                </div>}
            </div>

            <div>
                <ScrollSlider
                    id={scrollSliderId}
                >
                    {data?.length ? data?.map((photo) => {
                        return (
                            <MovieCard
                                key={photo?.id}
                                image={`${TMDB_URL}${photo?.poster_path}`}
                                url={`/watch/${photo?.id}?type=${mediaType}`}
                            />
                        )
                    }) : <div className='flex gap-x-2'>
                        {loadingItems?.map((__, ind) => <LoadingMovieCard key={ind} />)}
                    </div>}
                </ScrollSlider>
            </div>
        </div>
    )
}

export default SliderSection;
