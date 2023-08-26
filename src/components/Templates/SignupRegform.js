import React, { useState, useEffect } from 'react';
import Steps from '../Atoms/Steps';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import { useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from 'react-icons/bi';
import { emailRegExp } from '../../constants/regularExpressions';

const SignupRegform = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isShowPass, setIsShowPass] = useState(false);


    const handleChangeEmail = (value) => {
        setEmail(value);
        const isValidEmail = emailRegExp.test(value);
        setIsValid(isValidEmail);
    };

    const handleChangePassword = (value) => {
        setPassword(value);
        const isValidPass = value?.length >= 5 ? true : false;
        setIsValidPassword(isValidPass);
    };

    const handleSubmit = (email, password) => {

        console.log(isValid)
        if (isValid) {
            if (isValidPassword) {
                navigate('/signup')
            } else {
                alert('something went wrong with password field')
            }
        } else {
            alert('something went wrong with email field')
        }

    };


    useEffect(() => {

        const email = localStorage.getItem('email') ? localStorage.getItem('email') : '';
        const isValidEmail = emailRegExp.test(email);

        if (isValidEmail) {
            setEmail(email);
            setIsValid(isValidEmail);
        } else {
            navigate('/', { replace: true });
        }

    }, [navigate]);

    return (
        <div className='grid justify-items-center bg-white pt-10 pb-44'>
            <div>
                <Steps
                    firstStep={1}
                    secondSteps={3}
                />
                <h1 className='text-[32px] text-text font-bold'>
                    Create a password to start <br /> your membership
                </h1>
                <div className='mt-2'>
                    <p className='text-[18px] text-text'>Just a few more steps and you're done! <br />
                        We hate paperwork, too.</p>
                </div>
                <div className='mt-2'>
                    <Input
                        label='Email'
                        value={email}
                        isError={email?.length > 5 ? !emailRegExp.test(email) : false}
                        isSuccess={email?.length > 5 ? emailRegExp.test(email) : false}
                        className={`text-[16px] text-black rounded-[2px] ${email?.length < 5 ? 'border-[1px] border-black focus:border-black' : ''}`}
                        labelClassName='text-black font-bold'
                        onChange={(e) => handleChangeEmail(e.target.value)}
                    />
                </div>
                <div className='mt-2 relative'>
                    <Input
                        autoFocus={true}
                        label='Add a password'
                        className={`text-[16px] text-black rounded-[2px] ${password?.length <= 4 ? 'border-[1px] border-black focus:border-black' : ''}`}
                        labelClassName='text-black font-bold'
                        value={password}
                        type={isShowPass ? 'text' : 'password'}
                        isSuccess={isValidPassword}
                        onChange={(e) => handleChangePassword(e.target.value)}
                    />
                    <div tabIndex={0} className='absolute top-[36%] right-4 cursor-pointer' onClick={() => {
                        setIsShowPass(!isShowPass)
                    }}>
                        {isShowPass ? <BiShow size={18} /> : <BiHide size={18} />}
                    </div>
                </div>
                <div className='mt-4'>
                    <Button
                        text='Next'
                        className='w-full text-[24px] py-[16.5px] px-[2em] font-normal '
                        onClick={() => handleSubmit(email, password)}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignupRegform;
