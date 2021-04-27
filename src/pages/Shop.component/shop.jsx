import React from 'react';
import { Route } from 'react-router-dom';
import Category from '../Collection.component/Collection';

import ShopOverview from '../../components/shopOverview.jsx/shopOverview';



const Preview = ({ match }) => {
  return (
    <div>
      
      
      <Route exact path={match.path} component={ShopOverview} />
      
    </div>
  );
};


export default (Preview);
