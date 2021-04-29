import React from 'react';
import Signin from '../sign.in/signin.component';
import './signup.signin.styles.scss'
import SignUp from '../sign.up/signup.component';


const Authentication = () => {
  return (
    <div className='Auth'>
      <Signin />
      <SignUp />
    </div>
  );
};

export default Authentication;
