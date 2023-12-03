import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import SearchTemplate from '../Templates/SearchTemplate';
import { useGetRandomBannerQuery } from '../../redux/services/BannerService';
import Footer from '../Atoms/Footer';
import { useSelector } from 'react-redux';
import BrowseSliders from '../Templates/BrowseSliders';
import ATMLoader from '../Atoms/ATMLoader';


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


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <React.Fragment>
            {
                !isLoading ? <>
                    <Navbar
                        bgColor={navColor ? 'nav-bar-black' : 'nav-bar-tarnsparent'}
                    />
                    {searchValue?.length > 0 ? <SearchTemplate /> : <>
                        <Banner
                            bannerId={banner?.id}
                            bannerImg={banner?.backdrop_path}
                            title={banner?.name}
                            overview={banner?.overview}
                        />
                        <BrowseSliders />
                    </>
                    }
                    <Footer footerColor='bg-[#141414] mt-24' />
                </> : <ATMLoader />
            }
        </React.Fragment>
    )
}

export default Browse;
