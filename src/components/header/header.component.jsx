import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '.././asset/4.2 crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import Cart from '../cart/cart.component';
import CartDropdown from '../cart.dropdown/cart.dropdown.component.';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/user/user.selector';
import { selectHiddenCart } from '../../redux/cart/cart.selector';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <Logo to='/' style={{cursor:'pointer'}} /> <br />
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
            SIGN OUT
          </div>
        ) : (
          <Link to='/signin' className='option'>
            SIGN IN
          </Link>
        )}
        <Cart />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: selectHiddenCart,
});

export default connect(mapStateToProps)(Header);
