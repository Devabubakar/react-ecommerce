import styled, { css } from 'styled-components';

const buttonStyle = css`
  background-color: black;
  color: white;
  border: none;
`;
export const googleStyle = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const invertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const stripeStyle = css`
  background-color: #357ae8;
  margin: 0 auto;
  padding: 0 8px 0 8px;
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleStyle;
  }
  if (props.stripe) {
    return stripeStyle;
  }

  return props.inverted ? invertedStyle : buttonStyle;
};
export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`;
