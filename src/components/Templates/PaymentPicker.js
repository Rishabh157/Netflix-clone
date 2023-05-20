import React, { useEffect } from 'react';
import Steps from '../Atoms/Steps';
import LockImg from '../../images/lock.png';
import VisaImg from '../../images/visa.png';
import MasterCardImg from '../../images/mastercard.png';
import AmexImg from '../../images/amex.png';
import DinerImg from '../../images/diners.png';
import BhimUpiImg from '../../images/bhimupi.png';
import PaytmImg from '../../images/paytm.png';
import PhonePeImg from '../../images/phonepe.png';
import AmazonePayImg from '../../images/amazonepay.png';
import GooglePayImg from '../../images/googlePay.png';
import { BsChevronRight } from 'react-icons/bs';
import { AiOutlineLock } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { emailRegExp } from '../../constants/regularExpressions';


const cardImagesArray = [
    { id: 1, img: VisaImg, alt: 'visa-img' },
    { id: 2, img: MasterCardImg, alt: 'mastercard-img' },
    { id: 3, img: AmexImg, alt: 'american-express-img' },
    { id: 4, img: DinerImg, alt: 'diners-img' },
];

const upiImagesArray = [
    { id: 1, img: BhimUpiImg, alt: 'bhim-upi-img' },
    { id: 2, img: PaytmImg, alt: 'paytm-img' },
    { id: 3, img: PhonePeImg, alt: 'phone-pe-img' },
    { id: 4, img: AmazonePayImg, alt: 'amazone-pay-img' },
    { id: 5, img: GooglePayImg, alt: 'google-pay-img' },
];

const PaymentMakerBox = ({ title, imagesArray, onClick }) => {

    return (
        <div
            onClick={onClick}
            className='bg-white flex justify-between items-center gap-20 border-[2px] border-pay-line rounded-[5px] text-text mt-2 cursor-pointer px-[10px] lg:py-[22px] md:py-[22px] sm:py-[20px] py-[16px]'>
            <div className='flex items-center gap-x-5'>
                <div>
                    <span>{title}</span>
                </div>
                <div className='flex gap-x-1'>
                    {imagesArray?.map((image, index) => <img key={image?.id || index} className='h-[25px]' src={image?.img} alt={image?.alt} />)}
                </div>
            </div>
            <div>
                <BsChevronRight size={24} />
            </div>
        </div>
    );
};


const PaymentPicker = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem('email') ? localStorage.getItem('email') : '';
        const isValidEmail = emailRegExp.test(email);
        if (!isValidEmail) {
            navigate('/');
        }
    }, [navigate])

    return (
        <div className='grid justify-items-center bg-white pt-8 pb-48'>

            <img className='inline-block mx-auto h-[50px] w-[50px] mb-6' src={LockImg} alt='checkMark-img' />

            <Steps
                firstStep={3}
                secondSteps={3}
            />

            <div>
                <h1 className='text-[32px] font-semibold text-text text-center'>Choose how to pay</h1>

                <p className='text-[18px] font-normal text-text text-center mt-2'>
                    Your payment is encrypted and you can change your <br /> payment method at anytime.
                </p>

                <h1 className='text-[18px] font-semibold text-text text-center mt-[10px]'>
                    Secure for peace of mind. <br />
                    Cancel easily online.
                </h1>
            </div>


            <div className='mt-6 ms:px-4'>

                <div className='flex justify-end gap-x-1'>
                    <span className='text-[13px] text-text'>End-to-end encrypted</span>
                    <AiOutlineLock size={16} fill='#FFB53F' />
                </div>

                <PaymentMakerBox
                    title='Credit or Debit Card'
                    imagesArray={cardImagesArray}
                    onClick={() => navigate('/signup/creditoption')}
                />

                <PaymentMakerBox
                    title='UPI AutoPay'
                    imagesArray={upiImagesArray}
                />

            </div>

        </div>
    )
}

export default PaymentPicker;

