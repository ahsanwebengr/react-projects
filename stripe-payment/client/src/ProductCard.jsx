/* eslint-disable react/prop-types */
const ProductCard = ({ product, onAddToCart }) => {
  const { name, price } = product;

  return (
    <div className='product-card'>
      <h3>{name}</h3>
      <p>${(price / 100).toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
