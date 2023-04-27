import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const getBackgroundColor = (route) => {

    switch (route) {
        case '/':
            return '#FFFFF7';
            break;
        case '/login':
            return '#FFFFF7';
            break;
        default:
            return '#454545 ';
    }
}


const Footer = ({ footerColor = 'bg-white' }) => {
    
    const { pathname } = useLocation();
    const socialMediaIconColor = getBackgroundColor(pathname);

    return (
        <div className={`pt-10 py-5 ${footerColor}`}>

            <div className='grid grid-cols-12 mb-10'>

                <div className='lg:col-span-1 md:col-span-1 sm:col-span-0 ms:col-span-0'></div>
                <div className='lg:col-span-2 md:col-span-2 sm:col-span-4 ms:col-span-6'>
                    <ul className='flex justify-between'>
                        <li>
                            <a
                                href='http://localhost:3000/' >
                                <FaFacebookF fill={socialMediaIconColor} size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='https://www.instagram.com/rishabhgour0007/' target='_blank' rel='noreferrer'>
                                <AiOutlineInstagram fill={socialMediaIconColor} size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='https://twitter.com/Rishabhgour157' target='_blank' rel='noreferrer'>
                                <BsTwitter fill={socialMediaIconColor} size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='https://github.com/rishabh157' target='_blank' rel='noreferrer'>
                                <BsGithub fill={socialMediaIconColor} size={25} />
                            </a>
                        </li>

                        <li>
                            <a
                                href='https://www.linkedin.com/in/rishabh-gour-3b0861221/' target='_blank' rel='noreferrer'>
                                <AiFillLinkedin fill={socialMediaIconColor} size={25} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='col-span-10 mt-10'>
                    <div className='grid grid-cols-12'>
                        <div className='lg:col-span-1 md:col-span-1 sm:col-span-0 ms:col-span-1'></div>
                        <div className='lg:col-span-6 md:col-span-6 sm:col-span-5 ms:col-span-11 lg:pl-6 md:pl-6 sm:pl-6 ms:pl-2'>
                            <div className='text-footer-gray flex'>
                                <h1>Questions? Call</h1>
                                <Link to='tel:9009648224' className='underline-none pl-2 font-mono hover:text-footer-gray'>9009648224</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='grid grid-cols-12 lg:px-0 md:px-0 sm:px-0 ms:px-8'>

                <div className='col-span-1 lg:block md:block sm:block ms:hidden'></div>

                <div className='lg:col-span-2 md:col-span-2 sm:col-span-4 ms:col-span-6'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>auto description</span>
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>investor relations</span>
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>legal notices</span>
                        </li>
                    </ul>
                </div>

                <div className='lg:col-span-2 md:col-span-2 sm:col-span-4 ms:col-span-6'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>help center</span>
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>jobs</span>
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>cookie preferences</span>
                        </li>
                    </ul>
                </div>

                <div className='select-none lg:col-span-2 md:col-span-2 sm:col-span-4 ms:col-span-6'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>gift cards </span>
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>terms of use </span>
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>corporate information </span>
                        </li>
                    </ul>
                </div>

                <div className='lg:col-span-2 md:col-span-2 sm:col-span-4 ms:col-span-6'>
                    <ul className='flex flex-col justify-between'>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>media center</span>
                        </li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>privacy</span></li>
                        <li className='pb-3 inline-block capitalize text-footer-gray text-[13px]'>
                            <span className='hover:underline cursor-pointer'>contact us</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className='grid grid-cols-12 mt-10'>
                <div className='col-span-1'></div>
                <div className='lg:col-span-3 md:col-span-4 sm:col-span-4 ms:col-span-6'>
                    <p className='text-[12px] text-footer-gray'> 1997 Netflix, inc.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;
