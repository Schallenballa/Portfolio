import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Music from './components/Music';
import {ParallaxProvider} from "react-scroll-parallax"; // Import the new Music component

function App() {
    return (
        <ParallaxProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>  {/* Updated to Routes */}
                        <Route path="/" element={<><Experience /><Education /><Skills /></>} />  {/* Updated route */}
                        <Route path="/Zapps" element={<Music />} />  {/* Updated route */}
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </ParallaxProvider>
    );
}

export default App;
