import Products from "@/components/Products";
import { getAccessories } from "@/helper";

const page = async () => {
    const products = await getAccessories();
    return (
        <>
            <Products products={products} />
        </>
    );
};

export default page;