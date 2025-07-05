import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/header";
import Home from "./pages/home";
import Search from "./pages/search";
import DarkMode from "./components/darkMode/darkMode";

function App() {
  return (
    <>
      <div className="min-h-screen p-6 bg-white text-gray-600 w-full dark:bg-gray-900">
        <DarkMode />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
