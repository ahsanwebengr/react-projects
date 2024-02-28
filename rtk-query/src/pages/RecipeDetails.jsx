import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetRecipesQuery } from '../rtk/Api';
import { MoveLeft } from 'lucide-react';
import TimeSpend from '../components/TimeSpend';

const RecipeDetails = () => {
    const { data } = useGetRecipesQuery();
    const params = useParams();
    const recipeId = parseInt(params.id, 10);

    const currentRecipe = data?.recipes.find(recipe => recipe.id === recipeId);


    return (
        <div>
            {currentRecipe ? (
                <section className='py-3'>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3  mb-4">
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
                                            <li className='font-semibold text-2xl mb-1'> Step - {index + 1}</li>
                                            <li key={index} className='mb-2 capitalize text-lg'>{instruction}</li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='shadow-md bg-gray-100 dark:bg-slate-800 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-3 p-4'>
                        <TimeSpend title={'Prep Time'} value={currentRecipe?.prepTimeMinutes} />
                        <TimeSpend title={'Cook Time'} value={currentRecipe?.cookTimeMinutes} />
                        <TimeSpend title={'Total Time'} value={currentRecipe?.prepTimeMinutes + currentRecipe?.cookTimeMinutes} />
                        <TimeSpend title={'Servings'} value={currentRecipe?.servings} />
                    </div>
                </section>
            ) : (
                <p>No recipe data available for ID: {recipeId}</p>
            )}
        </div>
    );
};

export default RecipeDetails;
