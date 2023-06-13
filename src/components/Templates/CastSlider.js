import React from 'react';
import ScrollSlider from '../Atoms/ScrollSlider';
import CastCard from '../Atoms/CastCard';
import { TMDB_URL } from '../../constants/constants';

const CastSlider = ({ data }) => {
    return (
        <React.Fragment>
            <h1 className='text-white pl-10 text-[22px] font-bold mb-2'>Top Cast</h1>
            <ScrollSlider
                id={1}
            >
                {data?.map((cast, ind) => {
                    return (
                        <CastCard
                            castId={cast?.cast_id}
                            image={`${TMDB_URL}${cast?.profile_path}`}
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
