import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  collectionIsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../with.spinner/with.spinner.component';
import { compose } from 'redux';
import Category from './category.component';

const mapStateToProps = createStructuredSelector({
  isLoading:state =>  !collectionIsLoaded(state)
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Category);

export default CategoryContainer;
