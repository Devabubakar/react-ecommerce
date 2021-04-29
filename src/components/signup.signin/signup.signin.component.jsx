import React from 'react';
import Signin from '../sign.in/signin.component';

import SignUp from '../sign.up/signup.component';
import { SignInAndSignUpContainer } from './signup.signin.styles';


const Authentication = () => {
  return (
    <SignInAndSignUpContainer>
      <Signin />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default Authentication;
