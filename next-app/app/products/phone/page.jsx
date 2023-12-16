import Products from "@/components/Products";
import { getPhones } from "@/helper";
const page = async () => {
    const products = await getPhones();
    return (
        <>
            <Products products={products} />
        </>
    );
};

export default page;