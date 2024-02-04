import React from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className='container mx-auto max-w-screen-lg'>
      <h1 className='text-center text-white text-6xl font-bold mt-12 mb-20'>Task Management 🕹️</h1>
      <div className="grid grid-cols-3 gap-5">
        <Board title={'Todo'} />
        <Board title={'Doing'} />
        <Board title={'Completed'} />
      </div>
    </div>
  );
};

export default App;