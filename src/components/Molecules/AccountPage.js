import React from 'react';
import membersinceimage from '../../images/membersince.svg';
import visaimage from '../../images/visa.svg';

const AccountPage = () => {
    return (
        <div className='grid grid-cols-10 bg-account-page lg:pb-64 md:pb-60 sm:pb-44 ms:pb-36'>
            <div className='col-start-2 col-span-8 mt-6'>

                <div className='lg:flex md:lg:flex sm:lg:block ms:block items-center gap-4 py-3 border-b-[1px] border-b-[#999]'>
                    <p className='text-[2.15em]'>Account</p>
                    <div>
                        <img className='inline-block' height={26} src={membersinceimage} alt='member-since' />
                        <span className='font-bold text-[#555] ml-2 text-[.8rem]'>Member Since November 2021</span>
                    </div>
                </div>

                <div className='grid grid-cols-12 mt-4'>

                    <div className='lg:col-span-3 md:col-span-12 sm:col-span-12 ms:col-span-12'>
                        <h1 className='text-[1.20em] text-[#737373] font-normal uppercase'>Membership & Billing</h1>
                        <button
                            onClick={() => alert('clickeble')}
                            className='text-black text-[13px] px-12 py-[10px] my-2 rounded-[2px] bg-page-btn hover:bg-page-btn-active'>
                            Cancel Membership
                        </button>
                    </div>

                    <div className='lg:col-span-6 md:col-span-6 sm:col-span-6 ms:col-span-12 lg:mt-0 md:mt-0 sm:mt-0 ms:mt-4 border-b-[1px] pb-4'>
                        <p className='text-[16px] font-medium text-[#333] mb-1'>priya.gour22@gmail.com</p>
                        <p className='text-[#737373] text-[1em] mb-1'>Password: ********</p>
                        <p className='text-[#737373] text-[1em]'>Phone: (438) 924-0095</p>
                    </div>

                    <div className='lg:col-span-3 md:col-span-6 sm:col-span-6 ms:col-span-12 flex lg:justify-end md:justify-end sm:justify-end ms:justify-start lg:mt-0 md:mt-0 sm:mt-0 ms:mt-4 gap-10 border-b-[1px] pb-4'>
                        <div>
                            <p className='text-link hover:underline cursor-pointer'>Change account email</p>
                            <p className='text-link hover:underline cursor-pointer'>Change password</p>
                            <p className='text-link hover:underline cursor-pointer'>Change phone number</p>
                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-12 mt-6'>
                    <div className='lg:col-span-3 md:col-span-3 sm:col-span-0 ms:col-span-0'></div>
                    <div className='lg:col-span-9 md:col-span-12 sm:col-span-12 ms:col-span-12 lg:border-b-[1px] md:border-b-[1px] sm:border-b-[1px] ms:border-b-none pb-4'>
                        <img src={visaimage} width={30} className='inline-block mr-2' alt='visa' />
                        <p className='text-[16px] inline-block font-medium text-[#333] mb-2'>
                            •••• •••• •••• 2781
                        </p>
                        <p className='text-[1em] text-[#333] mb-1'>Your next billing date is 30 July 2023.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AccountPage;
