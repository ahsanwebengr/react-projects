import { Search } from 'lucide-react';
import React, { useCallback } from 'react';
import { debounce } from 'lodash';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const debouncedSearch = useCallback(
        debounce((value) => {
            setSearchTerm(value);
        }, 300),
        []
    );

    return (
        <div className='max-w-lg mx-auto my-6'>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow text-xl" placeholder="Search" value={searchTerm} onChange={(e) => debouncedSearch(e.target.value)} />
                <Search />
            </label>
        </div>
    );
};

export default SearchBar;