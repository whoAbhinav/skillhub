import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>© 2025 SkillHub. All Rights Reserved.</p>
            <div class="footer-contact">
      <h3>Contact Us:</h3>
      <p><i class="fa-solid fa-envelope"></i> Email: skillhub@gmail.com</p>
      <p><i class="fa-solid fa-phone"></i> Phone: +91 9972143214</p>
      <p><i class="fa-solid fa-location-dot"></i> Address: Bangalore, India</p>
    </div>
        </footer>
    );
};

export default Footer;