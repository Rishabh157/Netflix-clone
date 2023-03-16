import React, { useEffect } from 'react';
import TopNav from '../Atoms/TopNav';
import AccountPage from '../Molecules/AccountPage';
import Footer from '../Atoms/Footer';

const YourAccount = () => {

    useEffect(() => {
        document.title = 'Account Settings - Netflix'
    },)

    return (
        <>
            <TopNav bgColor='bg-black' />
            <AccountPage />
            <Footer />
        </>
    )
}

export default YourAccount;
