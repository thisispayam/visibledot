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
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink,BrandDiv } from './HeaderStyles';

const Header = ({ currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <BrandDiv>
                <p>Visible Dot</p>
                <LogoContainer to='/'>
                    <Logo className='logo' />
                </LogoContainer>  
            </BrandDiv>
         
            
        <OptionsContainer>
            <OptionLink to='/shop'>Shop</OptionLink>
            <OptionLink to='/contact'>Contact</OptionLink>
            {
                currentUser ? (
                        <div className="user-signout">
                            <div className="signout" onClick={() => auth.signOut()}>Sign Out</div>
                            <div className='welcome'>{`${currentUser.displayName}`}</div>
                            <img className='thumb' src={currentUser.photoURL} alt="" />
                    </div>
                        
                ) : (
                    <OptionLink to='/signin'>Sign In</OptionLink>
                )
            }
            <CartIcon />
            </OptionsContainer>
        {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
  
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);