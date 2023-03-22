import React, { useState, useEffect } from 'react';
import Navbar from '../Atoms/Navbar';
import Banner from '../Atoms/Banner';


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
        <div>
            <Navbar bgColor={navColor ? 'nav-bar-black' : 'nav-bar-tarnsparent'} />
            <Banner />
        </div>
    )
}

export default Browse;
