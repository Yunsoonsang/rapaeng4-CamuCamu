import React from 'react'
import Navbar from './Compnonet/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import  Home  from './Compnonet/Home';
import About from './Compnonet/About';
import Blog from './Compnonet/Blog';
import Bloginfo from './Compnonet/Bloginfo';
 import Footer from './Compnonet/Footer';
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Bloginfo />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
