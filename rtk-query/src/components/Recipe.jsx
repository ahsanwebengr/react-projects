import React from 'react';
import { useGetRecipesQuery } from '../rtk/Api';

const MyComponent = () => {
    const { data, error, isLoading } = useGetRecipesQuery();
    return (
        <div className='grid grid-cols-3'>
            {data && data?.recipes?.map(recipe => (
                <article className='card card-compact bg-base-100 shadow-xl' key={recipe?.id}>
                    <figure><img src={recipe?.image} alt={recipe?.name} /></figure>
                    <div className="card-body">
                        <div className='flex flex-wrap gap-3 ' key={recipe?.id}>{recipe?.tags && recipe.tags?.map(tag => (
                            <div className="badge badge-secondary">{tag}</div>
                        ))}</div>
                        <h2 className="card-title">{recipe?.name}</h2>
                        <p>{recipe?.rating}({recipe?.reviewCount})</p>
                        <p>{recipe?.mealType}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipe</button>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default MyComponent;
