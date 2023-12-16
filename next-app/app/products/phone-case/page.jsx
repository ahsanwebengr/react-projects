import Products from "@/components/Products";
const getData = async () => {
    const res = await fetch('https://jsonserver.reactbd.com/phonecase');
    if (!res.ok) {
        throw new Error(`Failed to fetch API response`);
    }
    return res.json();
};

const page = async () => {
    const products = await getData();
    return (
        <>
            <Products products={products} />
        </>
    );
};

export default page;