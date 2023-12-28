import React from 'react';
import Login from './pages/Login';
import { Navbar } from './components/Navbar';
import ChatBox from './pages/ChatBox';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <ChatBox />
    </>
  );
};

export default App;