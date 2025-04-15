import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import './App.css';
import Header from './components/Header';
import Music from './components/Music';
import HomePage from "./components/HomePage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Zapps" element={<Music />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
