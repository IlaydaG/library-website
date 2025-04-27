import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import BookDetail from './pages/BookDetail.jsx';
import AppNavbar from './components/Navbar.jsx'; 
import Login from './pages/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <AppNavbar onSearch={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
