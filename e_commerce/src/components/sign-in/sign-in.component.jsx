import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div className = 'sign-in'>
        <h2>I already have an account?</h2>
        <span>Sign in with email and password</span>
        <form onSubmit = {this.handleSubmit}>
          <FormInput
           name = 'email'
           type="email" 
           value ={this.state.email} 
           handleChange = {this.handleChange}
           label = 'email'/>
          {/* <label>Email</label> */}
          <FormInput
           name = 'password'
           type="password" 
           value ={this.state.password}
           handleChange = {this.handleChange}
           label = 'password'/>
          {/* <label>password</label> */}
          <CustomButton type="submit" value = 'Submit'>Sign In</CustomButton>
          <CustomButton onClick = {signWithGoogle}>Sign In With Google</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;