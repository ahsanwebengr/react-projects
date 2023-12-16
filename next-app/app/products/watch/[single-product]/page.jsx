import { getSingleWatch } from '@/helper';
import Image from 'next/image';
import React from 'react';

const SingleProduct = async ({ searchParams }) => {
    const _idString = searchParams?._id;
    const _id = Number(_idString);
    const product = await getSingleWatch(_id);
    return (
        <div className='flex items-center gap-10 xl:gap-0 max-w-6xl '>
            <Image src={product?.image} alt={product?.title} width={500} height={500} />
            <div className='flex flex-col gap-2'>
                <p className="font-bold capitalize text-2xl">{product?.title}</p>
                <p className="text-xl font-semibold"> <span className='line-through text-base text-black/70'>${product?.previousPrice}</span> ${product?.price}</p>
                <p className="">{product?.description}</p>
                <p className="">{product?.category}</p>
                {product?.isNew && <p className="badge px-3 py-4 bg-neutral-600 text-white">{product?.isNew && 'New Item'}</p>}
            </div>
        </div>
    );
};

export default SingleProduct;