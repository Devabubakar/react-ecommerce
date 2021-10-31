import styled from 'styled-components';
import Button from '../button/button.component';

export const CartDropContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`;

export const CartEmpty = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
