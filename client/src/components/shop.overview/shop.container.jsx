import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionFetching } from '../../redux/shop/shop.selectors';


import { compose } from 'redux';
import ShopOverview from './shop.overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: collectionFetching,
});

 const collectionOverviewContainer = compose(
  connect(mapStateToProps),

)(ShopOverview);

export default collectionOverviewContainer;
