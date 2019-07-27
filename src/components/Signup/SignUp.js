import React, {Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './SignUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:'', 
            email:'',
            password:'',
            confirmPassword:''
          }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        
        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

           await createUserProfileDocument(user, {displayName});
        
           this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });

        } catch(error) {
            console.error(error);
        }

    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState(
            {[name] : value}
        )
        
    }
    render() { 
        const {displayName,email,password,confirmPassword} = this.state;

        return ( <div className='sign-up'>
            <h2 className='title'>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' label='Display Name' value={displayName} handleChange={this.handleChange} required/>
                <FormInput type='text' name='email' label='Email' value={email} handleChange={this.handleChange}/>
                <FormInput type='password' name='password' label='Password' value={password} handleChange={this.handleChange} />
                <FormInput type='password' name='confirmPassword' label='Confirm Password' value={confirmPassword} handleChange={this.handleChange} />

                <div className="buttons">
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </div>
                
            </form>
        </div> );
    }
}
 
export default SignUp;