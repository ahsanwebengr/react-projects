import React from 'react';
import { useGetDataQuery } from '../rtk/Api';

const MyComponent = () => {
    const { data, error, isLoading } = useGetDataQuery();


    return (
        <div>
            {data && data.map(recipe => (
                <>
                    <h4>{recipe?.name}</h4>
                </>
            ))}
        </div>
    );
};

export default MyComponent;
