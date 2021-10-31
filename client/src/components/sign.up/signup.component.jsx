import React, { useState } from 'react';

import FormInput from '../form.input/form.input.component';
import Button from '../button/button.component';
import { SignUpContainer, SignUpTitle } from './signup.styles';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

export const Signup = () => {
  const dispatch = useDispatch();
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { displayName, email, password, passwordConfirm } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('Password Do Not match');
      return;
    }

    dispatch(signUpStart({ email, password, displayName }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>DON'T HAVE AN ACCOUNT WITH US?</SignUpTitle>
      <span>NO PROBLEM ! JUST SIGN UP WITH US TODAY !!</span>
      <form action='' className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
        />
        <FormInput
          type='password'
          name='passwordConfirm'
          value={passwordConfirm}
          handleChange={handleChange}
          label='PasswordConfirm'
        />

        <Button type='submit'>SignUp</Button>
      </form>
    </SignUpContainer>
  );
};

export default Signup;
