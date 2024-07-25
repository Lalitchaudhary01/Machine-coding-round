import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Otp from "./components/Otp";
import Cards from "./components/Cards";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Batch">Batch</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/Batch" element={<Cards />} />
          <Route path="/" element={<Otp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
