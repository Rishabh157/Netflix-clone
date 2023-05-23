import React, { useState, useEffect } from 'react';
import MovieCard from '../Atoms/MoviesCard';
import { useSelector } from 'react-redux';
import { TMDB_URL } from '../../constants/constants';
import { useGetSearchMoviesQuery } from '../../redux/services/SearchService';

const SearchTemplate = () => {

    const [searchList, setSearchList] = useState([]);
    const [page, setPage] = useState(1);
    const { searchValue } = useSelector((state) => state.searchValue);

    const { isLoading, isFetching, data } = useGetSearchMoviesQuery({ page, searchValue });

    useEffect(() => {

        if (!isLoading && !isFetching) {
            setSearchList(data?.results);
        };

    }, [isLoading, isFetching, data, searchValue]);

    return (
        <div className={`py-20 px-16`}>


            <div className='bg-[#141414]'>

                <div className=''>
                    <p className='text-gray'>
                        Explore titles to : <span className='text-white ml-2'>{searchValue}</span>
                    </p>
                </div>


                <div className='mt-4'>

                    <div className='grid grid-cols-12 gap-10'>

                        {searchList?.map((item, ind) => {
                            return (
                                <div
                                    key={ind}
                                    className='lg:col-span-2 md:col-span-3 sm:col-span-4 ms:col-span-6'>
                                    <MovieCard
                                        key={ind}
                                        image={`${TMDB_URL}${item?.poster_path}`}
                                    // url={`/watch/${photo?.id}`}
                                    // image={`${TMDB_URL}${photo.poster_path}`}
                                    />
                                </div>
                            )
                        })}

                    </div>

                </div>


            </div>

        </div>
    )
}

export default SearchTemplate;
