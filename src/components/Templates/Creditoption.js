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
import { nameRegExp, cvvRegExp, cardNumberRegExp, expDateRegExp } from '../../constants/regularExpressions';

const cardImagesArray = [
    { id: 1, img: VisaImg, alt: 'visa-img' },
    { id: 2, img: MasterCardImg, alt: 'mastercard-img' },
    { id: 3, img: AmexImg, alt: 'american-express-img' },
    { id: 4, img: DinerImg, alt: 'diners-img' },
]

const PLANFORM = {
    PLAN: {
        MOBILE: 'Mobile',
        BASIC: 'Basic',
        STANDARD: 'Standard',
        PREMIUM: 'Premium',
    },
    PRICE: {
        VALUE_149: '149',
        VALUE_199: '199',
        VALUE_499: '499',
        VALUE_649: '649',
    }
};

const Creditoption = () => {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [plan, setPlan] = useState('');
    const [price, setPrice] = useState('');
    

    // for expireDate formated value
    const handleExpDateChange = (e) => {
        const inputValue = e.target.value;

        const formatedExpDate = inputValue.replace(expDateRegExp, '$1-$2');

        if (expDate.length <= 4) {
            setExpDate(formatedExpDate);
        } else {
            setExpDate('')
        }
    }

    // for cardNumber formated function
    const formatedCardNumber = (value) => {
        const formatedValue = value.replace(cardNumberRegExp, (match, p1, p2, p3) => {
            return p1 + (p1 && p2 ? '-' : '') + p2 + (p2 && p3 ? '-' : '') + p3;
        });

        // console.log(formatedValue);
        return formatedValue;
    }

    const handleChangeCardNumber = (e) => {

        const inputNumber = e.target.value;
        const finalResult = formatedCardNumber(inputNumber);

        setCardNumber(finalResult);
    }

    useEffect(() => {

        const plan = localStorage.getItem('plan') ? localStorage.getItem('plan') : '';
        const price = localStorage.getItem('price') ? localStorage.getItem('price') : '';

        if (plan === PLANFORM.PLAN.MOBILE || plan === PLANFORM.PLAN.BASIC || plan === PLANFORM.PLAN.STANDARD || plan === PLANFORM.PLAN.PREMIUM) {
            if (price === PLANFORM.PRICE.VALUE_149 || price === PLANFORM.PRICE.VALUE_199 || price === PLANFORM.PRICE.VALUE_499 || price === PLANFORM.PRICE.VALUE_649) {
                setPlan(plan);
                setPrice(price);
            } else {
                navigate('/', { replace: true });
            };
        } else {
            navigate('/', { replace: true });
        };

    }, [navigate]);

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
                                isFocusBorderBlack
                                label='Card Number'
                                placeholder='Enter Card number'
                                className='border-[1px] text-black border-black text-[16px] rounded-[2px]'
                                labelClassName='text-black font-bold'
                                endIcon={<BiCreditCard size={30} fill='rgb(153, 153, 153)' />}
                                value={cardNumber}
                                // isSuccess={true}
                                onChange={(e) => handleChangeCardNumber(e)}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Input
                                isFocusBorderBlack
                                label='Expiration date (MM/YY)'
                                placeholder='Enter Expiration date'
                                className='border-[1px] border-black text-black text-[16px]  rounded-[2px]'
                                labelClassName='text-black font-bold'
                                value={expDate}
                                onChange={(e) => handleExpDateChange(e)}
                            // isSuccess={true}
                            />
                        </div>

                        <div className='col-span-6'>
                            <Input
                                isFocusBorderBlack
                                label='CVV'
                                placeholder='Enter CVV number'
                                className='border-[1px] border-black text-black text-[16px]  rounded-[2px]'
                                labelClassName='text-black font-bold'
                                endIcon={<BsQuestionCircle size={30} fill='rgb(153, 153, 153)' />}
                                value={cvv}
                                isSuccess={cvvRegExp.test(cvv)}
                                isError={cvv.length >= 2 ? !cvvRegExp.test(cvv) : false}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>

                        <div className='col-span-12'>
                            <Input
                                isFocusBorderBlack
                                label='First name'
                                placeholder='Enter First name'
                                className='border-[1px] border-black text-black text-[16px] rounded-[2px]'
                                value={firstName}
                                labelClassName='text-black font-bold'
                                isSuccess={nameRegExp.test(firstName)}
                                isError={firstName.length > 1 ? !nameRegExp.test(firstName) : false}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </div>

                        <div className='col-span-12'>
                            <Input
                                isFocusBorderBlack
                                label='Last name'
                                placeholder='Enter Last name'
                                className={`border-black border-[1px] text-black text-[16px] rounded-[2px]`}
                                labelClassName='text-black font-bold'
                                value={lastName}
                                isSuccess={nameRegExp.test(lastName)}
                                isError={lastName.length > 1 ? !nameRegExp.test(lastName) : false}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
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
