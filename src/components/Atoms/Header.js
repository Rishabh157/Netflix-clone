import React from 'react';
import logo from '../../images/netflix.svg';
import Button from './Button';
import { BsGlobe } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Header = ({ className }) => {

    const location = useLocation();

    return (
        <div className={twMerge(`grid grid-cols-12 py-4 lg:px-10 md:px-10 sm:px-8 ms:px-4 ${location?.pathname !== '/' ? 'bg-white border-b border-btn' : 'bg-main-body'}`, `${className}`)}>

            <div className='col-span-6 flex items-center'>
                <img
                    className='lg:h-[40px] md:h-[40px] sm:h-[36px] ms:h-[34px]'
                    src={logo}
                    alt='main-logo'
                />
            </div>

            <div className='col-span-6'>

                {location?.pathname !== '/' ? <div className='flex justify-end items-center gap-x-6 pt-2'>
                    <span className='bg-transparent text-text text-[19px] font-medium cursor-pointer hover:underline'>Sign In</span>
                </div> : <div className='flex justify-end items-center gap-x-6 pt-1'>
                    <div className='lg:block md:block sm:block ms:hidden relative bg-red-300 flex items-center bg-transparent border-[1px] border-white pr-4 pl-6 text-white font-normal outline-none align-text-top py-[0.22rem] rounded-[0.25rem]'>
                        <BsGlobe className='absolute left-2 top-2' fill='#ffffff' />
                        <select className='bg-transparent text-white outline-none ml-2'>
                            <option>English</option>
                            <option>हिन्दी</option>
                        </select>
                    </div>
                    <div>
                        <Link to='/login'>
                            <Button
                                text='Sign In'
                            />
                        </Link>
                    </div>
                </div>
                }

            </div>

        </div>
    );
};

export default Header;
