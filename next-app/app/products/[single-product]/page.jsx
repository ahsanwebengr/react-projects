import { getSingleProduct } from '@/helper';
import Image from 'next/image';
import React from 'react';

const SingleProduct = async ({ searchParams }) => {
    const _idString = searchParams?._id;
    const _id = Number(_idString);
    const product = await getSingleProduct(_id);
    return (
        <div className='flex items-center gap-10 xl:gap-0'>
            <Image src={product?.image} alt={product?.title} width={500} height={500} />
            <div className='flex flex-col gap-2'>
                <p className="font-semibold capitalize text-xl">{product?.title}</p>
                <p className="">{product?.price}</p>
                <p className="">{product?.description}</p>
                <p className="">{product?.category}</p>
                <p className="">{product?.isNew && 'New Item'}</p>
            </div>
        </div>
    );
};

export default SingleProduct;