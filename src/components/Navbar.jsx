import { useState } from 'react';
import './Navbar.css';
import Button from './Button';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar" aria-label="Main navigation">
            <div className="container nav-container">
                <div className="nav-brand">
                    <a href="/" className="nav-logo-link">
                        <img src="/images/brand-logo-dark.svg" alt="KC Cleaners Logo" className="nav-main-logo" />
                    </a>
                </div>

                <button
                    className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
                    <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
                    <a href="#why-us" className="nav-link" onClick={closeMenu}>Why Us</a>
                    <Button href="https://calendly.com/madison-kc-cleaners/30min" variant="primary" className="nav-cta" external onClick={closeMenu}>
                        Get a Quote
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
