import React from 'react';
import Steps from '../Atoms/Steps';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';
import { useNavigate } from 'react-router-dom';

const SignupRegform = () => {

    const navigate = useNavigate();

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
                        value={'rishabhgour157@gmail.com'}
                        className='border-[1px] border-black text-black text-[16px] focus:text-black rounded-[2px]'
                        labelClassName='text-black font-bold'
                        isSuccess={true}
                    />
                </div>
                <div className='mt-2'>
                    <Input
                        label='Add a password'
                        className='border-[1px] border-black text-black text-[16px] placeholder:text-black focus:text-black rounded-[2px]'
                        labelClassName='text-black font-bold'
                        isSuccess={true}
                    />
                </div>
                <div className='mt-4'>
                    <Button
                        text='Next'
                        className='w-full text-[24px] py-[16.5px] px-[2em] font-normal '
                        onClick={() => {
                            navigate('/signup')
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default SignupRegform;
