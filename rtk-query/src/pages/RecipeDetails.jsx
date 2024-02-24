import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRecipesQuery } from '../rtk/Api';

const RecipeDetails = () => {
    const { data } = useGetRecipesQuery();
    const params = useParams();
    const recipeId = parseInt(params.id, 10);

    const currentRecipe = data?.recipes.find(recipe => recipe.id === recipeId);


    return (
        <div>
            {currentRecipe ? (
                <>
                    <h1>{currentRecipe.name}</h1>
                </>
            ) : (
                <p>No recipe data available for ID: {recipeId}</p>
            )}
        </div>
    );
};

export default RecipeDetails;
