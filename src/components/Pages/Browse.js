import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import MovieCard from '../Atoms/MoviesCard';
import ScrollSlider from '../Atoms/ScrollSlider';


const Browse = () => {


    const [navColor, setnavColor] = useState(false);
    const [photos, setPhotos] = useState([]);

    const getDummyData = () => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => setPhotos(data))
            .catch(err => console.log(err));
    }

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


            <div className='mt-10'>
                <ScrollSlider
                    id={1}
                >
                    {photos?.slice(0, 20).map((photo, ind) => {
                        return (
                            <MovieCard
                                key={ind}
                                url={`/watch/${photo?.id}`}
                                image={photo?.thumbnailUrl}
                            />
                        )
                    })}
                </ScrollSlider>
            </div>

        </React.Fragment >
    )
}

export default Browse;
