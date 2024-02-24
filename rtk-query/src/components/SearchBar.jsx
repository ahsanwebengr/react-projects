import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='max-w-lg mx-auto mb-4'>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow text-xl" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <Search />
            </label>
        </div>
    );
};

export default SearchBar;