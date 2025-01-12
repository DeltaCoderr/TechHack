import React from "react";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import WhatsappButton from "./components/Whatsapp/Whatsapp.jsx";
import Team from "./components/Team/Team";
import About from "./components/About/About";
import Prize from "./components/Prize/Prize";
import Themes from "./components/Themes/Themes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Home></Home>
      <About />
      <Prize />
      <Themes />
      <WhatsappButton />
      <Team />
    </div>
  );
}

export default App;
