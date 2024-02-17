import React from 'react';

const Product = ({ title, thumbnail, description }) => {
    return (
        <article className='flex flex-col items-center bg-gray-700 rounded-md p-1'>
            <img src={thumbnail} alt={title} className='w-full h-52 rounded-md object-cover' />
            <div className="px-4 py-2">
                <h5 className='text-lg md:text-2xl mt-2 font-semibold truncate max-w-52' title={title}>{title}</h5>
                <p className='mt-1.5'>{description}</p>
            </div>
        </article>
    );
};

export default Product;