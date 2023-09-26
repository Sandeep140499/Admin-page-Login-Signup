import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import DashBoard from "./pages/DashBoard";
// import { UserContextProvider } from "./context/userContext";


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <head>
    <script src="http://localhost:3000"></script>
    </head>
     {/* <UserContextProvider> */}
         <BrowserRouter>
          <Navbar />
          <Toaster position="centered" toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="dashBoard" element={<DashBoard />} />
          </Routes>
         </BrowserRouter>
         {/* </UserContextProvider> */}
    </>
  );
}

export default App;
