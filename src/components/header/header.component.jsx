import React from 'react';
import { ReactComponent as Logo } from '.././asset/4.2 crown.svg';
import { connect } from 'react-redux';
import Cart from '../cart/cart.component';
import CartDropdown from '../cart.dropdown/cart.dropdown.component.';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/user/user.selector';
import { selectHiddenCart } from '../../redux/cart/cart.selector';
import {
  HeaderDiv,
  LinkContainer,
  OptionsDiv,
  OptionLink,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden , signOutStart}) => {

  return (
    <HeaderDiv>
      <LinkContainer to='/'>
        <Logo to='/' />
      </LinkContainer>

      <OptionsDiv>
        <OptionLink to='/shop' className='option'>
          SHOP
        </OptionLink>

        <OptionLink to='/contact' className='option'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin' className='option'>
            SIGN IN
          </OptionLink>
        )}
        <Cart />
      </OptionsDiv>
      {hidden ? null : <CartDropdown />}
    </HeaderDiv>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  hidden: selectHiddenCart,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
