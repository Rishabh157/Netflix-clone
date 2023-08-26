import React from 'react';
import ScrollSlider from '../Atoms/ScrollSlider';
import CastCard from '../Atoms/CastCard';
import { TMDB_URL } from '../../constants/constants';

const CastSlider = ({ data }) => {
    return (
        <React.Fragment>
            <h1 className='text-white font-medium mb-2 2xxl:text-[24px] xl:text-[22px] lg:text-[17px] md:text-[17px] sm:text-[17px] ms:text-[20px] lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2'>Top Cast</h1>
            <ScrollSlider
                id={0}
            >
                {data?.map((cast, ind) => {
                    return (
                        <CastCard
                            key={ind}
                            castId={cast?.id}
                            image={`${TMDB_URL}${cast?.profile_path || ''}`}
                            originalName={cast?.original_name}
                            characterName={cast?.character}
                        />
                    )
                })}
            </ScrollSlider>
        </React.Fragment>
    )
}

export default CastSlider;
