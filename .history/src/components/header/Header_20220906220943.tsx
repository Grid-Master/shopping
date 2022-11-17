import './header.css'
import { FiSearch } from 'react-icons/fi'
import { IoPersonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../../units/modal/Modal';
import ProfilePopup from '../profilePopup/ProfilePopup';

const logo = require('../../images/logo.png')

type Props = {
    openProfile: boolean
    setOpenProfile: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = ({openProfile, setOpenProfile}) => {
    // const [openProfile, setOpenProfile] = useState<boolean>(false)

    return (
        <div className='container'>
            <header className='header'>
                <Link to='/'><img src={logo} /></Link>
                <div className='search'>
                    <button><FiSearch style={{ width: '20px', height: '20px' }} /></button>
                    <input placeholder='Поиск' />
                </div>
                <a className='header-phone' href='tel:+380 630 130 103'>+380 630 130 103</a>
                <div className='lang'>
                    <IoPersonOutline onClick={() => setOpenProfile(true)} style={{ width: '33px', height: '33px', cursor: 'pointer' }} />
                    <span>RU/ENG</span>
                </div>
                <Modal active={openProfile} setActive={setOpenProfile}>
                    <ProfilePopup />
                </Modal>
            </header>
        </div>
    );
};

export default Header;