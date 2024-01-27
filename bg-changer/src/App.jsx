import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('black');

  const colors = ['red', 'blue', 'orange', 'green', 'pink', 'violet'];

  return (
    <section className={`min-h-screen w-full relative px-2 shadow-lg transition-all duration-200`} style={{ background: color }}>
      <div className='max-w-screen-md w-full bg-white rounded-full p-3 absolute bottom-10 left-[50%] translate-x-[-50%] flex items-center justify-center flex-wrap gap-3'>
        {colors.map((btnColor, index) => (
          <button
            key={index}
            className={`text-white py-2 px-8 bg-${btnColor}-500 shadow-md rounded-full capitalize`}
            onClick={() => setColor(btnColor)}
            title={btnColor}
          >
            {btnColor}
          </button>
        ))}
      </div>
    </section>
  );
};

export default App;
