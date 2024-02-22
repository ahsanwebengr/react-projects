import React from 'react';
import { useGetRecipesQuery } from '../rtk/Api';

const MyComponent = () => {
    const { data, error, isLoading } = useGetRecipesQuery();
    console.log(data, '->API DATA');

    return (
        <div className=''>
            {data && data?.recipes?.map(recipe => (
                <article key={recipe?.id}>
                    <img className='w-20' src={recipe?.image} alt={recipe?.name} />
                    <div key={recipe?.id}>{recipe?.tags && recipe.tags?.map(tag => (
                        <span>{tag}</span>
                    ))}</div>
                    <h4>{recipe?.name}</h4>
                    <p>{recipe?.rating}({recipe?.reviewCount})</p>
                    <p>{recipe?.mealType}</p>
                    <button>View Recipe</button>
                </article>
            ))}
        </div>
    );
};

export default MyComponent;
