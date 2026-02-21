import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { pageVariants, pageTransition } from "../animationVariants";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const [status, setStatus] = useState("idle");
  // idle | sending | success | error


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");


    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formData,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });


        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      })
      .catch(() => {
        setStatus("error");


        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      });
  };


  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
    >
      <div className="page-content">
        <h1>Contact Me</h1>


        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />


          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />


          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>


          {/* Success / Error Feedback */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="form-success"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}


          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="form-error"
            >
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}
        </form>
      </div>
    </motion.div>
  );
}


export default Contact;