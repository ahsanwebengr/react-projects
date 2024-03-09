import { Link } from 'react-router-dom';

const Card = ({ recipe }) => {
    return (
        <>
            <article className='card card-compact bg-base-100 shadow-xl'>
                <figure><img src={recipe?.image} alt={recipe?.name} loading='lazy' /></figure>
                <div className="card-body">
                    <div className='flex flex-wrap gap-3' key={recipe?.id}>
                        {recipe?.tags && recipe.tags?.map(tag => (
                            <div className="badge badge-neutral">{tag}</div>
                        ))}
                    </div>
                    <h2 className="card-title">{recipe?.name}</h2>
                    <p className='text-start'>Rating: {recipe?.rating} <small className='text-md text-yellow-500 dark:text-yellow-200'>({recipe?.reviewCount})</small></p>
                    <div className='flex flex-wrap gap-2'>{recipe?.mealType?.map(type => (
                        <div className="badge badge-outline">{type}</div>
                    ))}</div>
                    <div className="card-actions justify-end">
                        <Link to={`/recipes/${recipe?.id}`} className="btn btn-primary">View Recipe</Link>                        </div>
                </div>
            </article>
        </>
    );
};

export default Card;