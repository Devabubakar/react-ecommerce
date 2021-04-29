import React from 'react';


import MenuItem from '../menu.item/menu.item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sectionSelector } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({sections}) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSections }) => (
        <MenuItem key={id} {...otherSections} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: sectionSelector,
});

export default connect(mapStateToProps)(Directory);
