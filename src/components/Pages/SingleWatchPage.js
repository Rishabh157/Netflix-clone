import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { TMDB_URL } from '../../constants/constants';
import Navbar from '../Atoms/Navbar';
import Footer from '../Atoms/Footer';
import { getDateIntoDDMMYYY } from '../../common/date';
import TrailerPlayModel from '../Atoms/TrailerPlayModel';
import { MediaType } from '../../constants/enum';
import {
    useGetSingleMovieInfoQuery,
    useGetPlayTrailerUrlQuery,
    useGetSimilarShowsOrMoviesQuery
} from '../../redux/services/WatchService';
import CastSlider from '../Templates/CastSlider';
import MovieCard from '../Atoms/MoviesCard';
import ATMInputPagination from '../Atoms/ATMInputPagination';
import { BsFillPlayFill, BsDot, BsPauseFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';


const SingleWatchPage = () => {

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const [trailerId, setTrailerId] = useState('');
    const [urlType, setUrlType] = useState('');

    // this state handle ATMInputPagination
    const [totalPage, setTotalPage] = useState();
    const [page, setPage] = useState(1 || 1);
    const [isHover, setIsHover] = useState(false);


    const [movieData, setMovieData] = useState({});
    const [similarMoviesData, setSimilarMoviesData] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [isShowTrailerModal, setIsShowTrailerModal] = useState(false);
    const { isLoading, isFetching, data } = useGetSingleMovieInfoQuery({ id, type: urlType });

    const {
        isLoading: isSimilarLoading,
        isFetching: isSimilarFetching,
        data: similarData
    } = useGetSimilarShowsOrMoviesQuery({ id, type: urlType, page });

    useEffect(() => {
        if (!isSimilarLoading && !isSimilarFetching) {
            setSimilarMoviesData(similarData?.results)
            setTotalPage(similarData?.total_pages)
        }
    }, [isSimilarLoading, isSimilarFetching, similarData, page])

    const {
        isLoading: trailerIsLoading,
        isFetching: trailerIsFetching,
        data: trailerData
    } = useGetPlayTrailerUrlQuery(
        { id: trailerId, type: urlType },
        { skip: !trailerId }
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
                // console.log('filteredOfficialTrailers', Math.floor(Math.random() * filteredOfficialTrailers?.length))
                setTrailerUrl(randomObjTrailer?.key);
            } else {
                const randomObjTrailer = trailerData?.results[Math.floor(Math.random() * trailerData?.results?.length)];
                // console.log('randomObjTrailer', randomObjTrailer);
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
                show={isShowTrailerModal}
                url={trailerUrl || ''}
                autoplay={1}
                disableControls={1}
                onClose={() => setIsShowTrailerModal(false)}
            />

            {/* this is for Lg and Md */}
            <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0)), url(${TMDB_URL}${movieData?.backdrop_path})`, }}
                className='h-[600px] bg-cover bg-no-repeat px-10 py-6 lg:block md:block sm:hidden ms:hidden'>

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
                            <h1 className='text-white font-bold inline lg:text-[2.2rem] md:text-[2.0rem] sm:text-[1rem] ms:text-[0.8rem]'>
                                <a className='hover:text-white '
                                    href='/'>
                                    {urlType === MediaType.MOVIE ? movieData?.original_title : movieData?.original_name}
                                    <span className='tag-release-date opacity-80 px-2 font-normal'>
                                        {
                                            urlType === MediaType.MOVIE ? <>({movieData?.release_date?.split('-')[0]})</> : null
                                        }
                                    </span>
                                </a>
                            </h1>

                            <div>
                                <span className='px-[0.4rem] py-[0.2rem] rounded-[3px] text-[14px] border-white border-[1px] opacity-80 text-white' >
                                    UA
                                </span>
                                <span className='text-white px-2 text-[15px] align-middle'>
                                    {urlType === MediaType.MovieCard
                                        ? movieData?.release_date && getDateIntoDDMMYYY(movieData?.release_date)
                                        : movieData?.first_air_date && getDateIntoDDMMYYY(movieData?.first_air_date)}
                                    (IN) <BsDot className='inline' fill='#ffffff' />
                                </span>

                                <span className='text-white text-[15px]'>
                                    {movieData?.genres?.map((ele) => ele.name).join(' , ')}
                                    {/* Adventure, Action, Fantasy */}
                                    {movieData?.release_date && <BsDot className='inline' fill='#ffffff' />}
                                    {movieData?.runtime && getMovieRunTimeIntoHours(movieData?.runtime).hours + 'h'}
                                    {movieData?.runtime && getMovieRunTimeIntoHours(movieData?.runtime).minutes + 'm'}
                                </span>
                            </div>

                            <div className='h-[90px] flex items-center trailer-play-btns'>
                                <div
                                    onClick={() => {
                                        setIsShowTrailerModal(true);
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

            {/* this is for Sm and MS */}
            <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0)), url(${TMDB_URL}${movieData?.backdrop_path})`, }}
                className='h-[90vh] bg-cover bg-no-repeat px-8 py-6 lg:hidden md:hidden sm:block ms:block'>
                <div className='grid grid-cols-12'>

                    <div className='col-span-12'>
                        <div className='w-full relative'>
                            <img
                                src={`${TMDB_URL}${movieData?.poster_path}`}
                                alt='pirates'
                                className='rounded'
                            />
                        </div>
                    </div>

                    <div className='col-span-6 mt-6'>
                        <button
                            className='flex top-0 items-center px-6 py-1 bg-white border-black border-[1] rounded font-bold mr-4 select-none cursor-pointer'
                            type='button'
                            onClick={() => {
                                // handlePlay()
                                setIsShowTrailerModal(true);
                                setTrailerId(movieData?.id);
                            }}
                        >
                            {isShowTrailerModal ? <BsPauseFill
                                size={35}
                                // fill='#ffffff'
                                className='mr-1'
                            /> : <BsFillPlayFill
                                size={35}
                                // fill='#ffffff'
                                className='mr-1'
                            />}
                            Play
                        </button>
                    </div>

                    <div className='col-span-6 mt-6 flex justify-end'>
                        <button className={`flex justify-end items-center px-6 py-1 bg-[#6d6d6eb3] text-white rounded font-bold select-none`}>
                            <AiOutlineInfoCircle size={32} className='mr-1' />
                            More Info
                        </button>
                    </div>



                </div>
            </div>

            <div className='mt-10'>
                <CastSlider data={movieData?.credits?.cast} />
            </div>


            {/* Similar movies section */}
            <div className='py-20'>
                <div className='lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2 mb-2 flex items-center'>
                    <h2 className='slider-section-title z-30 mb-1 text-card-title select-none hover:text-white inline-block lg:text-[17px] md:text-[17px] sm:text-[17px] ms:text-[20px] font-medium cursor-pointer'>
                        Similar Movies
                    </h2>
                    <span className='text-cyan-400 flex pl-2 text-[12px] explore-all-text'> Explore All  </span>
                </div>


                <div className='lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2'>
                    <div className='grid grid-cols-12 gap-2'>
                        {similarMoviesData?.map((ele, ind) => {
                            return (
                                <div className='p-2 lg:col-span-2 md:col-span-3 sm:col-span-4 ms:col-span-6' key={ele?.id || ind}>
                                    <MovieCard
                                        image={`${TMDB_URL}${ele?.poster_path || ''}`}
                                        url={`/watch/${ele?.id}?type=movie`}
                                    />
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

                <div className='mt-10'>
                    <ATMInputPagination
                        totalPages={totalPage}
                        currentPage={page}
                        isHover={isHover}
                        onRemoveToolTip={() => {
                            setIsHover(false)
                        }}
                        onChange={(pageNumber) => {
                            if (pageNumber <= totalPage) {
                                setPage(pageNumber)
                            } else {
                                setIsHover(true)
                            }
                        }}
                    />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default SingleWatchPage;
