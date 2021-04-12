import React from 'react';
import './Menu-item.styles.scss';

const Menuitem = ({ title, imageUrl ,size, key}) => {
  return (
    <div className={`${size} menu-item`}  key={key} >
      <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})` }}></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default Menuitem;
