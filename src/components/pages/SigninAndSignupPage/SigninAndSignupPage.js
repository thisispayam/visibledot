import React from 'react'
import './SigninAndSignupPage.scss';
import SignIn from '../../SignIn/SignIn';
import SignUp from '../../Signup/SignUp';
const SigninAndSignupPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SigninAndSignupPage;
