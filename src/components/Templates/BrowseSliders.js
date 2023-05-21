import React, { useState, useEffect } from 'react';
import SliderSection from '../Molecules/SliderSection';
import { useGetTrendingMoviesQuery } from '../../redux/services/TrendingService';


const BrowseSliders = () => {

    const [trendings, setTrendings] = useState([]);

    const { isLoading: treLoading, isFetching: treFetching, data: treData } = useGetTrendingMoviesQuery('');

    // for getting trending movie 
    useEffect(() => {
        if (!treLoading && !treFetching) {
            setTrendings(treData?.results);
        }
    }, [treLoading, treFetching, treData]);


    return (
        <div>

            {/* TRENDING  */}
            <div>
                <SliderSection
                    scrollSliderId={1}
                    title='Trending'
                    isExploreAllEnable={true}
                    data={trendings}
                />
            </div>


            {/* TOP RATED MOVIES  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={2}
                    title='Top Rated Movies'
                    isExploreAllEnable={true}
                    data={trendings}
                />
            </div>


            {/* NETFLIX ORIGINALS  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={3}
                    title='Netflix Originals'
                    isExploreAllEnable={true}
                    data={trendings}
                />
            </div>

        </div>
    )
}

export default BrowseSliders;
