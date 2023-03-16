import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter, BsGithub } from 'react-icons/bs';


const Footer = ({ footerColor = 'bg-light-black' }) => {

    return (
        <div className={`pt-10 py-5 ${footerColor}`}>
            
            <div className='grid grid-cols-12 mb-10'>
                <div className='col-span-1'></div>
                <div className='col-span-2'>
                    <ul className='flex  justify-between'>
                        <li>
                            <a
                                href='http://localhost:3000/' >
                                <FaFacebookF fill='#ffffff' size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='http://localhost:3000/' >
                                <AiOutlineInstagram fill='#ffffff' size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='http://localhost:3000/' >
                                <BsTwitter fill='#ffffff' size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='http://localhost:3000/' >
                                <BsGithub fill='#ffffff' size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='http://localhost:3000/' >
                                <AiFillLinkedin fill='#ffffff' size={25} />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='grid grid-cols-12 '>
                <div className='col-span-1'></div>
                <div className='col-span-2'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>
                            auto description
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>
                            investor relations
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>
                            legal notices
                        </li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>help center</li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>jobs</li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>cookie preferences</li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>gift cards</li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>terms of use</li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>corporate information</li>
                    </ul>
                </div>
                <div className='col-span-2'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>media center</li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>privacy</li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px] hover:underline cursor-pointer'>contact us</li>
                    </ul>
                </div>
                <div className='col-span-3'></div>

            </div>

            <div className='grid grid-cols-12 mt-10'>
                <div className='col-span-1'></div>
                <div className='col-span-2'>
                    <p className='text-[12px] text-footer-gray'> 2022 - 2023 Netflix, inc.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;
