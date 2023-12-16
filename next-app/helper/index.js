export const getPhones = async () => {
    const res = await fetch(
        "https://jsonserver.reactbd.com/amazonpro/category/phone",
        {
            cache: "no-cache",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch Phones");
    }

    return res.json();
};


export const getSinglePhone = async (_id) => {
    const items = await getPhones();
    const singleItem = await items.find(item => item._id === _id);
    return singleItem;
};

export const getPhoneCases = async () => {
    const res = await fetch(
        "https://jsonserver.reactbd.com/amazonpro/category/phone case",
        {
            cache: "no-cache",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch Phones");
    }

    return res.json();
};

export const getSinglePhoneCase = async (_id) => {
    const items = await getPhoneCases();
    const singleItem = await items.find(item => item._id === _id);
    return singleItem;
};

export const getWatches = async () => {
    const res = await fetch(
        "https://jsonserver.reactbd.com/amazonpro/category/watch",
        {
            cache: "no-cache",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch Phones");
    }

    return res.json();
};

export const getSingleWatch = async (_id) => {
    const items = await getWatches();
    const singleItem = await items.find(item => item._id === _id);
    return singleItem;
};


export const getAccessories = async () => {
    const res = await fetch(
        "https://jsonserver.reactbd.com/amazonpro/category/accessories",
        {
            cache: "no-cache",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch Phones");
    }

    return res.json();
};

export const getSingleAccessory = async (_id) => {
    const items = await getAccessories();
    const singleItem = await items.find(item => item._id === _id);
    return singleItem;
};

