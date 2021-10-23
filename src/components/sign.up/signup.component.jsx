import React, { Component } from 'react';

import FormInput from '../form.input/form.input.component';
import Button from '../button/button.component';
import { SignUpContainer, SignUpTitle } from './signup.styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

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
    const { email, password, displayName } = this.state;
    const { signUpStart } = this.props;
    signUpStart({ email, password, displayName });
    
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignUpContainer>
        <SignUpTitle>DON'T HAVE AN ACCOUNT WITH US?</SignUpTitle>
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
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: ({ email, password, displayName }) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(Signup);
