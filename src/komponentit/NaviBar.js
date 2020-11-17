//
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Nappi } from './Nappi';
import './NaviBar.css';

function NaviBar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click); // Avautuessa ikonin ulkoasu muuttuu
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navibar'>
            <div className ='navibar-container'>
                <Link to='/' className='navibar-logo' onClick={closeMobileMenu}>
                EETU
                </Link>  
                
                <div className='menu-icon' onClick={handleClick}> 

                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'navi-menu active' : 'navi-menu'}>
                    <li className = 'navi-item'>
                        <Link to='/' className='navi-links' onClick={closeMobileMenu}>
                            Etusivu
                        </Link>
                        </li>
                    <li className = 'navi-item'>
                        <Link to='/kuka' className='navi-links' onClick={closeMobileMenu}>
                            Kuka olen?
                        </Link>
                    </li>    
                        <li className = 'navi-item'>
                        <Link to='/osaaminen' className='navi-links' onClick={closeMobileMenu}>
                            Osaaminen
                        </Link>
                    </li>
                        <li className = 'navi-item'>
                        <Link to='/cv' className='navi-links' onClick={closeMobileMenu}>
                            CV
                        </Link>
                    </li>
                </ul>
                {button && <Nappi buttonStyle='btn--outline'>Ota yhteys!</Nappi>}

            </div>
        </nav>
        </>
    );
}

export default NaviBar
