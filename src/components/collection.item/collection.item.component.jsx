import React from 'react';
import { addItem } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';
import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from './collection.item.styles';

const PreviewItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></BackgroundImage>

      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default PreviewItem;
