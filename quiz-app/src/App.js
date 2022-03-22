
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home";
import Questions from "./components/Questions";
import Topics from "./components/Topics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
    
            <Route exact path="/" element={<Home />}/>
            <Route path="/topics" element={<Topics />}/>
            <Route path="/questions" element={<Questions />}/>
    
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
