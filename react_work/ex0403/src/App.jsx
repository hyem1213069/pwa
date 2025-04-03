import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import User from "./Pages/User";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/user/:userId' element={<User/>}></Route>
      </Routes>
     
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
