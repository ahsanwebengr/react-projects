'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '@/components/Product';

const Page = () => {
    const [userProducts, setUserProducts] = useState([]);
    const [limit, setLimit] = useState(20);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [totalProduct, setTotalProduct] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products?limit=${limit}`);
                setUserProducts(res.data.products);
                setTotalProduct(res.data.total);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
                setError(true);
            }
        };

        fetchData();
    }, [limit]);

    return (
        <section className='container max-w-screen-xl mx-auto px-3'>
            {loading && <h1 className='text-center text-4xl font-bold'>Loading...</h1>}
            {error && <h1 className='text-center text-4xl font-bold'>Something went wrong.</h1>}

            {!loading && !error && (
                <>
                    <h2 className='text-center font-bold text-4xl my-6'>Product List</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                        {userProducts.map((product) => {
                            const { id, title, thumbnail, description } = product;
                            return <Product key={id} title={title} description={description} thumbnail={thumbnail} />;
                        })}
                    </div>
                    <div className="py-6 text-end font-semibold"><span class="text-green-500">{limit}</span> off {totalProduct} </div>
                    <div className="text-center my-8">
                        <button
                            onClick={() => setLimit(limit + 20)}
                            className='text-white font-semibold px-6 py-3 rounded-md
                    bg-blue-600 border-none hover:to-blue-500'>
                            {loading ? 'Loading...' : 'Load More'}
                        </button>
                    </div>
                </>
            )}
        </section>
    );
};

export default Page;
