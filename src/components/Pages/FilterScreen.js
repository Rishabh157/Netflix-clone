import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_URL } from '../../constants/constants';
import Navbar from '../Atoms/Navbar';
import Footer from '../Atoms/Footer';
import MovieCard from '../Atoms/MoviesCard';
import ATMInputPagination from '../Atoms/ATMInputPagination';
import { useSelector } from 'react-redux';
import { useGetFilterByGanerasQuery, useGetDocumentriesAndActionsViaFilterScreenQuery } from '../../redux/services/FilterService';
import ATMLoader from '../Atoms/ATMLoader';
import SearchTemplate from '../Templates/SearchTemplate';


const FilterScreen = () => {

    const { filterName } = useParams();

    const [filteredData, setFilteredData] = useState([]);
    // this state handle ATMInputPagination
    const [totalPage, setTotalPage] = useState();
    const [page, setPage] = useState(1 || 1);
    const [isHover, setIsHover] = useState(false);
    const { searchValue } = useSelector((state) => state.searchValue);


    const { isLoading, isFetching, data } = useGetFilterByGanerasQuery({ filterName, page }, {
        skip: filterName !== 'discover' && filterName !== 'action' ? !filterName : filterName || !page
    });

    // for getting netflix originals 
    useEffect(() => {
        if (!isLoading && !isFetching) {
            setFilteredData(data?.results);
            setTotalPage(data?.total_pages)
        }
    }, [isLoading, isFetching, data]);



    // get documentries via filter name
    const {
        isLoading: isDocumentriesLoading,
        isFetching: isDocumentriesFetching,
        data: documentriesData
    } = useGetDocumentriesAndActionsViaFilterScreenQuery(
        { filterName: filterName === 'action' ? 'discover' : 'discover', genres: filterName === 'discover' ? 99 : 28, page },
        {
            skip: filterName === 'discover' || 'action' ? !filterName : filterName || !page
        });

    // // for getting documentries 
    useEffect(() => {
        if (!isDocumentriesLoading && !isDocumentriesFetching) {
            setFilteredData(documentriesData?.results);
            setTotalPage(documentriesData?.total_pages)
        }
    }, [isDocumentriesLoading, isDocumentriesFetching, documentriesData]);


    // when component loaded first time it scroll on the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [filterName]);

    return (
        <React.Fragment>


            <Navbar bgColor='bg-black py-1' />

            {!isLoading || !isDocumentriesLoading ?
                <React.Fragment>
                    {/* Filter movies section */}
                    {searchValue?.length > 0 ? <SearchTemplate /> :
                        <div className='py-8'>
                            <div className='flex items-center mb-2 lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2'>
                                <h2 className='capitalize slider-section-title z-30 mb-1 text-card-title select-none hover:text-white inline-block 2xxl:text-[24px] xl:text-[22px] lg:text-[17px] md:text-[17px] sm:text-[17px] ms:text-[20px] font-medium'>
                                    {filterName?.split('-')}
                                </h2>
                            </div>

                            <div className='lg:pl-10 md:pl-10 sm:pl-4 ms:pl-2'>
                                <div className='flex flex-wrap 2xxl:gap-8 xl:gap-8 lg:gap-4 md:gap-x-1 md:gap-y-6 sm:gap-10 ms:gap-x-4 ms:gap-y-8'>
                                    {filteredData?.map((ele, ind) => {
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
                    }
                    <Footer footerColor='bg-[#141414] mt-24' />
                </React.Fragment>
                : <ATMLoader />
            }
        </React.Fragment>
    )
}

export default FilterScreen;
