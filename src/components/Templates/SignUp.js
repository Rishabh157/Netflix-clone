import React from 'react';
import Steps from '../Atoms/Steps';
import Button from '../Atoms/Button';
import checkMarkImg from '../../images/checkmark.png';
import { IoCheckmarkOutline } from 'react-icons/io5';

const SignUp = () => {
    return (
        <div className='grid justify-items-center bg-white pt-10 pb-44'>

            <div>
                <div className='text-center mb-6 mt-16'>
                    <img className='inline-block mx-auto h-[50px] w-[50px]' src={checkMarkImg} alt='checkMark-img' />
                </div>
                <div className='text-center'>
                    <Steps
                        firstStep={2}
                        secondSteps={3}
                    />
                </div>

                <h1 className='text-[32px] font-bold text-text text-center'>Choose your plan.</h1>

                <div className='flex gap-2 mt-4'>
                    <div>  <IoCheckmarkOutline color='#e50914' size={32} /> </div>
                    <div className='text-[19px] leading-6 text-text'>
                        No commitments, cancel <br /> anytime.
                    </div>
                </div>

                <div className='flex gap-2 mt-4'>
                    <div>  <IoCheckmarkOutline color='#e50914' size={32} /> </div>
                    <div className='text-[19px] leading-6 text-text'>
                        Everything on Netflix for one <br /> low price.
                    </div>
                </div>

                <div className='flex gap-2 mt-4'>
                    <div>  <IoCheckmarkOutline color='#e50914' size={32} /> </div>
                    <div className='text-[19px] leading-6 text-text'>
                        No ads and no extra fees. Ever.
                    </div>
                </div>


            </div>

            <div className='mt-10'>
                <Button
                    text='Next'
                    className='w-full text-[24px] py-[12.5px] px-[6em] font-normal'
                />
            </div>
        </div>
    )
}

export default SignUp;
