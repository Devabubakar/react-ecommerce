import React from 'react';
import { ReactComponent as Logo } from '.././asset/4.2 crown.svg';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../cart/cart.component';
import CartDropdown from '../cart.dropdown/cart.dropdown.component.';

import { currentUserSelector } from '../../redux/user/user.selector';
import { selectHiddenCart } from '../../redux/cart/cart.selector';
import {
  HeaderDiv,
  LinkContainer,
  OptionsDiv,
  OptionLink,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(currentUserSelector);
  const hidden = useSelector(selectHiddenCart);
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
          <OptionLink as='div' onClick={() => dispatch(signOutStart())}>
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

export default Header;
