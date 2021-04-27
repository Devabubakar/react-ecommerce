import React from 'react';
import './Directory.styles.scss';

import MenuItem from '../Menu-item.component/Menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sectionSelector } from '../../Redux/DirectoryReducer/directory-selectors';

const Directory = ({sections}) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSections }) => (
        <MenuItem key={id} {...otherSections} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: sectionSelector,
});

export default connect(mapStateToProps)(Directory);
