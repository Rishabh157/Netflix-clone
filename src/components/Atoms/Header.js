import React from 'react'
import logo from '../../images/netflix.svg';
import Button from './Button';

const Header = () => {
    return (
        <div className='grid grid-cols-12 pt-4 pb-2 px-10'>

            <div className='col-span-6 flex'>
                <img
                    className='h-[40px]'
                    src={logo}
                    alt='main-logo'
                />
            </div>

            <div className='col-span-6'>

                <div className='flex justify-end gap-x-6'>

                    <div>
                        <select className='bg-black text-white font-semibold outline-none border-white align-text-top px-[14px] py-[0.39rem] rounded-[0.25rem]'>
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
            </div>

        </div>
    )
}

export default Header