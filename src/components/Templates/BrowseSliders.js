import React, { useState, useEffect } from 'react';
import SliderSection from '../Molecules/SliderSection';
import { MediaType } from '../../constants/enum';
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
import { useInView } from 'react-intersection-observer';

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

    // for showing the component using intersection api
    const { ref: secondRef, inView: secondInView } = useInView({ triggerOnce: true });
    const { ref: thirdRef, inView: thirdInView } = useInView({ triggerOnce: true });
    const { ref: fourthRef, inView: fourthInView } = useInView({ triggerOnce: true });
    const { ref: fifthRef, inView: fifthInView } = useInView({ triggerOnce: true });
    const { ref: sixthRef, inView: sixthInView } = useInView({ triggerOnce: true });
    const { ref: seventhRef, inView: seventhInView } = useInView({ triggerOnce: true });
    const { ref: eightRef, inView: eightInView } = useInView({ triggerOnce: true });

    // api calling
    const { isLoading: treLoading, isFetching: treFetching, data: treData } = useGetTrendingMoviesQuery('');
    const { isLoading: topLoading, isFetching: topFetching, data: topData } = useGetTopRatedMoviesQuery('');
    const { isLoading: netflixOriginalsLoading, isFetching: netflixOriginalsFetching, data: netflixOriginalsData } = useGetRandomBannerQuery('', { skip: !secondInView });
    const { isLoading: actionsLoading, isFetching: actionsFetching, data: actionsData } = useGetActionsMoviesQuery('', { skip: !thirdInView });
    const { isLoading: comedyLoading, isFetching: comedyFetching, data: comedyData } = useGetComedyMoviesQuery('', { skip: !fourthInView });
    const { isLoading: horrorLoading, isFetching: horrorFetching, data: horrorData } = useGetHorrorMoviesQuery('', { skip: !fifthInView });
    const { isLoading: documentriesLoading, isFetching: documentriesFetching, data: documentriesData } = useGetDocumentriesQuery('', { skip: !sixthInView });
    const { isLoading: romanticLoading, isFetching: romanticFetching, data: romanticData } = useGetRomanticMoviesQuery('', { skip: !seventhInView });
    const { isLoading: popularLoading, isFetching: popularFetching, data: popularData } = useGetPopularMoviesQuery('', { skip: !eightInView });


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
                    mediaType={MediaType.MOVIE}
                    isExploreAllEnable={true}
                    data={trendings}
                />
            </div>

            {/* TOP RATED MOVIES  */}
            <div className='mt-5'>
                <SliderSection
                    scrollSliderId={2}
                    title='Top Rated Movies'
                    mediaType={MediaType.MOVIE}
                    isExploreAllEnable={true}
                    data={topRatedMovies}
                />
            </div>

            {/* NETFLIX ORIGINALS  */}
            <div className='mt-5' ref={secondRef}>
                {secondInView && <SliderSection
                    scrollSliderId={3}
                    title='Netflix Originals'
                    mediaType={MediaType.TV}
                    isExploreAllEnable={true}
                    data={netflixOriginals}
                />}
            </div>

            {/* ACTIONS MOVIES  */}
            <div className='mt-5' ref={thirdRef}>
                {thirdInView && <SliderSection
                    scrollSliderId={4}
                    title='Actions Movies'
                    mediaType={MediaType.MOVIE}
                    isExploreAllEnable={true}
                    data={actionMovies}
                />}
            </div>

            {/* COMEDY MOVIES  */}
            <div className='mt-5' ref={fourthRef}>
                {fourthInView && <SliderSection
                    scrollSliderId={5}
                    title='Comedy Movies'
                    mediaType={MediaType.MOVIE}
                    isExploreAllEnable={true}
                    data={comedyMovies}
                />}
            </div>

            {/* HORRORS MOVIES  */}
            <div className='mt-5' ref={fifthRef}>
                {fifthInView && <SliderSection
                    scrollSliderId={6}
                    title='Horror Movies'
                    mediaType={MediaType.MOVIE}
                    isExploreAllEnable={true}
                    data={horroMovies}
                />}
            </div>

            {/* Documentries  */}
            <div className='mt-5' ref={sixthRef}>
                {sixthInView && <SliderSection
                    scrollSliderId={7}
                    title='Documentries'
                    mediaType={MediaType.MOVIE}
                    isExploreAllEnable={true}
                    data={documentries}
                />}
            </div>

            {/* ROMANTIC MOVIES  */}
            <div className='mt-5' ref={seventhRef}>
                {seventhInView && <SliderSection
                    scrollSliderId={8}
                    title='Romantic Movies'
                    isExploreAllEnable={true}
                    mediaType={MediaType.MOVIE}
                    data={romanticMovies}
                />}
            </div>

            {/* POPULAR MOVIES  */}
            <div className='mt-5' ref={eightRef}>
                {eightInView && <SliderSection
                    scrollSliderId={9}
                    title='Popular Movies'
                    isExploreAllEnable={true}
                    mediaType={MediaType.MOVIE}
                    data={popularMovies}
                />}
            </div>
        </div>
    )
}

export default BrowseSliders;
