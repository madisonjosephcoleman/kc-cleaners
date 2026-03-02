import './Navbar.css';
import Button from './Button';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="nav-brand">
                    <a href="/" className="nav-logo-link">
                        <img src="/images/brand-logo-dark.svg" alt="KC Cleaners Logo" className="nav-main-logo" />
                    </a>
                </div>
                <div className="nav-links">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#why-us" className="nav-link">Why Us</a>
                    <Button href="#booking" variant="primary" className="nav-cta">
                        Get a Quote
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
