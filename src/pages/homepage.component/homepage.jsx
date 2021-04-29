import React from 'react';
import { HomepageContainer } from './homepage.styles.jsx';

import Directory from '../../components/directory/directory.component';

const homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default homepage;
