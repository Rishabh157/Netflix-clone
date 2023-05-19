import React, { useState, useEffect } from 'react';
import ScrollSlider from '../Atoms/ScrollSlider';
import MovieCard from '../Atoms/MoviesCard';
import { BiChevronRight } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

const SliderSection = ({ title, isExploreAllEnable, titleClassName, data = [] }) => {


    const [photos, setPhotos] = useState([]);

    const getDummyData = () => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => setPhotos(data))
            .catch(err => console.log(err));
    }


    useEffect(() => {
        getDummyData()

    }, [])


    return (
        <div className='slider-section-card'>

            <div className='lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2 mb-2 flex items-center'>

                <h2 className={twMerge('slider-section-title z-30 mb-1 text-card-title select-none hover:text-white inline-block lg:text-[17px] md:text-[18px] sm:text-[20px] ms:text-[20px] font-medium cursor-pointer', titleClassName)}>
                    {title}
                </h2>

                {isExploreAllEnable && <div className='select-none z-10 flex items-center lg:flex md:flex sm:hidden ms:hidden'>
                    <span className='text-cyan-400 flex pl-2 text-[12px] explore-all-text'> Explore All  </span>
                    <BiChevronRight fill='#00FFFF' className='explore-all-icon' />
                </div>}

            </div>

            <div>

                <ScrollSlider
                    id={1}
                >
                    {photos?.slice(0, 20)?.map((photo, ind) => {
                        // console.log(photo)
                        return (
                            <MovieCard
                                key={ind}
                                image={photo?.url}
                                
                            // url={`/watch/${photo?.id}`}
                            // image={`${TMDB_URL}${photo.poster_path}`}
                            />
                        )
                    })}
                </ScrollSlider>
            </div>

        </div>
    )
}

export default SliderSection;
