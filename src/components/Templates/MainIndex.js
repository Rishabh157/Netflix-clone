import React from 'react';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import { RxChevronRight } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';


const MainIndex = () => {

    const navigate = useNavigate();

    return (
        <div className='flex justify-center items-center h-screen'>

            <div>
                <h1 className='text-[3rem] font-black text-white'>Unlimited movies, TV shows and more.</h1>
                <h4 className='text-[1.5rem] font-normal text-white my-[0.78rem] text-center'>Watch anywhere. Cancel anytime.</h4>
                <h6 className='text-[1.2rem] font-normal text-white leading-[1.875rem] my-[1rem] text-center'>Ready to watch? Enter your email to create or restart your membership.</h6>

                <div className='flex justify-center gap-x-2'>
                    <Input
                        label='Email address'
                        placeholder='Enter your email address'
                        className='w-[387px]'
                    />

                    <Button
                        text='Get Started'
                        icon={<RxChevronRight fill='#ffffff' size={28} />}
                        className='w-none text-[25px] py-1 px-4'
                        onClick={()=> navigate('/signup/registration') }
                    />
                </div>

            </div>
        </div>
    )
}

export default MainIndex;
