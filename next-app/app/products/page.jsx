import Products from "@/components/Products";
import { getData } from "@/helper";

const page = async () => {
    const products = await getData();
    return (
        <>
            <Products products={products} />
        </>
    );
};

export default page;