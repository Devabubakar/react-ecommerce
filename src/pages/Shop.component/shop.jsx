import React from 'react';
import { Route } from 'react-router-dom';


import ShopOverview from '../../components/shopOverview.jsx/shopOverview';
import Category from '../../components/category.component/category'



const Preview = ({ match }) => {
  return (
    <div>
      
      
      <Route exact path={match.path} component={ShopOverview} />
      <Route  path={`${match.path}/:category`} component={Category} />
      
    </div>
  );
};


export default (Preview);
