import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import InventoryPage from "./pages/InventoryPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home sede="Centro"/>} />
        <Route path="/adminpage" element={<AdminPage/>}/> 
        <Route path="/inventorypage" element={<InventoryPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

