import React from 'react';
import { Route } from 'react-router-dom';


import ShopOverview from '../../components/shop.overview/shop.overview.component';
import Category from '../../components/category/category.component'



const Preview = ({ match }) => {
  return (
    <div>
      
      
      <Route exact path={match.path} component={ShopOverview} />
      <Route  path={`${match.path}/:category`} component={Category} />
      
    </div>
  );
};


export default (Preview);
