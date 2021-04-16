import React from 'react';
import Signin from '../Sign-in.component/Signin';
import './Authentication.styles.scss'
import SignUp from '../Signup.component/Signup';


const Authentication = () => {
  return (
    <div className='Auth'>
      <Signin />
      <SignUp />
    </div>
  );
};

export default Authentication;
