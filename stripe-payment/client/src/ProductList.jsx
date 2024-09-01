/* eslint-disable react/prop-types */
import { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 500 },
  { id: 2, name: 'Product 2', price: 1000 },
  { id: 3, name: 'Product 3', price: 1500 },
];

const ProductList = ({ onAddToCart }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = product => {
    setCart([...cart, product]);
    onAddToCart(cart);
  };

  return (
    <div className='product-list'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
