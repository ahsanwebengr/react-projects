import Product from './Product';
import { useAppContext } from './context/Context';

const ProductList = () => {
    const { filteredProducts } = useAppContext();


    return (
        <section className='bg-mart_white_100  min-h-screen py-8'>
            <div className="max-w-screen-xl mx-auto px-2 mt-10 lg:mt-0">
                <h2 className='text-3xl font-medium text-mart_brand mb-4'>Results</h2>
                <div className='flex flex-wrap justify-center gap-5'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    ) : (
                        <h2 className='text-2xl font-semibold'>No Product Found...</h2>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductList;