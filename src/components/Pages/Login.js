import React from 'react';
import Header from '../Atoms/Header';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import Footer from '../Atoms/Footer';


const Login = () => {
    return (
        <div className='login-bg'>

            <Header className='bg-tarnsparent border-none login-bg-bottom' />

            <div className='flex justify-center'>

                <div className='w-[32%] h-[100vh] pt-[60px] px-[68px] rounded-[4px] bg-[rgba(0,0,0,.75)] border-[1px] '>

                    <h1 className='text-[32px] text-white font-bold mb-[28px]'>Sign In</h1>

                    <Input
                        label='Email'
                        placeholder='Enter email'
                        className='bg-white text-black'
                        labelClassName='text-black text-[14px]'
                    />
                    <div className='mt-[16px]'
                    >
                        <Input
                            label='Password'
                            type='password'
                            placeholder='Enter password'
                            className='bg-white text-black'
                            labelClassName='text-black text-[14px]'
                        />
                    </div>

                    <div className='mt-[24px] mb-[12px]'>
                        <Button
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
                            />
                            <label
                                htmlFor='checkbox'
                                className='text-[#b3b3b3] text-[13px] font-normal'>Remember me</label>
                        </div>

                        <p className='text-[#b3b3b3] text-[13px] font-normal cursor-pointer hover:underline'>Need help?</p>
                    </div>

                    <div className='mt-[100px]'>
                        <p className='text-check-box my-2'>New to Netflix? <span className='text-white hover:underline'>Sign up now.</span></p>
                        <span className='text-gray text-[13px] leading-1'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            <span className='text-[#0071eb]'>Learn more.</span>
                        </span>
                    </div>


                </div>

            </div>

            <Footer footerColor='bg-[rgba(0,0,0,.75)]' />

        </div>
    )
}

export default Login;
