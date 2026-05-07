import "./App.css";
import DogPhoto from "./components/DogPhoto";
import LoginPage from "./pages/LoginPage.jsx";
import Registration from "./pages/Registration.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<LoginPage />} />{" "}
          <Route path="/game" element={<DogPhoto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
