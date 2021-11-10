import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionIsLoaded } from '../../redux/shop/shop.selectors';
import withSpinner from '../withSpinner/withSpinner.component';
import { compose } from 'redux';
import Category from './category.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !collectionIsLoaded(state),
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Category);

export default CategoryContainer;
