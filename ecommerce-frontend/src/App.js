import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
    // Check if the user is logged in (using a token in localStorage)
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Redirect to products page if logged in */}
                    <Route path="/" element={isLoggedIn ? <Navigate to="/products" /> : <Navigate to="/login" />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={isLoggedIn ? <ProductList /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
