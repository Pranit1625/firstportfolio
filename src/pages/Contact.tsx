import React from "react";
import "./Contact.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setName, setEmail, setMessage, submitForm } from "../store/contactslice";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const { name, email, message, status } = useSelector(
    (state: RootState) => state.contact
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitForm() as any);
  };

  return (
    <section className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Let’s connect and bring your creative ideas to life!</p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="contact-detail">
            <FaMapMarkerAlt /> <span>123 Main Street, Dublin</span>
          </div>
          <div className="contact-detail">
            <FaEnvelope /> <span>pranitmahamuni@gmail.com</span>
          </div>
          <div className="contact-detail">
            <FaPhoneAlt /> <span>+353 89 123 4567</span>
          </div>
          <div className="contact-detail">
            <FaInstagram /> <span>@pranitdesigns</span>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => dispatch(setMessage(e.target.value))}
            required
          ></textarea>
          <button type="submit" className="contact-btn" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-text">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-text">❌ Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;