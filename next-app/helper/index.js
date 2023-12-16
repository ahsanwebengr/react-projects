export const getData = async () => {
    const res = await fetch(`https://jsonserver.reactbd.com/phone`);
    if (!res.ok) {
        throw new Error(`Failed to fetch API response`);
    }

    return res.json();
};

export const getSingleProduct = async (_id) => {
    const items = await getData();
    const singleItem = await items.find(item => item._id === _id);
    console.log(singleItem);
    return singleItem;
};