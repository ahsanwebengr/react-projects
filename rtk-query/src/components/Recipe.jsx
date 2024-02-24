import React from 'react';
import { useGetRecipesQuery } from '../rtk/Api';
import { Link } from 'react-router-dom';

const Recipe = () => {
    const { data, error, isLoading } = useGetRecipesQuery();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {data && data?.recipes?.map(recipe => (
                <article className='card card-compact bg-base-100 shadow-xl' key={recipe?.id}>
                    <figure><img src={recipe?.image} alt={recipe?.name} /></figure>
                    <div className="card-body">
                        <div className='flex flex-wrap gap-3' key={recipe?.id}>{recipe?.tags && recipe.tags?.map(tag => (
                            <div className="badge badge-neutral">{tag}</div>
                        ))}</div>
                        <h2 className="card-title">{recipe?.name}</h2>
                        <p className='text-start'>Rating: {recipe?.rating} <small className='text-md text-yellow-200'>({recipe?.reviewCount})</small></p>
                        <div className='flex flex-wrap gap-2'>{recipe?.mealType?.map(type => (
                            <div className="badge badge-outline">{type}</div>
                        ))}</div>
                        <div className="card-actions justify-end">
                            <Link to={`/recipes/${recipe?.id}`} className="btn btn-primary">View Recipe</Link>                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Recipe;
