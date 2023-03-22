import React from 'react';
import Header from '../Atoms/Header';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../Atoms/Footer';

const HomeRegister = () => {
    return (
        <div>

            <Header />

            <div className='flex justify-center items-center h-screen'>

                <div>
                    <h1 className='text-[3rem] font-black text-white'>Unlimited movies, TV shows and more.</h1>
                    <h4 className='text-[1.5rem] font-normal text-white my-[0.78rem] text-center'>Watch anywhere. Cancel anytime.</h4>
                    <h6 className='text-[1.2rem] font-normal text-white leading-[1.875rem] my-[1rem] text-center'>Ready to watch? Enter your email to create or restart your membership.</h6>

                    <div className='flex justify-center gap-x-4 mb-4'>

                        <Input
                            label='Email address'
                            placeholder='Enter your email address'
                            className='w-[387px]'
                        />

                        <Button
                            text='Get Started'
                            icon={<BsChevronRight fill='#ffffff' size={20} />}
                            className='w-none text-[25px] py-1 px-12'
                        />

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default HomeRegister;
    