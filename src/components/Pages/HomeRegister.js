import React from 'react';
import Header from '../Atoms/Header';
import MainIndex from '../Templates/MainIndex';
import SignUpRegistration from '../Templates/SignUpRegistration';
import Footer from '../Atoms/Footer';
import { useLocation } from 'react-router-dom';

const HomeRegister = () => {

    let location = useLocation();
    // console.log(location)

    return (
        <div>
            <Header />
            {location?.pathname === '/' ? <MainIndex /> : null }
            {location?.pathname === '/signup/registration' ? <SignUpRegistration /> : null}
            {/* <MainIndex /> */}
            {/* <SignUpRegistration /> */}
            <Footer />
        </div>
    )
}

export default HomeRegister;
