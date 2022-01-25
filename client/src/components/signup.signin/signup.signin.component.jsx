import React from 'react';
import Signin from '../sign.in/signin.component';

import SignUp from '../sign.up/signup.component';
import { SignInAndSignUpContainer } from './signup.signin.styles';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';

const Authentication = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return currentUser ? (
    <Redirect to='/' />
  ) : (
    <SignInAndSignUpContainer>
      <Signin />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default Authentication;
