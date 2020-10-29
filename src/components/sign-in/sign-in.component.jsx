import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.componet';

import {auth,signInWithGoolgle} from '../../firebase/firebase.util';


class SignIn extends React.Component{
constructor(props){
    super(props);
    this.state = {
        email:'',
        password:''
    }
}
handleSubmit = async event =>{
    event.preventDefault();
    //this.setState({email:'',password:''});
    const {email,password} = this.state;
    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''});

    }catch (error){
        console.log(error);

    }
}

handleChange = event =>{
    const {value,name} = event.target;
    this.setState({[name]:value});

}
 render (){
    return( 
    <div className="sign-in">
        <h1>I already have an account</h1>
        <span>SignIn with your email and password</span>

        <form onSubmit={this.handleSubmit}>
        <FormInput 
        name ="email" 
        type="email" 
        value={this.state.email}
        handleChange={this.handleChange}  
        label="email"  
        required/>
       
        <FormInput
         name ="password" 
         type="password" 
         value={this.state.password} 
         handleChange={this.handleChange}
         label="password"
         required/>
        <div className="buttons">
        <CustomButton type="submit">Sign In </CustomButton>
        <CustomButton onClick={signInWithGoolgle} isGoogleSignIn>
            Sign In With Google
         </CustomButton>
        </div>
        </form>
    </div>
    )}

}
export default SignIn;