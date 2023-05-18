import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import MovieCard from '../Atoms/MoviesCard';
import ScrollSlider from '../Atoms/ScrollSlider';
import { API_KEY, TMDB_URL } from '../../constants/constants';
import SliderSection from '../Molecules/SliderSection';


const Browse = () => {


    const [navColor, setnavColor] = useState(false);




    // const [NotificationPanelData, setnotifiData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    //         .then((res) => res.json())
    //         .then(data => {
    //             setnotifiData(data.results)
    //             // console.log(data?.results)
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setnavColor(true)
            } else {
                setnavColor(false)
            }
        })

    }, [])

    return (
        <React.Fragment>
            <Navbar bgColor={navColor ? 'nav-bar-black' : 'nav-bar-tarnsparent'} />
            <Banner />

            <SliderSection
                title='Trending'
                isExploreAllEnable={true}
            />

        </React.Fragment >
    )
}

export default Browse;
