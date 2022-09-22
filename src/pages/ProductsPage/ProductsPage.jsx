import React from 'react';

// import s from './productsPage.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProducts } from 'services/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from 'redux/cart/cart.constants';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProducts();
        if (data.length) {
          setProducts(data);
        }
      } catch (error) {

      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [])

  const handleBuy = (item) => {
    if (cart.some(({ id }) => id === item.id)) {
      alert(`Duplicate product ${item.name}`);
      return;
    }
    dispatch({ type: ADD_TO_CART, payload: item })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }
  const elements = products.map(({ id, name }) => (
    <li key={id}>
      <p>{name}</p>
      <button type='button' onClick={() => handleBuy({ id, name })}>Buy</button>
    </li>
  ))

  return (

    <ul>
      {elements}
    </ul>
  )
};

export default ProductsPage;
