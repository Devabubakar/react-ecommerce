import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionFetching } from '../../redux/shop/shop.selectors';

import  WithSpinner  from '../with.spinner/with.spinner.component';
import { compose } from 'redux';
import ShopOverview from './shop.overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: collectionFetching,
});

 const collectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopOverview);

export default collectionOverviewContainer;
