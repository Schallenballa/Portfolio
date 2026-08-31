import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./components/HomePage'));
const Music = lazy(() => import('./components/Music'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AppLayout() {
    const { pathname } = useLocation();
    const isMusicPage = pathname === '/Zapps';

    return (
        <div className={`App${isMusicPage ? ' music-page-shell' : ''}`}>
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
    );
}

function App() {
    return (
        <Router>
            <AppLayout />
        </Router>
    );
}

export default App;
