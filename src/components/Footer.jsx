import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" aria-label="Site footer">
            <div className="container footer-grid">
                <div className="footer-brand fade-in-up">
                    <a href="/" className="footer-logo-link">
                        <img src="/images/brand-logo-dark.svg" alt="KC Cleaners Logo" className="footer-main-logo" />
                    </a>
                    <p className="footer-tagline">
                        Premium commercial cleaning solutions tailored for modern Kansas City workspaces.
                    </p>
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
