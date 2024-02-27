import { FiSearch } from "react-icons/fi";
const SearchBar = ({ searchProps }) => {
    const { search, setSearch, handleSubmit } = searchProps;

    return (
        <form onSubmit={handleSubmit} className="w-full mx-auto py-4">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FiSearch size={28} />
                </div>
                <input
                    type="search"
                    id="default-search" className="block w-full p-4 ps-16 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search Github username"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    required
                />

                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    );
};

export default SearchBar;