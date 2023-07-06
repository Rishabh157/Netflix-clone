import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { TMDB_URL } from '../../constants/constants';
import Navbar from '../Atoms/Navbar';
import Footer from '../Atoms/Footer';
import { BsFillPlayFill, BsDot } from 'react-icons/bs';
import { useGetSingleMovieInfoQuery, useGetPlayTrailerUrlQuery } from '../../redux/services/WatchService';
import { getDateIntoDDMMYYY } from '../../common/date';
import TrailerPlayModel from '../Atoms/TrailerPlayModel';
import CastSlider from '../Templates/CastSlider';

const SingleWatchPage = () => {

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const [trailerId, setTrailerId] = useState('');
    const [urlType, setUrlType] = useState('');

    const [movieData, setMovieData] = useState({});
    const [trailerUrl, setTrailerUrl] = useState('');
    const [isShowTrailer, setIsShowTrailer] = useState(false);
    const { isLoading, isFetching, data } = useGetSingleMovieInfoQuery({ id, type: urlType });

    const {
        isLoading: trailerIsLoading,
        isFetching: trailerIsFetching,
        data: trailerData
    } = useGetPlayTrailerUrlQuery(
        { id:trailerId, type: urlType },
        {skip : !trailerId}
        );

    const getMovieRunTimeIntoHours = (runTime) => {
        const hours = Math.floor(runTime / 60); // Get the number of hours
        const minutes = runTime % 60;  // Get the remaining minutes
        return {
            hours,
            minutes
        }
    }

    useEffect(() => {
        if (!isLoading && !isFetching) {
            setMovieData(data);
        };
    }, [isLoading, isFetching, data]);


    useEffect(() => {

        if (!trailerIsLoading && !trailerIsFetching) {
            const filteredOfficialTrailers = trailerData?.results?.filter((ele) => {
                if (ele?.type === 'Trailer' && ele?.official === true) {
                    return ele
                };
                return false;
            });
            if (Array.isArray(filteredOfficialTrailers) && filteredOfficialTrailers?.length > 0) {
                const randomObjTrailer = filteredOfficialTrailers[Math.floor(Math.random() * filteredOfficialTrailers?.length)];
                setTrailerUrl(randomObjTrailer?.key);
            } else {
                const randomObjTrailer = trailerData?.results[Math.floor(Math.random() * trailerData?.results?.length)];
                setTrailerUrl(randomObjTrailer?.key);
            };
        };
    }, [trailerIsLoading, trailerIsFetching, trailerData]);


    useEffect(() => {
        if (searchParams.get('type')) {
            setUrlType(searchParams.get('type'));
        } else {
            setUrlType(searchParams.get('id'));
        };
    }, [searchParams]);

    return (
        <React.Fragment>

            <Navbar bgColor='bg-black py-1' />

            <TrailerPlayModel
                show={isShowTrailer}
                url={trailerUrl}
                autoplay={1}
                disableControls={1}
                onClose={() => setIsShowTrailer(false)}
            />

            <div
                style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0)), url(${TMDB_URL}${movieData?.backdrop_path})`, }}
                className='h-[600px] bg-cover bg-no-repeat px-10 py-6'>

                <div className='grid grid-cols-12'>

                    <div className='col-span-3'>
                        <div className='h-[500px] relative '>
                            <img
                                src={`${TMDB_URL}${movieData?.poster_path}`}
                                alt='pirates'
                                className=' rounded absolute top-0'
                            />
                        </div>
                    </div>


                    <div className='col-span-9 py-14 px-6'>

                        <div className='h-full w-full '>

                            <h1 className='text-white font-bold inline text-[2.2rem]'>
                                <a className='hover:text-white '
                                    href='/'>
                                    {movieData?.original_title}
                                    <span className='tag-release-date opacity-80 px-2 font-normal'>
                                        ({movieData?.release_date?.split('-')[0]})
                                    </span>
                                </a>
                            </h1>

                            <div>
                                <span className='px-[0.4rem] py-[0.2rem] rounded-[3px] text-[14px] border-white border-[1px] opacity-80 text-white' >
                                    UA
                                </span>

                                <span className='text-white px-2 text-[15px] align-middle'>
                                    {movieData?.release_date && getDateIntoDDMMYYY(movieData?.release_date)} (IN)  <BsDot className='inline' fill='#ffffff' />
                                </span>

                                <span className='text-white text-[15px]'>
                                    {movieData?.genres?.map((genre, ind) => {
                                        return (
                                            genre?.name + ' , '
                                        )
                                    })}

                                    {/* Adventure, Action, Fantasy */}
                                    <BsDot className='inline' fill='#ffffff' />
                                    {getMovieRunTimeIntoHours(movieData?.runtime).hours}h {getMovieRunTimeIntoHours(movieData?.runtime).minutes}m
                                </span>
                            </div>

                            <div className='h-[90px] flex items-center trailer-play-btns'>
                                <div
                                    onClick={() => {
                                        setIsShowTrailer(true);
                                        setTrailerId(movieData?.id);
                                    }}
                                    className='flex items-center transition-all cursor-pointer hover:opacity-70'>
                                    <BsFillPlayFill size={36} fill='#ffffff' />
                                    <span className='text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                        Play Trailer
                                    </span>
                                </div>
                            </div>

                            <div>
                                <span className='text-white text-[1.1em] font-normal opacity-70 italic'>
                                    {movieData?.tagline}
                                </span>
                            </div>

                            <div className='mt-[10px] mb-[8px]'>
                                <h2 className='text-white text-[1.3em] font-semibold'>Overview</h2>
                                <div className='mt-2' dir='auto'>
                                    <p className='text-white text-justify leading-6 text-[1em]'>
                                        {movieData?.overview}
                                    </p>
                                </div>
                            </div>



                            <div className='directors-name mt-4 grid grid-cols-12'>

                                <div className='col-span-4'>
                                    <h4 className='text=[1em] font-bold text-white'>
                                        <a href='/watch/1'>
                                            Rob Marshall
                                        </a>
                                    </h4>
                                    <span className='text-[0.9em] text-white text-left'>
                                        Director
                                    </span>
                                </div>

                                <div className='col-span-4'>
                                    <h4 className='text=[1em] font-bold text-white'>
                                        <a href='/watch/1'>
                                            Terry Rossio
                                        </a>
                                    </h4>
                                    <span className='text-[0.9em] text-white text-left'>
                                        Screenplay
                                    </span>
                                </div>

                                <div className='col-span-4'>
                                    <h4 className='text=[1em] font-bold text-white'>
                                        <a href='/watch/1'>
                                            Ted Elliott
                                        </a>
                                    </h4>
                                    <span className='text-[0.9em] text-white text-left'>
                                        Screenplay
                                    </span>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

            <div className='mt-10 h-screen'>
                <CastSlider data={movieData?.credits?.cast} />
            </div>

            <Footer />

        </React.Fragment>
    )
}

export default SingleWatchPage;
