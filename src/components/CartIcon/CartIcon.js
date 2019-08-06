import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/CartActions';
import { selectCartItemsCount } from '../../redux/cart/CartSelectors';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToprops = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToprops, mapDispatchToProps) (CartIcon);