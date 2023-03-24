import React from 'react';
import Header from '../Atoms/Header';
import MainIndex from '../Templates/MainIndex';
import SignUpRegistration from '../Templates/SignUpRegistration';
import SignupRegform from '../Templates/SignupRegform';
import SignUp from '../Templates/SignUp';
import Footer from '../Atoms/Footer';
import { useLocation } from 'react-router-dom';

const HomeRegister = () => {

    let location = useLocation();

    return (
        <div>
            <Header />
            {location?.pathname === '/' ? <MainIndex /> : null}
            {location?.pathname === '/signup/registration' ? <SignUpRegistration /> : null}
            {location?.pathname === '/signup/regform' ? <SignupRegform /> : null}
            {location?.pathname === '/signup' ? <SignUp /> : null}

            <Footer footerColor={location?.pathname === '/signup/registration' ? 'bg-footer' : null} />
        </div>
    )
}

export default HomeRegister;
