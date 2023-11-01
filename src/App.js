import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./components/Navibar";

function App() {
  return (
    <div className="App">
      <Router>
          <Navibar/>
          <Routes>
              <Route path={'/'} exact />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
