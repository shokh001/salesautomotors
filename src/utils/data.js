import { BiTargetLock, BiDollarCircle, BiLineChart } from 'react-icons/bi';
import { BsClipboardCheck, BsCalendar4Event } from 'react-icons/bs';
import { HiOutlineSpeakerphone, HiOutlineCube } from 'react-icons/hi';
import { GoMail } from 'react-icons/go';
import { FaRegAddressCard } from 'react-icons/fa';
import { MdStorefront } from 'react-icons/md';


export const sidebar = [
    {
        id: 2,
        title: 'Leads',
        path: '/Leads',
        icon: <BiTargetLock />,
    },
    {
        id: 3,
        title: 'Deals',
        path: '/Deals',
        icon: <BiDollarCircle />,
    },
    {
        id: 4,
        title: 'Projects',
        path: '/Projects',
        icon: <BsClipboardCheck />,
    },
    {
        id: 5,
        title: 'Campaigns',
        path: '/Campaigns',
        icon: <HiOutlineSpeakerphone />,
    },
    {
        id: 6,
        title: 'Mail',
        path: '/Mail',
        icon: <GoMail />,
    },
    {
        id: 7,
        title: 'Activites',
        path: '/Activites',
        icon: <BsCalendar4Event />,
    },
    {
        id: 8,
        title: 'Contacts',
        path: '/Contacts',
        icon: <FaRegAddressCard />,
    },
    {
        id: 9,
        title: 'Insights',
        path: '/Insights',
        icon: <BiLineChart />,
    },
    {
        id: 10,
        title: 'Products',
        path: '/Products',
        icon: <HiOutlineCube />,
    },
    {
        id: 11,
        title: 'Marketplace',
        path: '/Marketplace',
        icon: <MdStorefront />,
    },
]