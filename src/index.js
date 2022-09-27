import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./index.css";
import Users from "./pages/Users";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Header />
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
      /*<footer/> */
    </BrowserRouter>  
  );