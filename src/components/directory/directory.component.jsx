import React from 'react';

import MenuItem from '../menu.item/menu.item.component';
import { useSelector } from 'react-redux';

import { sectionSelector } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {
  const sections = useSelector(sectionSelector);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSections }) => (
        <MenuItem key={id} {...otherSections} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
