import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

export default connect(null, mapDispatchToProps)(CartIcon);
