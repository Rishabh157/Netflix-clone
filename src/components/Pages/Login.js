import React, { useState } from 'react';
import Header from '../Atoms/Header';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import Footer from '../Atoms/Footer';
import { Link } from 'react-router-dom';


const Login = () => {

    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);
    const handleShowPassword = () => show ? setShow(false) : setShow(true)

    return (
        <div className='login-bg'>

            <Header className='bg-tarnsparent border-none login-bg-bottom' />

            <div className='flex justify-center lg:mb-24 md:mb-24 sm:mb-24 ms:mb-0'>

                <div className='lg:w-[32%] md:w-[68%] sm:w-[100%] h-[100vh] pt-[60px] lg:px-[68px] md:px-[62px] sm:px-[50px] ms:px-[30px] lg:rounded-[4px] md:rounded-[4px] sm:rounded-[4px] ms:rounded-none bg-[rgba(0,0,0,.75)] border-[1px]'>

                    <h1 className='text-[32px] text-white font-bold mb-[28px]'>Sign In</h1>

                    <Input
                        label='Email'
                        placeholder='Enter email'
                        className='bg-white text-black'
                        labelClassName='text-black text-[14px]'
                    // isError={true}
                    // errorMsg='email is not valid'
                    />
                    <div className='mt-[16px] relative'>
                        <Input
                            label='Password'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            className='bg-white text-black'
                            labelClassName='text-black text-[14px]'
                        // isError={true}
                        // errorMsg='password must contain at least 6 or more character'
                        />
                        <Button
                            text={show ? 'HIDE' : 'SHOW'}
                            className='absolute top-0 right-0 py-[20px] bg-transparent text-black text-[13px]'
                            onClick={handleShowPassword}
                        />
                    </div>

                    <div className='mt-[24px] mb-[12px]'>
                        <Button
                            disable={!checked}
                            text='Sign In'
                            className='w-full font-bold text-[16px] p-[16px]'
                        />
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                className='bg-check-box rounded-[2px] h-[16px] w-[16px] text-[16px] mr-2'
                                id='checkbox'
                                onChange={(e) => setChecked(e.target.checked)}
                            />
                            <label
                                htmlFor='checkbox'
                                className='text-[#b3b3b3] text-[13px] font-normal select-none'>Remember me</label>
                        </div>

                        <p className='text-[#b3b3b3] text-[13px] font-normal cursor-pointer hover:underline'>Need help?</p>
                    </div>

                    <div className='mt-[80px]'>
                        <p className='text-check-box my-2'>New to Netflix?
                            <span className='text-white hover:underline'><Link to='/'> Sign up now.</Link></span>
                        </p>
                        <span className='text-gray text-[13px] leading-1'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            <span className='text-[#0071eb] hover:underline cursor-pointer select-none'>Learn more.</span>
                        </span>
                    </div>

                </div>

            </div>

            <Footer footerColor='bg-[rgba(0,0,0,.75)]' />

        </div>
    )
}

export default Login;
