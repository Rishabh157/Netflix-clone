import React from 'react';
import Header from '../Atoms/Header';
import MainIndex from '../Templates/MainIndex';
import SignUpRegistration from '../Templates/SignUpRegistration';
import SignupRegform from '../Templates/SignupRegform';
import SignUp from '../Templates/SignUp';
import PaymentPicker from '../Templates/PaymentPicker';
import Creditoption from '../Templates/Creditoption';
import Planform from '../Templates/Planform';
import Footer from '../Atoms/Footer';
import { useLocation } from 'react-router-dom';

const HomeRegister = () => {

    let { pathname } = useLocation();

    return (
        <div>
            <Header />
            {pathname === '/' ? <MainIndex /> : null}
            {pathname === '/signup/registration' ? <SignUpRegistration /> : null}
            {pathname === '/signup/regform' ? <SignupRegform /> : null}
            {pathname === '/signup' ? <SignUp /> : null}
            {pathname === '/signup/paymentPicker' ? <PaymentPicker /> : null}
            {pathname === '/signup/creditoption' ? <Creditoption /> : null}
            {pathname === '/signup/planform' ? <Planform /> : null}
            <Footer footerColor={pathname === '/' || pathname === '/login' ? 'bg-black' : 'bg-white'} />
        </div>
    )
}

export default HomeRegister;
