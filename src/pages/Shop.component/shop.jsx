import React from 'react';
import { Route } from 'react-router-dom';

import ShopOverview from '../../components/shop.overview/shop.overview.component';
import Category from '../../components/category/category.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import { firestore, shopDataFromSnapshot } from '../../firebase/firebase.utils';
import WithSpinner from '../../components/with.spinner/with.spinner.component';

const ShopOverviewSpinner = WithSpinner(ShopOverview);
const CategoryOverviewSpinner = WithSpinner(Category);

class Preview extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection('shop');
    
    

    collectionRef.get().then((snapshot) => {
      const collections = shopDataFromSnapshot(snapshot);
      
      updateCollections(collections)
      this.setState({
        loading: false,
      });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <ShopOverviewSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:category`}
          render={(props) => (
            <CategoryOverviewSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(null, mapDispatchToProps)(Preview);
