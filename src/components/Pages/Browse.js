import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import BrowseSliders from '../Templates/BrowseSliders';
import SearchTemplate from '../Templates/SearchTemplate';
import { useGetRandomBannerQuery } from '../../redux/services/BannerService';
import Footer from '../Atoms/Footer';
import { useSelector } from 'react-redux';

const Browse = () => {

    const [banner, setBanner] = useState({});
    const [navColor, setnavColor] = useState(false);
    const { searchValue } = useSelector((state) => state.searchValue);
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

    return (
        <React.Fragment>

            <Navbar bgColor={navColor ? 'nav-bar-black' : 'nav-bar-tarnsparent'} />

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
