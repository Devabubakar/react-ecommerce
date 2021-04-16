import React from 'react';
import './FormInput.styles.scss';


const Forminput = ({ label,  ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label `}
        >
          {label}
        </label>
      ) : null}
      
    </div>
    
  );
};

export default Forminput;
