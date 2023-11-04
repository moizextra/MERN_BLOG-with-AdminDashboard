import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Workspace from './Components/Workspace';
import { useDispatch, useSelector } from "react-redux"
import { loadUser } from './UserSlices';
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
import LoginSignupPage from './Components/LoginSignup';
import ProtectedRoute from './Components/Routes/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Articles />} />
        <Route exact path="/article/:id" element={<ArticleDetail />} />
        {/* This would be Protected Route */}
        <Route exact path="/create" element={
          <ProtectedRoute>
            <Workspace />
          </ProtectedRoute>
        } />


        <Route
          path="/auth"
          element={
            <ProtectedRoute >
              <LoginSignupPage />
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
