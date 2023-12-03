import React, { useCallback, useState } from 'react';
import netflixlogo from '../../images/netflix.svg';
import profilelogo from '../../images/profiler.png';
import { BiBell } from 'react-icons/bi';
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai';
import ProfilePanel from './ProfilePanel';
import MobileBrowsePanel from './MobileBrowsePanel';
import NotificationPanel from './NotificationPanel';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setIsSearch } from '../../redux/slice/searchSlice';

const Navbar = ({ bgColor }) => {

    const [isNotificationShow, setIsNotificationShow] = useState(false);
    const { searchValue } = useSelector((state) => state.searchValue);
    const dispatch = useDispatch();

    const { filterName } = useParams();

    //.............searching product after 100 ms and if min length is 3.............. //
    const debounce = (func) => {
        let timer;
        return function (...args) {
            // setSearchQuery(...args);
            const context = this;
            dispatch(setIsSearch(false))
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                timer = null;
                if (args[0].length === 3 || args[0].length > 3) {
                    func.apply(context, args);
                } else if (args[0].length === 0) {
                    func.apply(context, args);
                }
            }, 600);
        };
    };

    // eslint-disable-next-line
    const optimizedFunc = useCallback(debounce(() => dispatch(setIsSearch(true))), []);

    return (
        <div className={`${bgColor} sticky top-0 z-50 py-4 lg:px-10 md:px-8 sm:px-4 ms:px-4`}>

            <div className='grid grid-cols-12'>

                <div className='lg:col-span-7 md:col-span-5 sm:col-span-5 ms:col-span-5'>
                    <div className='flex'>

                        <Link to='/browse'>
                            <img className='h-[25px]' src={netflixlogo} alt='logo.svg' />
                        </Link>

                        <div className='flex ml-8 ms:block sm:block md:block lg:hidden relative browse-parent'>
                            <span className='text-white select-none flex items-center font-bold text-[15px] transition cursor-pointer hover:text-gray-300'>
                                Browse <AiFillCaretDown size={10} fill='#ffffff' />
                            </span>
                            <MobileBrowsePanel />
                        </div>

                        <div className='ml-3 flex ms:hidden sm:hidden md:hidden lg:block'>
                            <ul className='flex justify-between items-center'>
                                <li className='text-white font-bold text-[14px] pl-6 transition cursor-pointer hover:text-gray-300'>
                                    <Link to='/browse' className='hover:text-white'>
                                        Home
                                    </Link>
                                </li>
                                <li className={`${filterName === 'tv' ? 'text-white font-bold' : 'text-white hover:text-gray-300'} font-light text-[14px] pl-6 transition`}>
                                    <Link to='/browse/tv' className={`${filterName === 'tv' ? ' hover:text-white font-bold' : 'hover:text-white'}`}>
                                        TV Shows
                                    </Link>
                                </li>
                                <li className={`${filterName === 'movie' ? 'text-white font-bold' : 'text-white hover:text-gray-300'} font-light text-[14px] pl-6 transition`}>
                                    <Link to='/browse/movie' className={`${filterName === 'movie' ? 'hover:text-white font-bold' : 'hover:text-white'}`}>
                                        Movies
                                    </Link>
                                </li>
                                <li className={`${filterName === 'discover' ? 'text-white font-bold' : 'text-white hover:text-gray-300'} font-light text-[14px] pl-6 transition`}>
                                    <Link to='/browse/discover' className={`${filterName === 'discover' ? 'hover:text-white font-bold' : 'hover:text-white'}`}>
                                        Documentries
                                    </Link>
                                </li>
                                <li className={`${filterName === 'action' ? 'text-white font-bold' : 'text-white hover:text-gray-300'} font-light text-[14px] pl-6 transition`}>
                                    <Link to='/browse/action' className={`${filterName === 'action' ? 'hover:text-white font-bold' : 'hover:text-white'}`}>
                                        Actions
                                    </Link>
                                </li>
                                <li className={`${filterName === 'my-list' ? 'text-white font-bold' : 'text-white hover:text-gray-300'} font-light text-[14px] pl-6 transition`}>
                                    <Link to='/browse/my-list' className={`${filterName === 'my-list' ? 'hover:text-white font-bold' : 'hover:text-white'}`}>
                                        My List
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='lg:col-span-5 md:col-span-7 sm:col-span-7 ms:col-span-7 col-span-5'>

                    <div className='grid grid-cols-12 '>

                        <div className='lg:col-span-8 md:col-span-10 sm:col-span-10 ms:col-span-10 relative flex justify-end items-center ms:mr-4 sm:mr-4 md:mr-2 lg:mr-6'>
                            <AiOutlineSearch
                                color='white'
                                className='cursor-text absolute right-1 top-1 icon-class'
                                size={25}
                            />
                            <input
                                placeholder='Search'
                                className='outline-none text-white text-[14px] bg-black px-4 py-[5px] border-white border-[1px] placeholder:text-gray-500 input-class'
                                value={searchValue}
                                onChange={(e) => {
                                    optimizedFunc(e.target.value)
                                    dispatch(setSearch(e.target.value))
                                }}
                            />
                        </div>

                        <div className='lg:col-span-4 md:col-span-2 sm:col-span-2 ms:col-span-2 flex items-center lg:justify-between md:justify-around sm:justify-end ms:justify-between'>

                            <div className='cursor-pointer pb-1 ms:hidden sm:hidden md:hidden lg:block'>
                                <span className='text-[14px] text-white'>Children</span>
                            </div>

                            <div className='relative ms:hidden sm:hidden md:block lg:block lg:mr-0 md:mr-2 sm:mr-4 ms:mr-4'
                                onMouseOver={() => {
                                    setIsNotificationShow(true);
                                }}
                                onMouseLeave={() => {
                                    setIsNotificationShow(false);
                                }}
                            >
                                <div className='cursor-pointer'>
                                    <BiBell color='white' size={25} />
                                </div>
                                <NotificationPanel
                                    show={isNotificationShow}
                                    onClose={() => {
                                        setIsNotificationShow(false);
                                    }}
                                />
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
