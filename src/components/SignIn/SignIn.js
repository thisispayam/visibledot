import React, {Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle} from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
          }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email:'', password: ''})
    }
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
        
    }
    render() { 
        return ( <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput type='text' name='email' label='email' value={this.state.email} handleChange={this.handleChange}/>
                <FormInput type='password' name='password' label='password' value={this.state.password} handleChange={this.handleChange} />
                <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
                
            </form>
        </div> );
    }
}
 
export default SignIn;