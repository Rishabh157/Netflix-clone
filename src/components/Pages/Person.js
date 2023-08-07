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

const Person = () => {


    const backdrop_path = `https://image.tmdb.org/t/p/original//fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg`

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
    const [trailerUrlKey, setTrailerUrlKey] = useState('');
    const [isShowTrailerModal, setIsShowTrailerModal] = useState(false);
    // const { isLoading, isFetching, data } = useGetSingleMovieInfoQuery({ id, type: urlType });

    const {
        isLoading: isSimilarLoading,
        isFetching: isSimilarFetching,
        data: similarData
    } = useGetSimilarShowsOrMoviesQuery({ id: '6384', type: 'MOVIE', page: 1 });

    useEffect(() => {
        if (!isSimilarLoading && !isSimilarFetching) {
            console.log(similarData)
            // setSimilarMoviesData(similarData?.results)
            // setTotalPage(similarData?.total_pages)
        }
    }, [isSimilarLoading, isSimilarFetching, similarData, page])

    // useEffect(() => {
    //     if (!isLoading && !isFetching) {
    //         setMovieData(data);
    //     };
    // }, [isLoading, isFetching, data]);

    // useEffect(() => {
    //     if (searchParams.get('type')) {
    //         setUrlType(searchParams.get('type'));
    //     } else {
    //         setUrlType(searchParams.get('id'));
    //     };
    // }, [searchParams]);

    return (
        <React.Fragment>

            <Navbar bgColor='bg-black py-1' />

            {/* this is for Lg and Md */}
            <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0)), url(${TMDB_URL}${movieData?.backdrop_path})`, }}
                className='h-[600px] bg-cover bg-no-repeat px-10 py-6 lg:block md:block sm:hidden ms:hidden'>

                <div className='grid grid-cols-12'>
                    <div className='col-span-3'>
                        <div className='h-[500px] relative '>
                            <img
                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rRdru6REr9i3WIHv2mntpcgxnoY.jpg`}
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
                                    Keanu Reeves
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
                                    Keanu Charles Reeves is a Canadian actor. Reeves is known for his
                                    roles in Bill & Ted's Excellent Adventure, Speed, Point Break, and
                                    The Matrix franchise as Neo. He has collaborated with major directors
                                    such as Stephen Frears (in the 1988 period drama Dangerous Liaisons);
                                    Gus Van Sant (in the 1991 independent film My Own Private Idaho); and
                                    Bernardo Bertolucci (in the 1993 film Little Buddha). Referring to his
                                    1991 film releases, The New York Times' critic, Janet Maslin, praised
                                    Reeves' versatility, saying that he "displays considerable discipline
                                    and range. He moves easily between the buttoned-down demeanor that suits
                                    a police procedural story and the loose-jointed manner of his comic roles."
                                    A repeated theme in roles he has portrayed is that of saving the world,
                                    including the characters of Ted Logan, Buddha, Neo, Johnny Mnemonic, John
                                    Constantine and Klaatu.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            {/* this is for Sm and MS */}
            <div style={{ backgroundImage: `linear-gradient(300deg, rgb(0 0 0 / 32%), rgb(0 0 0)), url('')`, }}
                className='h-[86vh] bg-cover bg-no-repeat px-2 py-4 lg:hidden md:hidden sm:block ms:block'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 px-6'>
                        <div className='w-full relative'>
                            <img
                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rRdru6REr9i3WIHv2mntpcgxnoY.jpg`}
                                alt='pirates'
                                className='rounded'
                                width='100%'
                            />
                        </div>
                    </div>

                    <div className='col-span-12 mt-10 flex justify-center'>
                        <button className={`flex justify-end items-center px-6 py-1 bg-[#6d6d6eb3] text-white rounded font-bold select-none`}
                            onClick={() => {
                                alert('HELLO John Wick')
                            }}
                        >
                            <AiOutlineInfoCircle size={32} className='mr-1' />
                            More Info
                        </button>
                    </div>
                </div>
            </div>



            {/* Similar movies section */}
            <div className='py-20'>
                {/* <div className='lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2 mb-2 flex items-center'>
                    <h3 className='text-white text-[1.3em] font-semibold'>Known For</h3>
                </div> */}
                {/* <div className='lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2'>
                    <div className='grid grid-cols-12 gap-2'>
                        {Array(20)?.fill(20)?.map((ele, ind) => {
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
                </div> */}
                {/* <div className='mt-10'>
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
                </div> */}
            </div>
            <Footer />
        </React.Fragment>
    )

}

export default Person;
