import Products from "@/components/Products";
import { getPhoneCases } from "@/helper";


const page = async () => {
    const products = await getPhoneCases();
    return (
        <>
            <Products products={products} />
        </>
    );
};

export default page;