import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./components/HomePage'));
const Music = lazy(() => import('./components/Music'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main id="main-content">
                    <Suspense fallback={<div className="route-loading" aria-label="Loading page" />}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/Zapps" element={<Music />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
