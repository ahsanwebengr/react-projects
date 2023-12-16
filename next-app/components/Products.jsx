// Import necessary modules
import Image from "next/image";
import Link from "next/link";

// Define the Products component
const Products = ({ products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
            {products.map((product) => {
                // Sanitize the category
                const sanitizedCategory = product?.category
                    ? product.category.toLowerCase().replace(/\s+/g, '-') === 'phone-case'
                        ? 'phonecase'
                        : product.category.replace(/\s+/g, '-')
                    : '';

                return (
                    // Create a Link for each product
                    <Link href={{ pathname: `/products/${sanitizedCategory}/single-product`, query: { _id: product?._id } }} key={product?._id}>
                        <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
                            {/* Display the product details */}
                            <Image src={product?.image} width={500} height={500} alt={product?.title} className="w-full h-80 object-cover" />
                            <div className="px-4 py-2 text-sm flex flex-col gap-4">
                                <p className="text-gray-600 capitalize text-xl">{product?.title}</p>
                                <p className="font-semibold badge badge-lg bg-green-200 py-4 px-3 rounded-md text-gray-700">$ {product?.price}</p>
                                <div className="flex justify-between items-center ">
                                    <button className="btn btn-neutral text-white">Add to Cart</button>
                                    <button className="uppercase text-xs font-semibold hover:text-blue-600">More Info</button>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

// Export the Products component
export default Products;
