import React from 'react';


const ContactSection = () => {
  return (
    <section className="contact">
      <div className="contact-card" id="card">
        <div className="contact-text">
          <h3>Let's get in touch!</h3>
          <p>Please don't hesitate to reach out for a (virtual) coffee.</p>
          <h4>My contact info:</h4>
          <p>PHONE: +47 98767493 | E-MAIL: julia@kalvikfoto.com</p>
        </div>
        <img src="/main-portrait-resized.png" alt="Julia Kalvik" />
        <div className="back-to-top">
          <a href="#nav">Back to top</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
