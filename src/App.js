
import {Navbar} from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Routes>
         <Route path="/" element={<Navbar/>}></Route>
        
        
      </Routes>
    
    </div>
  );
}

export default App;
