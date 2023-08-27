import React from 'react';
import GetData from './Components/GetData';
import PostData from './Components/PostData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditData from './Components/EditData';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostData />} />
        <Route path="/read" element={<GetData />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
