import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import BrowseSliders from '../Templates/BrowseSliders';
import SearchTemplate from '../Templates/SearchTemplate';
import { useGetRandomBannerQuery } from '../../redux/services/BannerService';
import Footer from '../Atoms/Footer';
import { useGetSearchMoviesMutation } from '../../redux/services/SearchService';


const Browse = () => {

    const [banner, setBanner] = useState({});
    const [navColor, setnavColor] = useState(false);

    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);

    const { isLoading, isFetching, data } = useGetRandomBannerQuery('');


    // for getting reandom banner through api
    useEffect(() => {
        if (!isLoading && !isFetching) {
            const randomBanner = data?.results[Math.floor(Math.random() * data?.results?.length)];
            setBanner(randomBanner);
        }
    }, [isLoading, isFetching, data]);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setnavColor(true)
            } else {
                setnavColor(false)
            }
        });

    }, []);



    const [api] = useGetSearchMoviesMutation();
    // const { isLoading, isFetching, data } = useGetSearchMoviesQuery({ page, searchValue });


    const handleChangeSearchValue = (value) => {
        console.log(value);
        // api({ page, searchValue }).then((response) => {
        //     console.log(response)
        //     console.log('api is Calling please wait bhosdi walo ....');
        // }).catch((err) => {
        //     console.log(err);
        // })
    }


    const debounce = (func, delay) => {

        let timer;

        return function () {
            let context = this;
            let args = arguments;
            clearTimeout(timer);

            timer = setTimeout(() => {
                func.apply(context, arguments);
            }, delay);
        }

    }

    const debouncingFunHandleChangeSearchValue = debounce(handleChangeSearchValue, 2000);

    
    return (
        <React.Fragment>

            <Navbar
                searchValue={searchValue}
                handleSearch={(value) => {
                    setSearchValue(value);
                    debouncingFunHandleChangeSearchValue(value);
                }}
                bgColor={navColor ? 'nav-bar-black' : 'nav-bar-tarnsparent'}
            />

            {searchValue?.length > 0 ? <SearchTemplate /> : <>
                <Banner
                    bannerImg={banner?.backdrop_path}
                    title={banner?.original_name}
                    overview={banner?.overview}
                />
                <BrowseSliders />
            </>
            }
            {/* <SearchTemplate /> */}
            <Footer footerColor='bg-[#141414] mt-24' />

        </React.Fragment>
    )
}

export default Browse;
