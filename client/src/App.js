import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login /> } />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
