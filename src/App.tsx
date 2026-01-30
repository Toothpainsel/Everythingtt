import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Welcome to EverythingTT!</h1>
            </header>
            <main className="app-main">
                <section className="introduction">
                    <p>
                        Hello! This is painsel, and this is definitely not AI generated. Thank you so much for using 
                        EverythingTT!!! Here, you'll find EVERYTHING about the indie .io game territorial.io! 
                        This is still under development, but i promise I'll do my best :>
                    </p>
                </section>
                <section className="pages-coming-soon">
                    <h2>Pages Coming Soon</h2>
                    <p>More pages are being prepared. Check back soon!</p>
                </section>
            </main>
            <footer className="app-footer">
                <p>Looking forward for your contributions, viktor &lt;3</p>
            </footer>
        </div>
    );
};

export default App;