import { useState, useEffect } from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import Signup from "./components/Signup";
import UserEndPoint from "./components/Endpoints/UserEndPoint";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Facade
import { facade } from "./apiFacade";

function App() {
  const initialState = {
    username: "",
    password: "",
  };
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);

  useEffect(() => {
    if (sessionStorage.getItem("username") && facade.loggedIn) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        setLoggedIn={setLoggedIn}
      />
      {loggedIn && <SideBar />}
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        ¨
        <Route
          path="/signup"
          element={
            <Signup
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="/all" element={<UserEndPoint />} />
        <Route path="/users" element={<UserEndPoint />} />
        <Route path="/third" element={<UserEndPoint />} />
        <Route path="/fourth" element={<UserEndPoint />} />
        <Route path="/fifth" element={<UserEndPoint />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
