import React, { useState } from 'react';
import Home from './pages/home.js';
import Contact from './pages/contact.js';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        if (currentPage === 'home') {
            return <Home />;
        } else if (currentPage === 'contact') {
            return <Contact />;
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" onClick={() => setCurrentPage('home')}>Blog</span>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => setCurrentPage('home')}>Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" onClick={() => setCurrentPage('contact')}>Contact</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {renderPage()}
        </div>
    );
}

export default App;