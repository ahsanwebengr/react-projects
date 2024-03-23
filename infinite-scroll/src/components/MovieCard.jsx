import React from 'react';

const MovieCard = ({ myData }) => {
  const { title, body, id } = myData;
  return (
    <div className='card shadow-md bg-base-300 p-3'>
      <p className='btn btn-circle bg-primary mb-3'>{id}</p>
      <h2 className='font-bold mb-3 capitalize text-2xl'>{title.substr(0, 15)}</h2>
      <p className='text-lg line-clamp-3'>{body}</p>
    </div>
  );
};

export default MovieCard;
