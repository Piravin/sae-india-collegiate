// React core
import React from 'react';
// Assets
import logo from './logo.svg';
import './App.css';
// Custom components
import {Header} from './components/header';
import Main from './components/main';
// Contexts
import NavContextProvider from './contexts/navContext';

function App() {
  return (
    <div className="App">
        <NavContextProvider>
            <Header/>
            <Main/>
        </NavContextProvider>
    </div>
  );
}

export default App;
