// Hero.jsx
import React from 'react';

const Hero = () => {
    return (
        <section
            id='hero'
            className="hero d-flex align-items-center text-light"
            style={{
                minHeight: '90vh',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(120deg, #06172cff, #10274bff)'
            }}
        >

            <div className="container text-center text-md-start" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold hero-title">
                            Achieve Your Dream IELTS Score!
                        </h1>

                        <p className="lead my-4 hero-subtext" data-aos="fade-up" data-aos-delay="200">
                            Join our institute for expert guidance, <span className="highlight-text">AI scoring</span>, and mock tests to boost your band score.
                        </p>
                        <a href="#features" className="btn btn-warning btn-lg hero-btn" data-aos="zoom-in" data-aos-delay="400">Get Started</a>
                    </div>
                    <div className="col-md-6 text-center" data-aos="flip-left" data-aos-delay="600">
                        <img src="https://www.pngplay.com/wp-content/uploads/6/Education-Transparent-Free-PNG.png" alt="IELTS Banner" className="img-fluid hero-img floating-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
