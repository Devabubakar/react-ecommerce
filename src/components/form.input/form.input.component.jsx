import React from 'react';
import { FormInputContainer, FormInputLabel, GroupContainer } from './form.input.styles';



const Forminput = ({ label, handleChange, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange= {handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label `}
        >
          {label}
        </FormInputLabel>
      ) : null}
      
    </GroupContainer>
    
  );
};

export default Forminput;
