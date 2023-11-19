import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;