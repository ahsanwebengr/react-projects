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
                <section>
                    <h1>{currentRecipe.name}</h1>

                    <div className="my-3">
                        <h4>Ingredients</h4>
                        <ul>
                            {
                                currentRecipe?.ingredients?.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="my-3">
                        <h4>Instructions</h4>
                        <ul>
                            {
                                currentRecipe?.instructions?.map((instruction, index) => (
                                    <>
                                        <li> Step {index + 1}</li>
                                        <li key={index}>{instruction}</li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3">
                            <h5>Prep Time</h5>
                            <p>{currentRecipe?.prepTimeMinutes}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h5>Prep Time</h5>
                            <p>{currentRecipe?.cookTimeMinutes}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h5>Total Time</h5>
                            <p>{currentRecipe?.prepTimeMinutes + currentRecipe?.cookTimeMinutes}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h5>Servings</h5>
                            <p>{currentRecipe?.servings}</p>
                        </div>
                    </div>

                    <div>
                        <p className='text-start'>Rating: {currentRecipe?.rating} <small className='text-md text-yellow-200'>({currentRecipe?.reviewCount})</small></p>
                        <div className='flex flex-wrap gap-2'>{currentRecipe?.mealType?.map(type => (
                            <div className="badge badge-outline">{type}</div>
                        ))}</div>
                    </div>

                    <figure>
                        <img src={currentRecipe?.image} alt={currentRecipe?.name} />
                    </figure>
                </section>
            ) : (
                <p>No recipe data available for ID: {recipeId}</p>
            )}
        </div>
    );
};

export default RecipeDetails;
