import React from 'react';
import Steps from '../Atoms/Steps';
import VisaImg from '../../images/visa.png';
import MasterCardImg from '../../images/mastercard.png';
import AmexImg from '../../images/amex.png';
import DinerImg from '../../images/diners.png';
import Input from '../Atoms/Input';
// import Button from '../Atoms/Button';

const cardImagesArray = [
    { id: 1, img: VisaImg, alt: 'visa-img' },
    { id: 2, img: MasterCardImg, alt: 'mastercard-img' },
    { id: 3, img: AmexImg, alt: 'american-express-img' },
    { id: 4, img: DinerImg, alt: 'diners-img' },
]

const Creditoption = () => {


    return (
        <div className='grid justify-items-center bg-white pt-10 pb-44'>

            <div>

                <Steps
                    firstStep={3}
                    secondSteps={3}
                />

                <h1 className='text-[32px] font-bold'> Set up your credit or debit <br /> card </h1>

                <div className='flex gap-x-1 mt-2'>
                    {cardImagesArray?.map((image, index) => <img key={image?.id || index} className='h-[25px]' src={image?.img} alt={image?.alt} />)}
                </div>
                <div>

                    <Input
                        label='Card Number'
                    />
                    
                </div>

            </div>

        </div>
    )
}

export default Creditoption;
