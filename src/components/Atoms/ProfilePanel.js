import React from 'react';
import firstProfile from '../../images/first-profile.png';
import { AiOutlineUser } from 'react-icons/ai';
import { MdHelpOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePanel = ({ isAccountPanel = false }) => {
    const navigate = useNavigate();

    return (
        <div className={`py-3 border-[1px] absolute right-0 top-12 rounded-[2px] border-notifi-border  ${isAccountPanel ? 'w-[160px] child-profileAccount' : 'lg:w-[210px] md:w-[220px] sm:w-[180px] ms:w-[170px] child-profile'}`}>

            <div className='px-2'>
                <div className='flex items-center mb-3'>
                    <img
                        className='rounded'
                        src={firstProfile}
                        alt=''
                    />
                    <Link to='/browse'>
                        <span className='pl-2 capitalize text-notifi-name text-[13px] cursor-pointer hover:underline'>priya</span>
                    </Link>
                </div>

                <div className='flex items-center mb-3 px-1'>
                    {!isAccountPanel && <AiOutlineUser color='#c3b5b5' size={25} />}
                    <Link to='/account'>
                        <span className={`${!isAccountPanel && 'pl-3'} capitalize text-notifi-name text-[13px] cursor-pointer hover:underline`}>
                            account
                        </span>
                    </Link>
                </div>

                <div className='flex items-center mb-3 px-1'>
                    {!isAccountPanel && <MdHelpOutline color='#c3b5b5' size={25} />}
                    <span className={`${!isAccountPanel && 'pl-3'} capitalize text-notifi-name text-[13px] cursor-pointer hover:underline`}>help center</span>
                </div>
            </div>

            <hr className='border-notifi-border' />

            <div className='select-none capitalize text-notifi-name text-[12px] mt-4 text-center cursor-pointer hover:underline'>
                <span onClick={() => {
                    setTimeout(() => {
                        navigate('/login', {
                            replace: true
                        })
                    }, 500)
                }}>sign out of netflix</span>
            </div>

        </div>
    )
}

export default ProfilePanel;
