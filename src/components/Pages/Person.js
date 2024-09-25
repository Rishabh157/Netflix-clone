import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { TMDB_URL } from '../../constants/constants';
import Navbar from '../Atoms/Navbar';
import Footer from '../Atoms/Footer';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useGetPersonDetailsQuery } from '../../redux/services/PersonService';
import { VscTriangleDown } from 'react-icons/vsc';
import MovieCard from '../Atoms/MoviesCard';
import { useGetPersonKnownForMoviesListQuery } from '../../redux/services/PersonService';
import { useSelector } from 'react-redux';
import SearchTemplate from '../Templates/SearchTemplate';
import ATMLoader from '../Atoms/ATMLoader';

const Person = () => {

    const { id } = useParams();
    const location = useLocation();


    const [personInfo, setPersonInfo] = useState({})
    const [personSimilarMoviesList, setPersonSimilarMoviesList] = useState({});

    const [isTruncateText, setIsTruncateText] = useState(true);
    const [isShowMoreInfoForMobile, setIsShowMoreInfoForMobile] = useState(false);
    const { searchValue } = useSelector((state) => state.searchValue);

    // rtk query to get the details of actor
    const { isLoading, isFetching, data } = useGetPersonDetailsQuery(id);

    // rtk query to get the similar movies of actor
    const {
        isLoading: isSimilarMoviesLoading,
        isFetching: isSimilarMoviesFetching,
        data: similarMoviesData,
    } = useGetPersonKnownForMoviesListQuery(id);


    useEffect(() => {
        if (!isSimilarMoviesLoading && !isSimilarMoviesFetching) {
            setPersonSimilarMoviesList(similarMoviesData)
        }
    }, [
        isSimilarMoviesLoading,
        isSimilarMoviesFetching,
        similarMoviesData
    ])

    // to get the gander of actor
    const getGender = (nums) => {
        switch (nums) {
            case 1:
                return 'FEMALE'
            case 2:
                return 'MALE'
            default:
                return 'MALE'
        }
    }

    useEffect(() => {
        if (!isLoading && !isFetching) {
            setPersonInfo(data)
        };
    }, [isLoading, isFetching, data]);

    // when component loaded first time it scroll on the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>

            <Navbar bgColor='bg-black py-1' />
            {
                !isLoading ?
                    <React.Fragment>
                        {searchValue?.length > 0 ? <SearchTemplate /> :
                            <>
                                <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0))`, }}
                                    className='h-auto bg-no-repeat py-10'>

                                    {/* this is for lg and md */}
                                    <div className='lg:block md:block sm:hidden ms:hidden'>
                                        <div className='grid grid-cols-12 px-10'>
                                            <div className='col-span-3'>
                                                <div className='relative'>
                                                    <img
                                                        src={`${TMDB_URL}${personInfo?.profile_path}`}
                                                        alt='pirates'
                                                        className='rounded'
                                                    />
                                                </div>
                                            </div>

                                            <div className='col-span-9 px-3'>
                                                <div className='h-full w-full'>
                                                    <h1 className='text-white font-bold inline lg:text-[2.8rem] md:text-[2.4rem] sm:text-[1rem] ms:text-[0.8rem]'>
                                                        <a className='hover:text-white '
                                                            href={`${location?.pathname}`}>
                                                            {personInfo?.name}
                                                        </a>
                                                    </h1>
                                                    <div className='h-[70px] flex items-center'>
                                                        <div className='flex items-center transition-all'>
                                                            <span className='text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                Biography
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className='text-white text-justify text-[1em] font-normal opacity-90'>
                                                            {personInfo?.biography?.slice(0, isTruncateText ? 700 : personInfo?.biography?.length)}
                                                            {" "}
                                                            <span
                                                                onClick={() => setIsTruncateText(!isTruncateText)}
                                                                className='text-red-400 text-[1.1em] cursor-pointer'
                                                            >
                                                                {isTruncateText ? <>show more...</> : <>show less...</>}
                                                            </span>
                                                        </p>
                                                    </div>

                                                    {/* DEPARTMENT */}
                                                    <div className='flex items-center my-4'>
                                                        <div className='flex items-center transition-all'>
                                                            <span className='text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                Personal Information
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-x-4'>
                                                        <div className='w-[20%] bg-[#141414] border-[1px] rounded  border-white'>
                                                            <div className='rounded p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Known For</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{personInfo?.known_for_department}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-[20%] bg-[#141414] border-[1px] rounded  border-white'>
                                                            <div className='rounded p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Gender</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{getGender(personInfo?.gender)}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-[20%] bg-[#141414] border-[1px] rounded  border-white'>
                                                            <div className='rounded p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Place of Birth</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{personInfo?.place_of_birth}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-[20%] bg-[#141414] border-[1px] rounded  border-white'>
                                                            <div className='rounded p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Birthday</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{personInfo?.birthday}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='w-[20%] bg-[#141414] border-[1px] rounded  border-white'>
                                                            <div className='rounded p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Age</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span> (
                                                                        {/* {getCurrentAge(personInfo?.birthday)}  */}
                                                                        58 years old )</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    {/* this is for Sm and MS */}
                                    <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0))`, }}
                                        className='h-[86vh] bg-cover bg-no-repeat py-4 lg:hidden md:hidden sm:block ms:block'>
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-12 px-6'>
                                                <div className='w-full relative'>
                                                    <img
                                                        src={`${TMDB_URL}${personInfo?.profile_path}`}
                                                        alt='pirates'
                                                        className='rounded'
                                                        width='100%'
                                                    />
                                                </div>
                                            </div>

                                            <div className={`col-span-12 border-white border-[1px] rounded z-[1000000] bg-black w-full opacity-100 information-drawer ${isShowMoreInfoForMobile ? 'open' : 'close'}`}>
                                                <div
                                                    onClick={() => {
                                                        setIsShowMoreInfoForMobile(!isShowMoreInfoForMobile)
                                                    }}
                                                    className='absolute right-[45%] -top-3'>
                                                    <VscTriangleDown size={32} fill='#ffffff' />
                                                </div>
                                                <div className='p-4 '>
                                                    <div>
                                                        <h1 className='text-white inline text-[3rem] font-bold'>
                                                            <a className='hover:text-white'
                                                                href='/person/6384-keanu-reeves'>
                                                                {personInfo?.name}
                                                            </a>
                                                        </h1>
                                                    </div>

                                                    <div>
                                                        <div className='flex items-center transition-all'>
                                                            <span className='text-[1.2em] mt-[0.80rem] font-semibold text-white'>
                                                                Biography
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className='text-white text-justify text-[1em] font-normal opacity-90'>
                                                            {personInfo?.biography?.slice(0, isTruncateText ? 350 : personInfo?.biography?.length)}
                                                            {" "}
                                                            <span
                                                                onClick={() => setIsTruncateText(!isTruncateText)}
                                                                className='text-red-400 text-[1.1em]'
                                                            >
                                                                {isTruncateText ? <>more...</> : <>less...</>}
                                                            </span>
                                                        </p>
                                                    </div>

                                                    {/* DEPARTMENT */}
                                                    <div className='flex items-center my-4'>
                                                        <div className='flex items-center transition-all'>
                                                            <span className='text-[1.2em] mt-[0.30rem] font-semibold text-white'>
                                                                Personal Information
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='grid grid-cols-12 gap-4'>
                                                        <div className='col-span-6 bg-[#141414]'>
                                                            <div className='rounded border-[1px] border-white p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Known For</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{personInfo?.known_for_department}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-span-6 bg-[#141414]'>
                                                            <div className='rounded border-[1px] border-white p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Gender</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{getGender(personInfo?.gender)}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-span-6 bg-[#141414]'>
                                                            <div className='rounded border-[1px] border-white p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Place of Birth</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{personInfo?.place_of_birth}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-span-6 bg-[#141414]'>
                                                            <div className='rounded border-[1px] border-white p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Birthday</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>{personInfo?.birthday}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-span-6 bg-[#141414]'>
                                                            <div className='rounded border-[1px] border-white p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Age</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span> (
                                                                        {/* {getCurrentAge(personInfo?.birthday)}  */}
                                                                        58 years old )</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {personInfo?.deathday && <div className='col-span-6 bg-[#141414]'>
                                                            <div className='rounded border-[1px] border-white p-2'>
                                                                <div className='text-center text-[1em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span>Death</span>
                                                                </div>
                                                                <div className='text-center text-[0.9em] mt-[0.20rem] font-semibold ml-[5px] text-white'>
                                                                    <span> {personInfo?.deathday} </span>
                                                                </div>
                                                            </div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-span-12 mt-10 flex justify-center'>
                                                <button className='flex justify-end items-center px-6 bg-[#6d6d6eb3] text-white text-[17px] py-2 rounded font-bold select-none'
                                                    onClick={() => {
                                                        setIsShowMoreInfoForMobile(true)
                                                    }}
                                                >
                                                    <AiOutlineInfoCircle size={32} className='mr-3' />
                                                    More Information
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* similar movies section */}
                                    <div className='py-20 px-2'>
                                        <div className='flex items-center mb-2 lg:pl-0 md:pl-0 sm:pl-4 ms:pl-2'>
                                            <h2 className='slider-section-title z-30 mb-1 text-card-title select-none hover:text-white inline-block 2xxl:text-[24px] xl:text-[22px] lg:text-[17px] md:text-[17px] sm:text-[17px] ms:text-[20px] font-medium'>
                                                Similar Movies
                                            </h2>
                                        </div>
                                        <div className='lg:pl-0 md:pl-0 sm:pl-4 ms:pl-2'>
                                            <div className='grid gap-4 2xxl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 ms:grid-cols-2'>
                                                {personSimilarMoviesList?.cast?.map((ele) => {
                                                    return (
                                                        <MovieCard
                                                            key={ele?.id}
                                                            image={`${TMDB_URL}${ele?.poster_path || ''}`}
                                                            url={`/watch/${ele?.id}?type=movie`}
                                                        />
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                        <Footer footerColor='bg-[#141414] mt-24' />
                    </React.Fragment> : <ATMLoader />
            }
        </React.Fragment >
    )
}

export default Person;
