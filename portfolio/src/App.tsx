import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header.tsx";
import { LandingContent } from "./components/LandingContent/LandingContent.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingContent />
    </div>
  );
}

export default App;
