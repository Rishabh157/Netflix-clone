import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';
import MovieCard from '../Atoms/MoviesCard';

const Browse = () => {

    const [navColor, setnavColor] = useState(false)

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

            <div className='mt-12 px-4 flex w-full flex-row justify-between'>

                <MovieCard
                    image={'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Images_%281972_poster%29.jpg/220px-Images_%281972_poster%29.jpg'}
                />
                
            </div>

        </React.Fragment>
    )
}

export default Browse;
