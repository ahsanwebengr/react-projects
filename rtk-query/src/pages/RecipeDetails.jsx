import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetRecipesQuery } from '../rtk/Api';
import { MoveLeft } from 'lucide-react';

const RecipeDetails = () => {
    const { data } = useGetRecipesQuery();
    const params = useParams();
    const recipeId = parseInt(params.id, 10);

    const currentRecipe = data?.recipes.find(recipe => recipe.id === recipeId);


    return (
        <div>
            {currentRecipe ? (
                <section>
                    <div className="my-5">
                        <Link className='btn btn-primary btn-circle' to={'/'}><MoveLeft /></Link>
                    </div>

                    <figure>
                        <img src={currentRecipe?.image} alt={currentRecipe?.name} className='w-full rounded-md h-[60vh] object-cover mb-4' />
                    </figure>

                    <h1 className='text-2xl md:text-5xl font-bold mb-3 tracking-wider'>{currentRecipe.name}</h1>
                    <div>
                        <p className='text-start mb-3'>Rating: {currentRecipe?.rating} <small className='text-md text-yellow-200 ml-3'>({currentRecipe?.reviewCount})</small></p>
                        <div className='flex items-center gap-3 flex-wrap'>{currentRecipe?.mealType?.map(type => (
                            <div className="badge badge-outline">{type}</div>
                        ))}</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-4">
                        <div className="my-3">
                            <h4 className='font-semibold text-3xl my-3'>Ingredients to Use</h4>
                            <ul className='marker:text-blue-500 list-outside list-disc ml-8'>
                                {
                                    currentRecipe?.ingredients?.map((ingredient, index) => (
                                        <li key={index} className='mb-2 capitalize text-lg'>{ingredient}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="my-3">
                            <h4 className='font-semibold text-3xl my-3'>Instructions</h4>
                            <ul>
                                {
                                    currentRecipe?.instructions?.map((instruction, index) => (
                                        <>
                                            <li className='font-semibold text-2xl mb-1'> Step {index + 1}</li>
                                            <li key={index} className='mb-2 capitalize text-lg'>{instruction}</li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='shadow-md bg-white dark:bg-slate-800 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-3 p-4'>
                        <div className="flex flex-col items-center gap-3">
                            <h5 className='text-xl font-semibold'>Prep Time</h5>
                            <p className='text-lg'>{currentRecipe?.prepTimeMinutes}</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <h5 className='text-xl font-semibold'>Prep Time</h5>
                            <p className='text-lg'>{currentRecipe?.cookTimeMinutes}</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <h5 className='text-xl font-semibold'>Total Time</h5>
                            <p className='text-lg'>{currentRecipe?.prepTimeMinutes + currentRecipe?.cookTimeMinutes}</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <h5 className='text-xl font-semibold'>Servings</h5>
                            <p className='text-lg'>{currentRecipe?.servings}</p>
                        </div>
                    </div>
                </section>
            ) : (
                <p>No recipe data available for ID: {recipeId}</p>
            )}
        </div>
    );
};

export default RecipeDetails;
