import React from 'react';
import MovieCard from './MovieCard';

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className='container'>
      <h1 className='text-3xl md:text-5xl text-center font-bold mb-10'>List of cards</h1>
      <div className='grid grid-cols-3 gap-5'>
        {movieInfo.map((curVal, id) => {
          return <MovieCard key={id} myData={curVal} />;
        })}
      </div>
    </div>
  );
};

export default MovieComponent;
