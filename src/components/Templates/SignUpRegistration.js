import React from 'react';
import devices from '../../images/divices.png';
import Steps from '../Atoms/Steps';

const SignUpRegistration = () => {
    return (
        <div className=' bg-white h-screen flex justify-center items-center'>

            <div className='w-[200px] flex flex-col items-center'>
                
                <img className='h-[90px]' src={devices} alt='devices-img' />

                <div className='mt-4'>
                    <Steps
                        firstStep={1}
                        secondSteps={3}
                    />

                    <h1>
                        Finish setting up your <br /> account
                    </h1>

                </div>

            </div>


        </div>
    )
}

export default SignUpRegistration;
