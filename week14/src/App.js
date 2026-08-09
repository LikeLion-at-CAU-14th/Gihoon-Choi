import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Home from "./pages/Home";
import PrivateRoute from "./auth/PrivateRoute";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/signup" element={<Signup />} />;

        <Route path="/mypage" element={<PrivateRoute><Mypage /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 