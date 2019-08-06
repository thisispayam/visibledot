import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/CartSelectors';
import { selectCurrentUser } from '../../redux/user/UserSelectors';
import './Header.scss';

const Header = ({ currentUser, hidden}) => {
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
                            <div className='welcome'>{`${currentUser.displayName}`}</div>
                            <img className='thumb' src={currentUser.photoURL} alt="" />
                    </div>
                        
                ) : (
                    <Link className="option" to='/signin'>Sign In</Link>
                )
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
        </div>
    );
  
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);