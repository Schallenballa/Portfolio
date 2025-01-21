import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import './App.css';
import Header from './components/Header';
import Music from './components/Music';
import HomePage from "./components/HomePage";
import {Navigate} from "react-router";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Zapps" element={<Music />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
