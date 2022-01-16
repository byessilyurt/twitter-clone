import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { Routes, Route, Navigate} from "react-router-dom";
import { useUserStore } from "./context/userContext";

function App() {
  const { user } = useUserStore();
  console.log(user.username)
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={user.username ? <Home /> : <Login />}/>
        <Route path="/login" element={user.username ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user.username ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile" element={user.username ? <Navigate to="/" /> : <Profile />} />
      </Routes>
    </div>
  );
}

export default App;
