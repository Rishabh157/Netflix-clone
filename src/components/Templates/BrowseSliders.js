import React, { useState, useEffect } from 'react';
import SliderSection from '../Molecules/SliderSection';
import {
    useGetTrendingMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetActionsMoviesQuery,
    useGetComedyMoviesQuery,
    useGetHorrorMoviesQuery,
    useGetRomanticMoviesQuery,
    useGetDocumentriesQuery,
    useGetPopularMoviesQuery,
} from '../../redux/services/BrowseService';
import { useGetRandomBannerQuery } from '../../redux/services/BannerService';


const BrowseSliders = () => {

    const [trendings, setTrendings] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [netflixOriginals, setNetflixOriginals] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [horroMovies, setHorrosMovies] = useState([]);
    const [documentries, setDocumentries] = useState([]);
    const [romanticMovies, setRomanticMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);

    const { isLoading: treLoading, isFetching: treFetching, data: treData } = useGetTrendingMoviesQuery('');
    const { isLoading: topLoading, isFetching: topFetching, data: topData } = useGetTopRatedMoviesQuery('');
    const { isLoading: netflixOriginalsLoading, isFetching: netflixOriginalsFetching, data: netflixOriginalsData } = useGetRandomBannerQuery('');
    const { isLoading: actionsLoading, isFetching: actionsFetching, data: actionsData } = useGetActionsMoviesQuery('');
    const { isLoading: comedyLoading, isFetching: comedyFetching, data: comedyData } = useGetComedyMoviesQuery('');
    const { isLoading: horrorLoading, isFetching: horrorFetching, data: horrorData } = useGetHorrorMoviesQuery('');
    const { isLoading: documentriesLoading, isFetching: documentriesFetching, data: documentriesData } = useGetDocumentriesQuery('');
    const { isLoading: romanticLoading, isFetching: romanticFetching, data: romanticData } = useGetRomanticMoviesQuery('');
    const { isLoading: popularLoading, isFetching: popularFetching, data: popularData } = useGetPopularMoviesQuery('');


    // for getting trending movie 
    useEffect(() => {
        if (!treLoading && !treFetching) {
            setTrendings(treData?.results);
        }
    }, [treLoading, treFetching, treData]);


    // for getting top rated movies 
    useEffect(() => {
        if (!topLoading && !topFetching) {
            setTopRatedMovies(topData?.results);
        }
    }, [topLoading, topFetching, topData]);


    // for getting netflix originals 
    useEffect(() => {
        if (!netflixOriginalsLoading && !netflixOriginalsFetching) {
            setNetflixOriginals(netflixOriginalsData?.results);
        }
    }, [netflixOriginalsLoading, netflixOriginalsFetching, netflixOriginalsData]);


    // for getting actions movies 
    useEffect(() => {
        if (!actionsLoading && !actionsFetching) {
            setActionMovies(actionsData?.results);
        }
    }, [actionsLoading, actionsFetching, actionsData]);


    // for getting comedy movies 
    useEffect(() => {
        if (!comedyLoading && !comedyFetching) {
            setComedyMovies(comedyData?.results);
        }
    }, [comedyLoading, comedyFetching, comedyData]);


    // for getting horror movies 
    useEffect(() => {
        if (!horrorLoading && !horrorFetching) {
            setHorrosMovies(horrorData?.results);
        }
    }, [horrorLoading, horrorFetching, horrorData]);


    // for getting documentries  
    useEffect(() => {
        if (!documentriesLoading && !documentriesFetching) {
            setDocumentries(documentriesData?.results);
        }
    }, [documentriesLoading, documentriesFetching, documentriesData]);


    // for getting romantic movies 
    useEffect(() => {
        if (!romanticLoading && !romanticFetching) {
            setRomanticMovies(romanticData?.results);
        }
    }, [romanticLoading, romanticFetching, romanticData]);


    // for getting popular movies 
    useEffect(() => {
        if (!popularLoading && !popularFetching) {
            setPopularMovies(popularData?.results);
        }
    }, [popularLoading, popularFetching, popularData]);


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
                    data={topRatedMovies}
                />
            </div>


            {/* NETFLIX ORIGINALS  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={3}
                    title='Netflix Originals'
                    isExploreAllEnable={true}
                    data={netflixOriginals}
                />
            </div>



            {/* ACTIONS MOVIES  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={4}
                    title='Actions Movies'
                    isExploreAllEnable={true}
                    data={actionMovies}
                />
            </div>

            {/* COMEDY MOVIES  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={5}
                    title='Comedy Movies'
                    isExploreAllEnable={true}
                    data={comedyMovies}
                />
            </div>


            {/* HORRORS MOVIES  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={6}
                    title='Horror Movies'
                    isExploreAllEnable={true}
                    data={horroMovies}
                />
            </div>


            {/* Documentries  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={7}
                    title='Documentries'
                    isExploreAllEnable={true}
                    data={documentries}
                />
            </div>


            {/* ROMANTIC MOVIES  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={8}
                    title='Romantic Movies'
                    isExploreAllEnable={true}
                    data={romanticMovies}
                />
            </div>


            {/* POPULAR MOVIES  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={9}
                    title='Popular Movies'
                    isExploreAllEnable={true}
                    data={popularMovies}
                />
            </div>


        </div>
    )
}

export default BrowseSliders;
