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
    if (this.password !== this.passwordConfirm) {
      alert('Password Do Not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        this.email,
        this.passwords
      );

      await createUserProfileDocument(user, this.displayName);
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
  handleValue = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-up'>
        <h1 className='title'>Don't have account?</h1>
        <span>Sign Up with Us</span>
        <form action='' className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            onChange={()=> this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            onChange={()=> this.handleChange}
            label='Password'
          />
          <FormInput
            type='passwordConfirm'
            name='passwordConfirm'
            value={this.state.passwordConfirm}
            onChange={()=> this.handleChange}
            label='PasswordConfirm'
          />
          <FormInput
            type='text'
            name='Display Name'
            value={this.state.displayName}
            onChange={()=> this.handleChange}
            label='Display Name'
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
