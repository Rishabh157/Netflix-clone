import React from 'react';
import netflixlogo from '../../images/netflix.svg';
import profilelogo from '../../images/profiler.png';
import { BiBell } from 'react-icons/bi';
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';
import ProfilePanel from './ProfilePanel';
import NotificationPanel from './NotificationPanel';
import { Link } from 'react-router-dom';

const Navbar = ({ bgColor }) => {

    return (
        <div className={`${bgColor} sticky top-0 z-50 py-4 px-10`}>

            <div className='grid grid-cols-12'>

                <div className='col-span-7'>
                    <div className='flex'>
                        <Link to='/'>
                            <img className='h-[25px]' src={netflixlogo} alt='logo.svg' />
                        </Link>
                        <div className='flex ml-3'>
                            <ul className='flex justify-between items-center'>
                                <li className='text-white font-bold text-[14px] pl-6 transition cursor-pointer hover:text-gray-300'>
                                    Home
                                </li>
                                <li className='text-white font-light text-[14px] pl-6 transition cursor-pointer hover:text-gray-300'>
                                    TV Shows
                                </li>
                                <li className='text-white font-light text-[14px] pl-6 transition cursor-pointer hover:text-gray-300'>
                                    Movies
                                </li>
                                <li className='text-white font-light text-[14px] pl-6 transition cursor-pointer hover:text-gray-300'>
                                    New & Popular
                                </li>
                                <li className='text-white font-light text-[14px] pl-6 transition cursor-pointer hover:text-gray-300'>
                                    My List
                                </li>
                                <li className='text-white font-light text-[14px] pl-6 transition cursor-pointer hover:text-gray-300'>
                                    Browse by Languages
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='col-span-5'>

                    <div className='grid grid-cols-12'>

                        <div className='col-span-8 relative flex justify-end items-center mr-6'>
                            <AiOutlineSearch
                                color='white'
                                className='
                                        cursor-text 
                                        absolute right-1 top-1 
                                        icon-class'
                                size={25}
                            />
                            <input
                                placeholder='Search'
                                className='outline-none text-white text-[14px] bg-black px-4 py-[5px] border-white border-[1px] placeholder:text-gray-500 input-class'
                            />
                        </div>
                        <div className='col-span-4 flex justify-between items-center'>

                            <div className='cursor-pointer pb-1'>
                                <span className='text-[14px] text-white'>Children</span>
                            </div>

                            <div className='relative parent-notifi'>
                                <div className='cursor-pointer'>
                                    <BiBell color='white' size={25} />
                                </div>
                                <NotificationPanel />
                            </div>

                            <div className='relative parent-profile'>
                                <div className='flex items-center cursor-pointer addedClass'>
                                    <img className='h-[33px] rounded' src={profilelogo} alt='logo.svg' />
                                    <AiFillCaretDown className='ml-2 arrowClass' color='white' size={13} />
                                </div>
                                <ProfilePanel />
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar;
