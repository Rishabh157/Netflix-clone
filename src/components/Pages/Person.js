import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { TMDB_URL } from '../../constants/constants';
import Navbar from '../Atoms/Navbar';
import Footer from '../Atoms/Footer';
// import { getDateIntoDDMMYYY } from '../../common/date';
// import TrailerPlayModel from '../Atoms/TrailerPlayModel';
// import { MediaType } from '../../constants/enum';
// import CastSlider from '../Templates/CastSlider';
// import MovieCard from '../Atoms/MoviesCard';
// import ATMInputPagination from '../Atoms/ATMInputPagination';
// import { BsFillPlayFill, BsDot, BsPauseFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useGetPersonDetailsQuery } from '../../redux/services/PersonService';
import { VscTriangleDown } from 'react-icons/vsc';

const Person = () => {


    const { id , name} = useParams();

    // console.log('castID =>', id , name)

    const [searchParams] = useSearchParams();
    const [personId, setPersonId] = useState('6384');
    const [personInfo, setPersonInfo] = useState({})

    const [isTruncateText, setIsTruncateText] = useState(true);
    const [isShowMoreInfoForMobile, setIsShowMoreInfoForMobile] = useState(false);

    // const [urlType, setUrlType] = useState('');

    // this state handle ATMInputPagination
    // const [totalPage, setTotalPage] = useState();
    // const [page, setPage] = useState(1 || 1);
    // const [isHover, setIsHover] = useState(false);


    // const [movieData, setMovieData] = useState({});

    // const [similarMoviesData, setSimilarMoviesData] = useState([]);
    // const [trailerUrlKey, setTrailerUrlKey] = useState('');
    // const [isShowTrailerModal, setIsShowTrailerModal] = useState(false);

    const { isLoading, isFetching, data } = useGetPersonDetailsQuery(personId);

    // const {
    //     isLoading: isSimilarLoading,
    //     isFetching: isSimilarFetching,
    //     data: similarData
    // } = useGetSimilarShowsOrMoviesQuery({ id: '6384', type: 'MOVIE', page: 1 });

    // useEffect(() => {
    //     if (!isSimilarLoading && !isSimilarFetching) {
    //         console.log(similarData)
    //         // setSimilarMoviesData(similarData?.results)
    //         // setTotalPage(similarData?.total_pages)
    //     }
    // }, [isSimilarLoading, isSimilarFetching, similarData, page])

    // const getCurrentAge = (strDate) => {
    //     const [year] = strDate?.split('-')
    //     const currentYear = new Date()
    //     return String(currentYear?.getFullYear() - parseInt(year))
    // }

    // console.log(getCurrentAge('1980-04-03'))

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
            // console.log('person data ', data)
        };
    }, [isLoading, isFetching, data]);

    return (
        <React.Fragment>

            <Navbar bgColor='bg-black py-1' />

            {/* this is for Lg and Md */}
            <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0))`, }}
                className='h-[600px] bg-cover bg-no-repeat px-10 py-6 lg:block md:block sm:hidden ms:hidden'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-3'>
                        <div className='h-[500px] relative '>
                            <img
                                src={`${TMDB_URL}${personInfo?.profile_path}`}
                                alt='pirates'
                                className=' rounded absolute top-0'
                            />
                        </div>
                    </div>

                    <div className='col-span-9 px-3'>
                        <div className='h-full w-full '>
                            <h1 className='text-white font-bold inline lg:text-[2.8rem] md:text-[2.4rem] sm:text-[1rem] ms:text-[0.8rem]'>
                                <a className='hover:text-white '
                                    href='/person/6384-keanu-reeves'>
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
                                    {personInfo?.biography}
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

                    <div className={`col-span-12 border-white border-[1px] rounded z-[1000000] bg-black w-full opacity-90 information-drawer ${isShowMoreInfoForMobile ? 'open' : 'close'}`}>
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

            <div className='py-20'>
            </div>

            <Footer />
        </React.Fragment >
    )

}

export default Person;
