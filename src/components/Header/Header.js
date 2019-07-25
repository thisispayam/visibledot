import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='brand'>
                <p>Visible Dot</p>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>  
            </div>
         
            
        <div className="options">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
        </div>
        </div>
    )
}

export default Header