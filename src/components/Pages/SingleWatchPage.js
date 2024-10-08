import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
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
import CrewSlider from '../Templates/CrewSlider';
import MovieCard from '../Atoms/MoviesCard';
import ATMInputPagination from '../Atoms/ATMInputPagination';
import { useSelector } from 'react-redux';
import { BsFillPlayFill, BsDot, BsPauseFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import ATMLoader from '../Atoms/ATMLoader';
import SearchTemplate from '../Templates/SearchTemplate';
import { VscTriangleDown } from 'react-icons/vsc';


const SingleWatchPage = () => {

    const { id } = useParams();
    const [searchParams] = useSearchParams();

    const [trailerId, setTrailerId] = useState('');
    const [urlType, setUrlType] = useState('');

    // this state handle ATMInputPagination
    const [totalPage, setTotalPage] = useState();
    const [page, setPage] = useState(1 || 1);
    const [isHover, setIsHover] = useState(false);
    const { searchValue } = useSelector((state) => state.searchValue);

    const [isShowMoreInfoForMobile, setIsShowMoreInfoForMobile] = useState(false);
    const [movieData, setMovieData] = useState({});
    const [topRolesOfCreation, setTopRolesOfCreation] = useState([])
    const [similarMoviesData, setSimilarMoviesData] = useState([]);
    const [trailerUrlKey, setTrailerUrlKey] = useState('');
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

            const getDirector = data?.credits?.crew?.find((ele) => ele?.job === 'Director')
            const getProducer = data?.credits?.crew?.find((ele) => ele?.job === 'Producer')
            const getScreenPlay = data?.credits?.crew?.find((ele) => ele?.job === 'Screenplay')
            const getSoundJob = data?.credits?.crew?.find((ele) => ele?.job === 'Music')

            // Set top roles three roles for movie or series
            setTopRolesOfCreation([getDirector, getProducer, getScreenPlay, getSoundJob])

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
            if (Array.isArray(filteredOfficialTrailers) && filteredOfficialTrailers?.length) {
                const randomObjTrailer = filteredOfficialTrailers[Math.floor(Math.random() * filteredOfficialTrailers?.length)];
                setTrailerUrlKey(randomObjTrailer?.key || '');
            } else {
                const randomObjTrailer = trailerData?.results[Math.floor(Math.random() * trailerData?.results?.length)];
                setTrailerUrlKey(randomObjTrailer?.key || '');
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

    // when component loaded first time it scroll on the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <React.Fragment>

            <Navbar bgColor='bg-black py-1' />

            <TrailerPlayModel
                show={isShowTrailerModal}
                url={trailerUrlKey || ''}
                autoplay={1}
                disableControls={1}
                onClose={() => {
                    setIsShowTrailerModal(false)
                }}
            />

            {
                !isLoading ?
                    <React.Fragment>
                        {searchValue?.length > 0 ? <SearchTemplate /> :
                            <>
                                {/* this is for lg and md */}
                                <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0)), url(${TMDB_URL}${movieData?.backdrop_path})`, }}
                                    className='h-screen bg-cover bg-no-repeat px-10 py-6 lg:block md:block sm:hidden ms:hidden'>
                                    <div className='grid grid-cols-12'>
                                        <div className='col-span-3'>
                                            <div className='relative'>
                                                <img
                                                    src={`${TMDB_URL}${movieData?.poster_path}`}
                                                    alt='pirates'
                                                    className='rounded'
                                                />
                                            </div>
                                        </div>

                                        <div className='col-span-9 px-6 2xxl:py-6 xl:py-8 lg:py-14 md:py-14 sm:py-14 ms:py-14'>
                                            <div>
                                                {/* movie title or name heading */}
                                                <div className='text-white font-bold inline 2xxl:text-[3.2rem] xl:text-[2.2rem] lg:text-[2.2rem] md:text-[2.0rem] sm:text-[1rem] ms:text-[0.8rem]'>
                                                    <h1 className='hover:text-white'>
                                                        {urlType === MediaType.MOVIE ? movieData?.original_title : movieData?.original_name}
                                                        <span className='tag-release-date opacity-80 px-2 font-normal'>
                                                            {urlType === MediaType.MOVIE ? movieData?.release_date ? <> {'(' + movieData?.release_date?.split('-')[0] + ')'}</> : null : null}
                                                        </span>
                                                    </h1>
                                                </div>

                                                {/* movie genres and running time */}
                                                <div className='mt-3'>
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
                                                        {movieData?.release_date && <BsDot className='inline' fill='#ffffff' />}
                                                        {" "}
                                                        {movieData?.runtime && getMovieRunTimeIntoHours(movieData?.runtime).hours + 'h'}
                                                        {movieData?.runtime && getMovieRunTimeIntoHours(movieData?.runtime).minutes + 'm'}
                                                    </span>
                                                </div>

                                                {/* trailer play button */}
                                                <div className='flex items-center py-6 trailer-play-btns'>
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

                                                {/* movie tag line */}
                                                <div>
                                                    <span className='text-white text-[1.1em] font-normal opacity-70 italic'>
                                                        {movieData?.tagline}
                                                    </span>
                                                </div>

                                                {/* movie overview */}
                                                <div className='mt-[10px] mb-[8px]'>
                                                    <h2 className='text-white text-[1.2em] font-semibold'>Overview</h2>
                                                    <div className='mt-2' dir='auto'>
                                                        <p className='text-white text-justify leading-6 text-[1em]'>
                                                            {movieData?.overview}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* movie crew */}
                                                <div className='directors-name mt-4 grid grid-cols-12 gap-y-4'>
                                                    {topRolesOfCreation?.map((ele, ind) => {
                                                        return ele !== undefined && (
                                                            <div className='col-span-4' key={ind}>
                                                                <h4 className='text=[1em] font-bold text-white'>
                                                                    <Link className='hover:text-slate-300' to={`/person/${ele?.id}/${ele?.original_name?.replaceAll(' ', '-')?.toLowerCase()}`}>
                                                                        {ele?.original_name}
                                                                    </Link>
                                                                </h4>
                                                                <span className='text-[0.9em] text-white text-left'>
                                                                    {ele?.job}
                                                                </span>
                                                            </div>

                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* this is for sm and ms */}
                                <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0)), url(${TMDB_URL}${movieData?.backdrop_path})`, }}
                                    className='sm:h-[90vh] ms:h-[90vh] bg-cover bg-no-repeat py-6 lg:hidden md:hidden sm:block ms:block'>

                                    <div className='grid grid-cols-12 px-8'>
                                        <div className='col-span-12'>
                                            <div className='h-full rounded relative'>
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
                                            <button
                                                className='flex justify-end items-center px-6 py-1 bg-[#6d6d6eb3] text-white rounded font-bold select-none'
                                                onClick={() => {
                                                    setIsShowMoreInfoForMobile(true)
                                                }}
                                            >
                                                <AiOutlineInfoCircle size={32} className='mr-1' />
                                                More Info
                                            </button>
                                        </div>
                                    </div>

                                    {/* Showing Information For Mobile Screen */}
                                    <div className={`border-white border-[1px] h-[80vh] rounded z-[1000000] bg-black opacity-100 information-drawer ${isShowMoreInfoForMobile ? 'open' : 'close'}`}>
                                        <div
                                            className='absolute right-[45%] -top-3'
                                            onClick={() => {
                                                setIsShowMoreInfoForMobile(!isShowMoreInfoForMobile)
                                            }}
                                        >
                                            <VscTriangleDown size={32} fill='#ffffff' />
                                        </div>
                                        <div className='p-4 '>
                                            <div>
                                                <div className='flex items-center'>
                                                    <span className='text-[1.3em] text-wrap mt-[0.80rem] font-semibold text-white'>
                                                        {urlType === MediaType.MOVIE ? movieData?.original_title : movieData?.original_name}
                                                    </span>

                                                    <span className='text-sm opacity-80 text-slate-100 pl-1 font-normal'>
                                                        {urlType === MediaType.MOVIE ? <>({movieData?.release_date?.split('-')[0]})</> : null}
                                                    </span>
                                                </div>

                                                {/* movie genres and running time */}
                                                <div className='mt-3'>
                                                    <span className='px-[0.4rem] py-[0.2rem] rounded-[3px] text-xs border-white border-[1px] opacity-80 text-white'>
                                                        UA
                                                    </span>
                                                    <span className='text-white px-2 text-xs align-middle'>
                                                        {urlType === MediaType.MovieCard
                                                            ? movieData?.release_date && getDateIntoDDMMYYY(movieData?.release_date)
                                                            : movieData?.first_air_date && getDateIntoDDMMYYY(movieData?.first_air_date)}
                                                        (IN) <BsDot className='inline' fill='#ffffff' />
                                                    </span>

                                                    <span className='text-white text-xs'>
                                                        {movieData?.genres?.map((ele) => ele.name).join(' , ')}
                                                        {movieData?.release_date && <BsDot className='inline' fill='#ffffff' />}
                                                        {" "}
                                                        {movieData?.runtime && getMovieRunTimeIntoHours(movieData?.runtime).hours + 'h'}
                                                        {movieData?.runtime && getMovieRunTimeIntoHours(movieData?.runtime).minutes + 'm'}
                                                    </span>
                                                </div>

                                                {/* movie tag line */}
                                                <p className='text-white mt-2 text-xs font-normal opacity-70 italic'>
                                                    {movieData?.tagline}
                                                </p>

                                                {/* movie overview */}
                                                <div className='text-white mt-4'>
                                                    <h2 className='text-sm font-semibold'>Overview</h2>
                                                    <span dir='auto' className='text-wrap text-justify leading-6 text-xs'>
                                                        {movieData?.overview}
                                                    </span>
                                                </div>

                                                {/* movie crew */}
                                                <div className='directors-name mt-4 grid grid-cols-12 gap-y-4'>
                                                    {topRolesOfCreation?.map((ele, ind) => {
                                                        return ele !== undefined && (
                                                            <div className='col-span-5' key={ind}>
                                                                <h4 className='text=[1em] font-bold text-white'>
                                                                    <Link className='hover:text-slate-300' to={`/person/${ele?.id}/${ele?.original_name?.replaceAll(' ', '-')?.toLowerCase()}`}>
                                                                        {ele?.original_name}
                                                                    </Link>
                                                                </h4>
                                                                <span className='text-[0.9em] text-white text-left'>
                                                                    {ele?.job}
                                                                </span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* movie cast slider */}
                                <div className='mt-10'>
                                    <CastSlider data={movieData?.credits?.cast} />
                                </div>

                                {/* movie crew slider */}
                                <div className='mt-10'>
                                    <CrewSlider data={movieData?.credits?.crew} />
                                </div>

                                {/* similar movies section */}
                                <div className='py-20'>
                                    <div className='flex items-center mb-2 lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2'>
                                        <h2 className='slider-section-title z-30 mb-1 text-card-title select-none hover:text-white inline-block 2xxl:text-[24px] xl:text-[22px] lg:text-[17px] md:text-[17px] sm:text-[17px] ms:text-[20px] font-medium'>
                                            Similar Movies
                                        </h2>
                                    </div>

                                    <div className='lg:pl-10 md:pl-10 sm:pl-6 ms:pl-6'>
                                        <div className='flex flex-wrap 2xxl:gap-8 xl:gap-8 lg:gap-4 md:gap-x-1 md:gap-y-6 sm:gap-10 ms:gap-x-4 ms:gap-y-8'>
                                            {similarMoviesData?.map((ele, ind) => {
                                                return (
                                                    <MovieCard
                                                        key={ind}
                                                        image={`${TMDB_URL}${ele?.poster_path || ''}`}
                                                        url={`/watch/${ele?.id}/?type=movie`}
                                                    />
                                                )
                                            })
                                            }
                                        </div>
                                    </div>

                                    {/* pagination */}
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

                            </>
                        }

                        <Footer footerColor='bg-[#141414] mt-24' />
                    </React.Fragment>
                    : <ATMLoader />
            }
        </React.Fragment>
    )
}

export default SingleWatchPage;
