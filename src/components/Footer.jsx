import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" aria-label="Site footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="/" className="footer-logo-link">
                        <img src="/images/brand-logo-dark.svg" alt="KC Cleaners Logo" className="footer-main-logo" />
                    </a>
                    <p className="footer-tagline">
                        Premium commercial cleaning solutions tailored for modern Kansas City workspaces.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#why-us">Why Us</a></li>
                            <li><a href="https://calendly.com/madison-kc-cleaners/30min" target="_blank" rel="noopener noreferrer">Book a Quote</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="tel:9137422536">913-742-2536</a></li>
                            <li><a href="mailto:madison@kc-cleaners.com">madison@kc-cleaners.com</a></li>
                            <li>Kansas City Metro Area</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} KC Cleaners. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
