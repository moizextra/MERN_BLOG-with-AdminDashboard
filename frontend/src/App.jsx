import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Hero from './Components/Hero'
import Articles from './Components/Articles'
import Footer from './Components/Footer'
import ArticleDetail from './Components/ArticleDetail';

function App() {

  return (
  <Router>
  <Navbar/>
  <Hero/>
  <Routes>
  <Route exact path="/" element={<Articles />} />
  <Route exact path="/articleDetail" element={<ArticleDetail />} />
  </Routes>
  <Footer/>
  </Router>
  )
}

export default App
