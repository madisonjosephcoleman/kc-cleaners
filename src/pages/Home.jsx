import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import useScrollReveal from '../hooks/useScrollReveal';
import './Home.css';

const services = [
    {
        title: "Office Cleaning",
        description: "Keep your workplace spick and span, so you can focus on what's important while we take care of the mess.",
        icon: "🏢"
    },
    {
        title: "Carpet & Rug Cleaning",
        description: "Say goodbye to stains and hello to freshness with our expert carpet cleaning service.",
        icon: "🧶"
    },
    {
        title: "Window Cleaning",
        description: "Attain a flawless, streak-free shine for your windows through our professional window services.",
        icon: "🪟"
    },
    {
        title: "Floor Maintenance",
        description: "Renew and safeguard your floors through expert stripping, waxing, and ongoing maintenance.",
        icon: "✨"
    },
    {
        title: "Parking Lot Cleanup",
        description: "Maintain a clean and safe parking environment for the well-being of your team and customers.",
        icon: "🚗"
    },
    {
        title: "Industrial Cleaning",
        description: "Tailored cleaning solutions specifically designed for manufacturing and production facilities.",
        icon: "🏭"
    }
];

const testimonials = [
    {
        quote: "KC Cleaners transformed our office. The consistency and attention to detail is something we've never experienced with previous cleaning services.",
        name: "Sarah M.",
        role: "Office Manager, Overland Park"
    },
    {
        quote: "We switched to KC Cleaners six months ago and haven't looked back. Their team is professional, reliable, and genuinely cares about the quality of their work.",
        name: "James R.",
        role: "Facility Director, Lenexa"
    },
    {
        quote: "What sets them apart is the communication. If there's ever an issue, they're on it before I even have to reach out. Truly a partner, not just a vendor.",
        name: "Patricia L.",
        role: "Property Manager, Kansas City"
    }
];

const Home = () => {
    const pageRef = useScrollReveal();

    return (
        <div className="home-wrapper" ref={pageRef}>
            <Navbar />

            {/* Hero Section */}
            <header id="main-content" className="hero">
                <div className="hero-bg-accent"></div>
                <div className="container hero-container">
                    <div className="hero-content fade-in-up">
                        <h1 className="hero-title">
                            Premium Commercial Cleaning for <span className="text-gradient">the Kansas City Metro</span>
                        </h1>
                        <p className="hero-subtitle delay-1">
                            Your long-term partner for janitorial services. We keep your facility spotless so you can focus on growth.
                        </p>
                        <div className="hero-actions delay-2">
                            <Button href="#booking" variant="glow">
                                Book a Walkthrough
                            </Button>
                            <Button href="mailto:madison@kc-cleaners.com" variant="secondary">
                                Email Us
                            </Button>
                        </div>
                    </div>
                    <div className="hero-image-wrapper fade-in-up delay-3">
                        <img src="/images/slick-office-cleaning.png" alt="Pristine professional office space in Kansas City" className="hero-image" />
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section id="services" className="section services-section">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2>Our Services</h2>
                        <p>Comprehensive cleaning solutions tailored for professional environments.</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="glass-card service-card reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="section testimonials-section">
                <div className="container">
                    <div className="section-header text-center reveal">
                        <h2>What Our Clients Say</h2>
                        <p>Trusted by businesses across the Kansas City Metro.</p>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <blockquote key={index} className="glass-card testimonial-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                                <footer className="testimonial-author">
                                    <cite className="testimonial-name">{testimonial.name}</cite>
                                    <span className="testimonial-role">{testimonial.role}</span>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="why-us" className="section why-us-section">
                <div className="container">
                    <div className="why-us-grid">
                        <div className="why-us-content reveal">
                            <h2>What Sets Us Apart</h2>
                            <p className="lead">We don't just empty trash cans. We provide a tailored, highly-communicative cleaning partnership designed specifically for modern Kansas professional spaces.</p>

                            <div className="benefit-item">
                                <div>
                                    <h4>Proactive Communication</h4>
                                    <p>Direct communication with our team leads. We anticipate and fix issues before you ever have to ask.</p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div>
                                    <h4>Vetted, Consistent Crews</h4>
                                    <p>No rotating door of strangers. Our highly-trained, background-checked staff provide consistent quality every visit.</p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <div>
                                    <h4>Eco-Friendly, Modern Equipment</h4>
                                    <p>We use state-of-the-art HEPA filtration vacuums and hospital-grade, environmentally responsible cleaning agents.</p>
                                </div>
                            </div>
                        </div>
                        <div className="why-us-visual reveal" style={{ transitionDelay: '0.15s' }}>
                            <div className="glass-panel visual-card">
                                <div className="visual-overlay">
                                    <h3>Consistent.<br />Clean.<br />Comfortable.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking / CTA Section */}
            <section id="booking" className="section booking-section">
                <div className="container booking-container glass-card reveal">
                    <div className="booking-content">
                        <h2>Ready for a spotless office?</h2>
                        <p>Schedule a no-obligation walkthrough and get a free quote for your commercial space today.</p>

                        <div className="contact-methods">
                            <Button href="mailto:madison@kc-cleaners.com" variant="secondary">
                                Email Us
                            </Button>
                        </div>
                    </div>

                    <div className="booking-widget">
                        {/* Calendly Inline Widget Embed */}
                        <div className="glass-panel calendly-placeholder reveal" style={{ transitionDelay: '0.1s' }}>
                            <h3>Book a Consultation</h3>
                            <Button href="#" variant="primary" onClick={(e) => {
                                e.preventDefault();
                                alert('Calendly widget would open here');
                            }}>
                                Book a Quote
                            </Button>
                            <p>Find a time that works for you</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
