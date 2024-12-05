
import './App.css'
import Card from "./components/Card";
import pic1 from "./images/mount.jpg";
import pic2 from "./images/weather.jpg";
import pic3 from "./images/sun.jpg";
import pic4 from "./images/img.jpg";
import State3 from './components/State3';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from './components/MainLayout'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { useState } from 'react';

function App() {
  const [store, setStore] = useState("");

  return (
    <div>
      {JSON.stringify(store)}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration regData={setStore} />}></Route>
      <Route path="/dash" element={<Dashboard />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App