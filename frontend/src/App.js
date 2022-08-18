import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ViewPage from "./pages/ViewPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<ViewPage />} />
    </Routes>
  );
}

export default App;
