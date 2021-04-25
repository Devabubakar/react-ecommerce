import React from 'react';
import './Header.styles.scss';
import { ReactComponent as Logo } from '.././asset/4.2 crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <Logo /> <br />
        </Link>
      </div>

      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>

        <Link to='/contact' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            LOG OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
});

export default connect(mapStateToProps)(Header);
