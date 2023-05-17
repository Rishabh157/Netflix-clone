import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import MovieCard from '../Atoms/MoviesCard';
import ScrollSlider from '../Atoms/ScrollSlider';
import { API_KEY , TMDB_URL } from '../../constants/constants';


const Browse = () => {


    const [navColor, setnavColor] = useState(false);
    const [photos, setPhotos] = useState([]);

    const getDummyData = () => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => setPhotos(data))
            .catch(err => console.log(err));
    }



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

        getDummyData()
    }, [])

    return (
        <React.Fragment>
            <Navbar bgColor={navColor ? 'nav-bar-black' : 'nav-bar-tarnsparent'} />
            <Banner />


            {/* <div className='my-72'>
                <ScrollSlider
                    id={1}
                >
                    {NotificationPanelData?.map((photo, ind) => {
                        return (
                            <MovieCard
                                key={ind}
                                // url={`/watch/${photo?.id}`}
                                image={`${TMDB_URL}${photo.poster_path}`}
                            />
                        )
                    })}
                </ScrollSlider>
            </div> */}


        </React.Fragment >
    )
}

export default Browse;
