import React from 'react';
import { useGetRecipesQuery } from '../rtk/Api';

const MyComponent = () => {
    const { data, error, isLoading } = useGetRecipesQuery();
    console.log(data, '->API DATA');

    return (
        <div>
            {data && data?.recipes?.map(recipe => (
                <article key={recipe?.id}>
                    <img src={recipe?.image} alt={recipe?.name} />
                    <div>{recipe?.tags && recipe.tags?.map(tag => (
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
