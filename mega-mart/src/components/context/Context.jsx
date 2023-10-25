import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [count, setCount] = useState(0);

    useEffect(() => {
        getProducts();
    }, []);

    const handleChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);

        searchTerm.length > 2 ?
            setFilteredProducts(
                products.filter((product) =>
                    product.title.toLowerCase().includes(searchTerm)
                )
            ) :
            setFilteredProducts(products);
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;

        setSelectedCategory(newCategory);

        if (newCategory === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category === newCategory);
            setFilteredProducts(filtered);
        }
    };

    const getProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                const data = response.data.map((product) => ({
                    ...product,
                    clicked: false,
                }));
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };



    return (
        <AppContext.Provider value={{
            handleChange, search, products, getProducts,
            selectedCategory, handleCategoryChange, filteredProducts, count, setCount
        }}>
            {children}
        </AppContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    return useContext(AppContext);
}



