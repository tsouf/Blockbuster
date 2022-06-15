import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import ProtectedRouting from "./components/ProtectedRouting";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movieInfo" element={<MovieInfo />} />
          <Route
            path="/account"
            element={
              <ProtectedRouting>
                <Account />
              </ProtectedRouting>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
