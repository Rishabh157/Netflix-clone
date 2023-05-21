import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import BrowseSliders from '../Templates/BrowseSliders';
import { useGetRandomBannerQuery } from '../../redux/services/BannerService';

const Browse = () => {

    const [banner, setBanner] = useState({});
    const [navColor, setnavColor] = useState(false);
    const { isLoading, isFetching, data } = useGetRandomBannerQuery('');


    // for getting reandom banner through api
    useEffect(() => {

        if (!isLoading && !isFetching) {
            const randomBanner = data?.results[Math.floor(Math.random() * data?.results?.length)];
            setBanner(randomBanner);
            // console.log(randomBanner);
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

            <Banner
                bannerImg={banner?.backdrop_path}
                title={banner?.original_name}
                overview={banner?.overview}
            />

            <BrowseSliders />

        </React.Fragment >
    )
}

export default Browse;
