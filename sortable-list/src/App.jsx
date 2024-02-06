import React from 'react';
import Board from './components/Board';
import { boards } from './data';

const App = () => {

  return (
    <div className='container mx-auto max-w-screen-lg'>
      <h1 className='text-center text-white text-6xl font-bold mt-12 mb-20'>Task Management 🕹️</h1>
      <div className="grid grid-cols-3 gap-5">
        {
          boards?.map(board => (
            <Board title={board?.title} key={board?.id} />
          ))
        }
      </div>
    </div>
  );
};

export default App;