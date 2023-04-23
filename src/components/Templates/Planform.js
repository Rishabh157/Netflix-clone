import React, { useState } from 'react';
import Steps from '../Atoms/Steps';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { BiRupee } from 'react-icons/bi';
import { planCardTable, cardTitles, plansTitle } from '../../constants/data';
import Button from '../Atoms/Button';
import { useNavigate } from 'react-router-dom';


const PlanCard = ({ title, isActive, onClick }) => {
    return (
        <div
            className='relative'
            onClick={onClick}
        >
            <div className={`flex justify-center items-center select-none rounded-[2px] text-white text-[18px] font-bold opacity-60 bg-netflix-btn h-[120px] w-[128px] ${isActive && 'opacity-100'}`}>
                {title}
            </div>
            <span className='ton'></span>
        </div>
    )
}

const Planform = () => {


    const [active, setActive] = useState('1');
    const navigate = useNavigate();


    return (
        <div className='bg-white pt-4 pb-48'>
            <div className='grid grid-cols-12'>

                <div className='col-span-2'></div>

                <div className='col-span-8'>
                    <Steps
                        firstStep={2}
                        secondSteps={3}
                    />

                    <h1 className='font-bold text-[32px] mb-3'> Choose the plan that’s right for you </h1>

                    <div className='mb-10'>
                        {plansTitle?.map((plan, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex gap-2 items-center'>
                                    <IoCheckmarkOutline color='#e50914' size={32} />
                                    <div className='text-[18px] leading-6 text-text'>
                                        {plan}
                                    </div>
                                </div>

                            )
                        })}
                    </div>

                    {/* this is plan cards  */}
                    <div className='grid grid-cols-12 gap-4 sticky top-0 bg-white'>
                        <div className='col-span-4'></div>
                        <div className='col-span-8'>
                            <div className='grid grid-cols-12 gap-4'>
                                {cardTitles.map((title, index) =>
                                    <div
                                        key={title.id || index}
                                        className='col-span-3'>
                                        <PlanCard
                                            onClick={() => setActive(title.id)}
                                            isActive={active === title.id}
                                            title={title.title}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {planCardTable?.map((plans, ind) => {
                        return (
                            <div
                                key={ind}
                                id='plan-form'
                                className='grid grid-cols-12 gap-4 mt-4 border-1 border-[#ccc] border-b pb-3 last:border-none'>
                                <div className='col-span-4'>
                                    <p>{plans.title}</p>
                                </div>

                                <div className='col-span-8'>
                                    <div className='grid grid-cols-12 gap-4'>
                                        {plans.values.map((value, ind) => {
                                            return (
                                                <div
                                                    key={value.id || ind}
                                                    className={`col-span-3 flex justify-center items-center ${active === value.id ? 'text-netflix-btn' : 'text-check-box'}`}>
                                                    {plans.title === 'Monthly price' ? <BiRupee size={20} /> : null} <span className='font-medium'>{value.value}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>
            <div className='grid grid-cols-12 mt-4'>

                <div className='col-span-2'></div>
                <div className='col-span-8'>
                    <p className='text-check-box text-[13px]'>
                        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your
                        internet service and device capabilities. Not all content is available in all
                        resolutions. See our <span className='text-[#0071eb]'> Terms of Use </span> for more details.
                    </p>

                    <p className='text-check-box text-[13px] pt-2'>
                        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.

                    </p>

                    <div className='flex justify-center'>
                        <Button
                            text='Next'
                            className='text-[24px] font-normal py-[20.5px] px-[8em]'
                            onClick={()=> navigate('/signup/paymentPicker') }
                        />
                    </div>
                </div>
                <div className='col-span-2'></div>

            </div>

        </div>
    )
}

export default Planform;
