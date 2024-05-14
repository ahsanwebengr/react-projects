import React, { useState } from "react";
import Selector from "./components/Selector";
import Banner from "./components/Banner";

const App = () => {
   const [theme, setTheme] = useState("default");
   const toggleTheme = (e) => {
      setTheme(e.target.value);
   };
   return (
      <div className="container mx-auto">
         <Selector toggleTheme={toggleTheme} theme={theme} />
         <Banner theme={theme} />
      </div>
   );
};

export default App;
