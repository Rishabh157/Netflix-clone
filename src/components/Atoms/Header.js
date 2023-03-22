import React from 'react'
import logo from '../../images/netflix.svg';
import Button from './Button';
import { BsGlobe } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';


const Header = () => {

    const location = useLocation();
    // console.log('header', location.pathname)

    return (
        <div className={`grid grid-cols-12 py-4 px-10 ${location?.pathname !== '/' ? 'bg-white border-b border-btn' : 'bg-main-body'}`}>

            <div className='col-span-6 flex'>
                <img
                    className='h-[40px]'
                    src={logo}
                    alt='main-logo'
                />
            </div>

            <div className='col-span-6'>

                {location?.pathname !== '/' ? <div className='flex justify-end items-center gap-x-6 pt-2'> <Button
                    text='Sign In'
                    className='bg-transparent text-text text-[19px] font-medium' />
                </div> : <div className='flex justify-end items-center gap-x-6 pt-2'>
                    <div className='relative flex items-center'>
                        <BsGlobe className='absolute left-2' fill='#ffffff' />
                        <select className='bg-transparent border-[1px] border-white pr-4 pl-6 text-white font-normal outline-none align-text-top py-[0.39rem] rounded-[0.25rem]'>
                            <option>English</option>
                            <option>हिन्दी</option>
                        </select>
                    </div>
                    <div>
                        <Button
                            text='Sign In'
                            onClick={() => console.log('Sign In')}
                        />
                    </div>
                </div>
                }

            </div>

        </div>
    )
}

export default Header;
