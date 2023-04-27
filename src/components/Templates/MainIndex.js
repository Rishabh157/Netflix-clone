import React from 'react';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import { RxChevronRight } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';


const MainIndex = () => {

    const navigate = useNavigate();

    return (
        <div className='flex justify-center lg:items-center md:items-center sm:items-center ms:items-start min-h-screen'>

            <div className='lg:pt-0 md:pt-0 sm:pt-24 ms:pt-32 ms:px-3'>

                <h1 className='text-center lg:text-[3rem] md:text-[3rem] sm:text-[3rem] ms:text-[2.3rem] font-black text-white'>Unlimited movies, TV shows and more.</h1>
                <h4 className='lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.3rem] ms:text-[1.3rem] font-normal text-white text-center lg:my-[0.78rem] md:my-[0.78rem] sm:my-[1rem] ms:my-3'>
                    Watch anywhere. Cancel anytime.
                </h4>
                <h6 className='lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.3rem] ms:text-[1.1rem] font-normal text-white leading-[1.875rem] my-[1rem] text-center'>Ready to watch? Enter your email to create or restart your membership.</h6>

                <div className='flex justify-center gap-x-2 ms:items-center lg:flex-row md:flex-row sm:flex-row ms:flex-col ms:gap-y-4'>

                    <Input
                        label='Email address'
                        placeholder='Enter your email address'
                        className='w-[387px]'
                    />

                    <Button
                        text='Get Started'
                        icon={<RxChevronRight fill='#ffffff' size={28} />}
                        className='flex text-[25px] py-[11px] px-4 lg:w-52 md:w-52 sm:w-52 ms:w-52'
                        onClick={() => navigate('/signup/registration')}
                    />

                </div>

            </div>
        </div>
    )
}

export default MainIndex;
