import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu.item/menu.item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sectionSelector } from '../../redux/directory/directory.selectors';

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
