import React from 'react';
import PropTypes from 'prop-types';

import s from './cartPage.module.scss';
import { useSelector } from 'react-redux';

const CartPage = (props) => {
  const cart = useSelector(store => store.cart);

  const elements = cart.map(({ id, name }) => (
    <li key={id}>
      <p>{name}</p>
    </li>
  ));

  return (
    <div>
      Cart content:
      <ul>
        {elements}
      </ul>
    </div>
  )
};

CartPage.propTypes = {};

export default CartPage;
