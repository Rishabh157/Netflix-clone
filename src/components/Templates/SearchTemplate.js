import React from 'react';
import MovieCard from '../Atoms/MoviesCard';
import { TMDB_URL } from '../../constants/constants';


const SearchTemplate = () => {

    // const [searchList, setSearchList] = useState([]);
    // const [page, setPage] = useState(1);
    // const { searchValue } = useSelector((state) => state.searchValue);

    return (
        <div className={`py-20 lg:px-16 md:px-14 sm:px-5 ms:px-4`}>


            <div className='bg-[#141414]'>

                <div className=''>
                    <p className='text-gray'>
                        Explore titles to : <span className='text-white ml-2'>
                            {/* {searchValue} */}
                            </span>
                    </p>
                </div>


                <div className='mt-4'>

                    <div className='grid grid-cols-12 lg:gap-10 md:gap-8 sm:gap-4 ms:gap-4'>

                        {/* {searchList?.length ? searchList?.map((item, ind) => {
                            return (
                                <div
                                    key={ind}
                                    className='lg:col-span-2 md:col-span-3 sm:col-span-4 ms:col-span-6'>
                                    <MovieCard
                                        image={`${TMDB_URL}${item?.poster_path}`}
                                    // url={`/watch/${photo?.id}`}
                                    // image={`${TMDB_URL}${photo.poster_path}`}
                                    />
                                </div>
                            )
                        }) : <span className='text-white text-[32px]'> Loading ........</span>} */}

                    </div>

                </div>


            </div>

        </div>
    )
}

export default SearchTemplate;
