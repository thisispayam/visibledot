import React from 'react'
import './CustomButton.scss';

const CustomButton = ({children,inverted, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-signin' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;
