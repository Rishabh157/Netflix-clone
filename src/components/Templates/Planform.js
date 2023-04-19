import React, { useState } from 'react';
import Steps from '../Atoms/Steps';
import { IoCheckmarkOutline } from 'react-icons/io5';

const plansTitle = ['Watch all you want. Ad-free.', 'Recommendations just for you.', 'Change or cancel your plan anytime.']
const cardTitles = [
    { id: '1', title: 'Mobile' },
    { id: '2', title: 'Basic' },
    { id: '3', title: 'Standard' },
    { id: '4', title: 'Premium' },
]

const PlanCard = ({ title, isActive, onClick }) => {
    return (
        <div
            className='relative'
            onClick={onClick}
        >
            <div className={`flex justify-center items-center select-none rounded-[2px] text-white text-[18px] font-bold opacity-60 bg-netflix-btn p-[18px] h-[120px] w-[120px] ${isActive && 'opacity-100'}`}>
                {title}
            </div>
            <span className='ton'>  </span>
        </div>
    )
}

const Planform = () => {

    const [active, setActive] = useState('1')

    return (
        <div className='grid grid-cols-12 bg-white pt-4 pb-56'>

            <div className='col-span-2'></div>

            <div className='col-span-8'>
                <Steps
                    firstStep={2}
                    secondSteps={3}
                />

                <h1 className='font-bold text-[32px] mb-3'> Choose the plan that’s right for you </h1>

                {plansTitle?.map((plan, index) => {
                    return (
                        <div
                            key={index}
                            className='flex gap-2  items-center'>
                            <IoCheckmarkOutline color='#e50914' size={32} />
                            <div className='text-[18px] leading-6 text-text'>
                                {plan}
                            </div>
                        </div>

                    )
                })}

                {/* this is plan cards  */}
                <div className='grid grid-cols-12 gap-4 sticky top-0'>
                    <div className='col-span-4'></div>
                    <div className='col-span-8 flex justify-end'>

                        <div className='flex gap-4'>
                            {cardTitles.map((title, index) => <PlanCard
                                onClick={() => setActive(title.id)}
                                key={title.id || index}
                                isActive={active === title.id}
                                title={title.title}
                            />)}
                        </div>
                    </div>

                    <div className='bg-red-300 h-[200px] w-full'>

                    </div>


                </div>
            </div>
            <div className='col-span-2'></div>
        </div>
    )
}

export default Planform;
