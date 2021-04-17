import React, { Component } from 'react';
import './Signup.styles.scss';

import FormInput from '../FormInput.component/Forminput';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import Button from '../Button.component/button';

export class Signup extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.passwordConfirm) {
      alert('Password Do Not match');
      return;
      
    }
    try {
      
      const { user } = await auth.createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      );
      
      const {displayName} = this.state

      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
   

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-up'>
        <h1 className='title'>DON'T HAVE AN ACCOUNT WITH US?</h1>
        <span>NO PROBLEM ! JUST SIGN UP WITH US TODAY !!</span>
        <form action='' className='sign-up-form' onSubmit={this.handleSubmit}>
        <FormInput
            type='text'
            name='displayName'
            value={this.state.displayName}
            handleChange={this.handleChange}
            label='Display Name'
          />

          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
          />
          <FormInput
            type='password'
            name='passwordConfirm'
            value={this.state.passwordConfirm}
            handleChange={this.handleChange}
            label='PasswordConfirm'
          />

          <Button type='submit'>SignUp</Button>
        </form>
      </div>
    );
  }
}

export default Signup;

/* <FormInput
type='email'
name='email'
value={this.email}
onChange={this.handleValue}
label='email'
required
/>

<FormInput
type='text'
name='Display Name '
value={this.displayName}
handleChange={this.handleValue}
label='Display Name'
required
/>

<FormInput
type='password'
name='password'
value={this.password}
handleChange={this.handleValue}
label='password'
required
/>

<FormInput
type='password'
name='password Confirm'
value={this.passwordConfirm}
handleChange={this.handleValue}
label='password Confirm'
required
/> */
