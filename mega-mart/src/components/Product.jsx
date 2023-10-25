import { Rate } from "antd";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useState } from "react";
import { useAppContext } from "./context/Context";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
    const { setCount } = useAppContext();
    const { id, image, title, price, rating: { rate } } = product;
    const [clicked, setClicked] = useState(false);

    const handleAddToCartClick = () => {
        if (!clicked) {
            setClicked(true);
            setCount(prev => prev + 1);
        }
    };
    return (
        <article id={id} className="flex flex-col bg-white rounded-2xl cursor-pointer card">
            <div className="h-52 overflow-hidden flex items-center justify-center rounded-t-2xl relative bg-mart_white_200 img-wrapper">
                <img src={image} alt={title} className="w-32 object-cover p-1" />
                <button className="hidden lg:flex gap-2 items-center bg-white text-base text-mart_heading whitespace-nowrap px-4 py-2 rounded-md absolute z-10 hover:bg-mart_brand2 transition-all duration-200 ease-linear btn" onClick={handleAddToCartClick}
                >
                    {clicked ? <><AiOutlineShoppingCart /> View Cart</> : 'Add to Cart'}
                </button>
            </div>
            <div className="flex flex-col gap-2.5 p-3">
                <h4 className="text-base font-medium text-mart_heading w-52 truncate" title={title}>{title}</h4>
                <h5 className="text-lg text-mart_heading font-bold">{`$ ${price}`}</h5>
                <div className="flex items-center justify-between gap-4">
                    <Rate disabled defaultValue={rate} allowHalf={true} />
                    <button className="flex gap-2 items-center text-base text-mart_heading whitespace-nowrap px-3 py-2 rounded-md  z-10 bg-mart_brand2 transition-all duration-200 ease-linear lg:hidden" onClick={handleAddToCartClick}
                    >
                        {clicked ? <><AiOutlineShoppingCart /> View Cart</> : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Product;
