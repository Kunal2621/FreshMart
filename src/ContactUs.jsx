import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function ContactUs() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 seconds
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Contact Details Section */}
                <div className="col-md-5 p-4 text-white rounded shadow" style={{ backgroundColor: "#004d40" }}>
                    <h3 className="mb-3 text-warning">Get in Touch</h3>
                    <p><FaEnvelope className="me-2" /> <strong>Email:</strong> Prajapati2621@gmail.com</p>
                    <p><FaPhone className="me-2" /> <strong>Phone:</strong>6263389977</p>
                    <p><FaMapMarkerAlt className="me-2" /> <strong>Address:</strong> 123 Green Street, Indore, India</p>
                    
                    <h5 className="mt-4">Follow Us</h5>
                    <div className="d-flex">
                        <a href="https://www.facebook.com/kunal.prajapati.988926" className="text-white me-3 fs-4"><FaFacebook /></a>
                        <a href="https://www.instagram.com/kunal_prajapati_57/" className="text-white me-3 fs-4"><FaInstagram /></a>
                        <a href="#" className="text-white fs-4"><FaTwitter /></a>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="col-md-6 p-4 shadow rounded bg-light ms-md-3">
                    <h4 className="text-success mb-3">Send Us a Message</h4>
                    {submitted && <div className="alert alert-success">Thank you for connecting! We will get back to you soon.</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Name</label>
                            <input type="text" className="form-control border-success" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input type="email" className="form-control border-success" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Message</label>
                            <textarea className="form-control border-success" rows="3" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Submit</button>
                    </form>
                </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-4 shadow p-3 rounded">
                <h4 className="text-primary text-center mb-3">Find Us Here</h4>
                <iframe 
                    title="Google Maps" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117972.49682502526!2d75.7578472041761!3d22.719568014579865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc29a6b0b5cf%3A0x9bd37f1a4ec3f4c2!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1644331234567" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0, borderRadius: "10px" }} 
                    allowFullScreen 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
}

export default ContactUs;
