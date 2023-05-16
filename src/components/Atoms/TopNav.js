import React from 'react';
import netflixlogo from '../../images/netflix.svg';
import profilelogo from '../../images/profiler.png';
import { AiFillCaretDown } from 'react-icons/ai';
import ProfilePanel from './ProfilePanel';
import { Link } from 'react-router-dom';

const TopNav = ({ bgColor }) => {
    return (
        <div className={`${bgColor} sticky top-0 z-50 py-4 pl-10`}>

            <div className='grid grid-cols-12'>

                <div className='col-span-6'>
                    <div className='flex'>
                        <Link to='/'>
                            <img className='h-[33px]' src={netflixlogo} alt='logo.svg' />
                        </Link>
                    </div>
                </div>

                <div className='col-span-6 flex justify-end'>
                    <div className='relative parent-profile'>
                        <div className='flex items-center cursor-pointer pr-10'>
                            <img className='h-[33px] rounded' src={profilelogo} alt='logo.svg' />
                            <AiFillCaretDown className='ml-2 arrowClass' color='white' size={13} />
                        </div>
                        <ProfilePanel isAccountPanel={true} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopNav;
