import React from 'react'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import './Header.scss';

const Header = ({ currentUser}) => {
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
            {
                currentUser ? (
                        <div className="user-signout">
                            <div className="signout" onClick={() => auth.signOut()}>Sign Out</div>
                            <div className='welcome'>{`Welcome ${currentUser.displayName.split(" ")[0]}`}</div>
                            <img className='thumb' src={currentUser.photoURL} alt="" />
                    </div>
                        
                ) : (
                    <Link className="option" to='/signin'>Sign In</Link>
                )
            }
        </div>
        </div>
    )
}

export default Header