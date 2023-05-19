import React, { useState, useEffect } from 'react';
import Steps from '../Atoms/Steps';
import VisaImg from '../../images/visa.png';
import MasterCardImg from '../../images/mastercard.png';
import AmexImg from '../../images/amex.png';
import DinerImg from '../../images/diners.png';
import Input from '../Atoms/Input';
import { BiCreditCard } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Button from '../Atoms/Button';
import { useNavigate } from 'react-router-dom';

const cardImagesArray = [
    { id: 1, img: VisaImg, alt: 'visa-img' },
    { id: 2, img: MasterCardImg, alt: 'mastercard-img' },
    { id: 3, img: AmexImg, alt: 'american-express-img' },
    { id: 4, img: DinerImg, alt: 'diners-img' },
]

const Creditoption = () => {

    const navigate = useNavigate();
    const [plan, setPlan] = useState('Mobile');
    const [price, setPrice] = useState('149');

    useEffect(() => {

        const plan = localStorage.getItem('plan') ? localStorage.getItem('plan') : '';
        const price = localStorage.getItem('price') ? localStorage.getItem('price') : '';

        setPlan(plan);
        setPrice(price);

    }, [])

    return (
        <div className='grid justify-items-center bg-white pt-10 pb-44 px-2'>

            <div>

                <Steps
                    firstStep={3}
                    secondSteps={3}
                />

                <h1 className='text-[32px] font-bold'> Set up your credit or debit <br /> card </h1>

                <div className='flex gap-x-1 my-2'>
                    {cardImagesArray?.map((image, index) => <img key={image?.id || index} className='h-[25px]' src={image?.img} alt={image?.alt} />)}
                </div>

                <div>

                    <div className='grid grid-cols-12 gap-2'>

                        <div className='col-span-12'>
                            <Input
                                label='Card Number'
                                placeholder='Enter Card number'
                                className='border-[1px] text-black border-black text-[16px] rounded-[2px]'
                                labelClassName='text-black font-bold'
                                endIcon={<BiCreditCard size={30} fill='rgb(153, 153, 153)' />}
                                isSuccess={true}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Input
                                label='Expiration date'
                                placeholder='Enter Expiration date'
                                className='border-[1px] border-black text-black text-[16px]  rounded-[2px]'
                                labelClassName='text-black font-bold'
                                isSuccess={true}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Input
                                label='CVV'
                                placeholder='Enter CVV number'
                                className='border-[1px] border-black text-black text-[16px]  rounded-[2px]'
                                labelClassName='text-black font-bold'
                                endIcon={<BsQuestionCircle size={30} fill='rgb(153, 153, 153)' />}
                                isSuccess={true}
                            />
                        </div>

                        <div className='col-span-12'>
                            <Input
                                label='First name'
                                placeholder='Enter First name'
                                className='border-[1px] border-black text-black text-[16px]  rounded-[2px]'
                                labelClassName='text-black font-bold'
                                isSuccess={true}
                            />
                        </div>

                        <div className='col-span-12'>
                            <Input
                                label='Last name'
                                placeholder='Enter Last name'
                                className='border-[1px] border-black text-black text-[16px]  rounded-[2px]'
                                labelClassName='text-black font-bold'
                                isSuccess={true}
                            />
                        </div>

                        <div className='col-span-12 py-[7px] px-[14px] bg-gray-light rounded flex justify-between items-center'>

                            <div>
                                <p className='text-text text-[16px] font-bold'> ₹ {price}/month </p>
                                <p className='text-[#737373] text-[16px] font-normal'> {plan} </p>
                            </div>

                            <div>
                                <Link to='/signup/planform?change=true' className='text-link text-[16px] font-bold'>Change</Link>
                            </div>

                        </div>

                        <div className='col-span-12 my-2'>
                            <Button
                                text='Start Membership'
                                className='w-full text-[24px] py-[16.5px] px-[2em] font-normal'
                                onClick={() => navigate('/browse')}
                            />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Creditoption;
