import { IoCheckmarkOutline } from 'react-icons/io5';
import { BiRupee } from 'react-icons/bi';
import { BsPhone, BsTabletLandscape } from 'react-icons/bs';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { CgScreen } from 'react-icons/cg';


/**** plan form table data  ***/

export const planCardTable = [

    {
        title: 'Monthly price',
        values: [
            {
                id: '1',
                value: '149',
            },
            {
                id: '2',
                value: '199',
            },
            {
                id: '3',
                value: '499',
            },
            {
                id: '4',
                value: '649',
            },

        ]
    },

    {
        title: 'Video quality',
        values: [
            {
                id: '1',
                value: 'Good'
            },
            {
                id: '2',
                value: 'Good'
            },
            {
                id: '3',
                value: 'Better'
            },
            {
                id: '4',
                value: 'Best'
            },

        ]
    },

    {
        title: 'Resolution',
        values: [
            {
                id: '1',
                value: '480p'
            },
            {
                id: '2',
                value: '720p'
            },
            {
                id: '3',
                value: '1080p'
            },
            {
                id: '4',
                value: '4K+HDR'
            },

        ]
    },

    {
        title: 'Devices you can use to watch',
        values: [
            {
                id: '1',
                value: <div className='flex flex-col items-center'><BsPhone size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Phone</p> </div>
            },
            {
                id: '2',
                value: <div className='flex flex-col items-center'><BsPhone size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Phone</p> </div>
            },
            {
                id: '3',
                value: <div className='flex flex-col items-center'><BsPhone size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Phone</p> </div>
            },
            {
                id: '4',
                value: <div className='flex flex-col items-center'><BsPhone size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Phone</p> </div>
            },

        ]
    },

    {
        title: '',
        values: [
            {
                id: '1',
                value: <div className='flex flex-col items-center'><BsTabletLandscape size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Tablet</p> </div>
            },
            {
                id: '2',
                value: <div className='flex flex-col items-center'><BsTabletLandscape size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Tablet</p> </div>
            },
            {
                id: '3',
                value: <div className='flex flex-col items-center'><BsTabletLandscape size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Tablet</p> </div>
            },
            {
                id: '4',
                value: <div className='flex flex-col items-center'><BsTabletLandscape size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Tablet</p> </div>
            },

        ]
    },

    {
        title: '',
        values: [
            {
                id: '1',
                value: null
            },
            {
                id: '2',
                value: <div className='flex flex-col items-center'><HiOutlineDesktopComputer size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Computer</p> </div>
            },
            {
                id: '3',
                value: <div className='flex flex-col items-center'><HiOutlineDesktopComputer size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Computer</p> </div>
            },
            {
                id: '4',
                value: <div className='flex flex-col items-center'><HiOutlineDesktopComputer size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>Computer</p> </div>
            },

        ]
    },

    {
        title: '',
        values: [
            {
                id: '1',
                value: null
            },
            {
                id: '2',
                value: <div className='flex flex-col items-center'><CgScreen size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>TV</p> </div>
            },
            {
                id: '3',
                value: <div className='flex flex-col items-center'><CgScreen size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>TV</p> </div>
            },
            {
                id: '4',
                value: <div className='flex flex-col items-center'><CgScreen size={26} /> <p className='pt-1 font-bold text-start text-[12px]'>TV</p> </div>
            },

        ]
    },


]


export const cardTitles = [
    { id: '1', title: 'Mobile' },
    { id: '2', title: 'Basic' },
    { id: '3', title: 'Standard' },
    { id: '4', title: 'Premium' },
]

export const plansTitle = [
    'Watch all you want. Ad-free.',
    'Recommendations just for you.',
    'Change or cancel your plan anytime.'
]

