import React, { useState } from 'react';
import { useGetRecipesQuery } from '../rtk/Api';
import SearchBar from './SearchBar';
import Card from './Card';

const Recipe = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, error, isLoading } = useGetRecipesQuery({ searchTerm });

    const filteredRecipes = data?.recipes?.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {isLoading && <p>Loading...</p>}

            {error && <p>Some went wrong... ❌</p>}

            {filteredRecipes && filteredRecipes.length === 0 && (
                <p>No recipes found for the search term: <strong>{searchTerm}</strong></p>
            )}

            {filteredRecipes && filteredRecipes.length > 0 && (
                <>
                    <h2 className='text-start text-3xl md:text-5xl font-bold mb-4'>Recipes</h2>
                    <p className='text-start max-w-3xl'>Find and share everyday cooking inspiration on All recipes. Discover recipes, cooks, videos, and how-tos based on the food you love and the friends you follow.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {filteredRecipes.map(recipe => (
                            <Card recipe={recipe} key={recipe?.id} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Recipe;
