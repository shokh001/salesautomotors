import { useLocation } from 'react-router-dom';
import './navbar.scss';
import { useState } from 'react';
import Modal from 'components/Modal';
import { BiHelpCircle, BiSearch } from 'react-icons/bi';
import { PiLightbulbFilament } from 'react-icons/pi';
import { AiOutlineAppstore, AiOutlineUsergroupAdd } from 'react-icons/ai';
import ModalContent from 'components/ModalContent';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='navbar'>
            <div className='navbar-title'>{location.pathname.slice(1, location.pathname.length)}</div>
            <div className='navbar-search'>
                <div className='navbar-search-input-wrapper'>
                    <BiSearch className='search-icon' />
                    <input type="text" placeholder='Search Pipedrive' />
                </div>
                {
                    location.pathname.slice(1, location.pathname.length) === 'Deals' && <button onClick={() => setIsOpen(true)} type='button'>Create new a job</button>
                }
            </div>
            <div className='navbar-account'>
                <AiOutlineAppstore className='icon' />
                <AiOutlineUsergroupAdd className='icon' />
                <PiLightbulbFilament className='icon' />
                <BiHelpCircle className='icon' />
                <div className='navbar-account-profile'>S</div>
            </div>

            <Modal handleClose={handleClose} isOpen={isOpen}>
                <ModalContent isOpen={isOpen} handleClose={handleClose} />
            </Modal>
        </div>
    )
}

export default Navbar