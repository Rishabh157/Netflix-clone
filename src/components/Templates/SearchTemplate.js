import React, { useState, useEffect } from 'react';
import MovieCard from '../Atoms/MoviesCard';
import { TMDB_URL } from '../../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { useGetSearchMoviesMutation } from '../../redux/services/SearchService';
import ATMSearchLoader from '../Atoms/ATMSearchLoader';
import { setSearch } from '../../redux/slice/searchSlice';
import { useNavigate } from 'react-router-dom';

const SearchTemplate = () => {

    const [searchList, setSearchList] = useState([]);

    const { searchValue, isSearch } = useSelector((state) => state.searchValue);
    const page = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();


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


    console.log('searchList', searchList)

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
                                    className='lg:col-span-2 md:col-span-3 sm:col-span-4 ms:col-span-6'
                                    onClick={() => {
                                        navigate(`/watch/${item?.id}?type=${item?.media_type}`);
                                        dispatch(setSearch(''));
                                    }}
                                >
                                    <MovieCard
                                        image={`${TMDB_URL}${item?.poster_path}`}
                                        url={`/watch/${item?.id}?type=${item?.media_type}`}
                                    />
                                </div>
                            )
                        }) : <div className='col-span-12'>
                            <ATMSearchLoader />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTemplate;
