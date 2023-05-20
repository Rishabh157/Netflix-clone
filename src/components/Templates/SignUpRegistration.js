import React, { useEffect } from 'react';
import devicesImg from '../../images/divices.png';
import Steps from '../Atoms/Steps';
import Button from '../Atoms/Button';
import { useNavigate } from 'react-router-dom';
import { emailRegExp } from '../../constants/regularExpressions';


const SignUpRegistration = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem('email') ? localStorage.getItem('email') : '';
        const isValidEmail = emailRegExp.test(email);
        if (!isValidEmail) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className='grid justify-items-center bg-white py-28'>
            <div
                style={{
                    backgroundImage: `url(${devicesImg})`,
                    backgroundSize: '260px',
                    height: '90px',
                    width: '260px',
                    backgroundRepeat: 'no-repeat'
                }}
            >
            </div>
            <div className='mt-4 text-center'>
                <Steps
                    firstStep={1}
                    secondSteps={3}
                />
                <h1 className='text-[32px] font-medium text-text'>
                    Finish setting up your <br /> account
                </h1>
                <p className='text-[18px] text-text tracking-normal'>
                    Netflix is personalised for you. <br /> Create a password to watch on any <br /> device at any time.
                </p>
                <div className='mt-4'>
                    <Button
                        text='Next'
                        className='w-full text-[24px] py-[16.5px] px-[2em] font-normal '
                        onClick={() => navigate('/signup/regform')}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignUpRegistration;
