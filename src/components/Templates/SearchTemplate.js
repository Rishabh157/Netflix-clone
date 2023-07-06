import React, { useState, useEffect } from 'react';
import MovieCard from '../Atoms/MoviesCard';
import { TMDB_URL } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { useGetSearchMoviesMutation } from '../../redux/services/SearchService';

const SearchTemplate = () => {

    const [searchList, setSearchList] = useState([]);

    const page = useState(1);
    const { searchValue, isSearch } = useSelector((state) => state.searchValue);


    const [searchApi] = useGetSearchMoviesMutation();

    const handleSearch = () => {
        searchApi({ page, searchValue }).then((results) => {
            if (results?.data?.results?.length) {
                setSearchList(results?.data?.results);
            }
        }).catch(() =>
            console.error('search error occured')
        );
    }

    useEffect(() => {
        if (isSearch) {
            handleSearch()
        }
        // eslint-disable-next-line
    }, [isSearch])

    return (
        <div className={`py-20 lg:px-16 md:px-14 sm:px-5 ms:px-4`}>

            <div className='bg-[#141414]'>

                <div className=''>
                    <p className='text-gray'>
                        Explore titles to : <span className='text-white ml-2'>
                            {searchValue}
                        </span>
                    </p>
                </div>


                <div className='mt-4'>
                    <div className='grid grid-cols-12 lg:gap-10 md:gap-8 sm:gap-4 ms:gap-4'>
                        {searchList?.length ? searchList?.map((item, ind) => {
                            return (
                                <div
                                    key={ind}
                                    className='lg:col-span-2 md:col-span-3 sm:col-span-4 ms:col-span-6'>
                                    <MovieCard
                                        image={`${TMDB_URL}${item?.poster_path}`}
                                        url={`/watch/${item?.id}?type=${item?.media_type}`}
                                    />
                                </div>
                            )
                        }) : <span className='text-white text-[32px]'> Loading ........</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTemplate;
