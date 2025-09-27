import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer" data-aos="fade-up">
      <div className="bubbles">
        {[...Array(10)].map((_, i) => <span key={i} className="bubble"></span>)}
      </div>

      <div className="container text-center footer-content">
        <p className="glow-text">© 2025 IELTS Pro Institute. All rights reserved.</p>
        <p className="glow-text">Email: info@ieltspro.com | Phone: +91 9876543210</p>
      </div>
    </footer>
  );
};

export default Footer;
