import Products from "@/components/Products";
import { getWatches } from "@/helper";

const page = async () => {
    const products = await getWatches();
    return (
        <>
            <Products products={products} />
        </>
    );
};

export default page;