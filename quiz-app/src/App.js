
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Subjects from "./components/Subjects";
import NoPage from "./components/noPage";
import Questions from "./components/Questions";
import Topics from "./components/Topics";

function App() {


  const [allData, setAllData]=React.useState([])


  React.useEffect(()=>{

    fetch("https://api.jsonbin.io/b/6240bf17a703bb674935695b/2")
      .then(res=>res.json())
      .then(data=>setAllData(data))
    }, [])
    
    console.log(allData)


  return (

    <div className="App">

      <BrowserRouter>
       
        <Routes>
        
          <Route path="/subjects" element={<Subjects Data={allData} />}/>
          <Route path="/topics" element={<Topics />}/>
          <Route path="/questions" element={<Questions />}/>
          <Route path="*" element={<NoPage />}/>
    
        </Routes>

      </BrowserRouter>
     
    </div>

  );


}

export default App;
