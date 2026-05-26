import React, { useState } from "react";
import styles from "./Contact.module.css";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import Footer from "../components/footer/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Thank you for reaching out. We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const { name, email, subject, message } = formData;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </header>

      <main>
        <section className={styles.heroSection} aria-label="Contact header">
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              We consider all the drivers of change, giving you the components
              you need to create a truly happy experience.
            </p>
          </div>

          <div className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={styles.input}
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={styles.input}
                    placeholder="Enter email address"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroupFull}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={styles.input}
                  placeholder="Write a subject"
                  value={subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroupFull}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Write your message"
                  value={message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send
              </button>
            </form>
          </div>
        </section>

        <section className={styles.infoSection} aria-label="Contact details">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Call Us</h3>
              <p className={styles.infoPrimary}>(+91)9898989090</p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Hours</h3>
              <p className={styles.infoLine}>Mon-Fri: 8am - 9pm</p>
              <p className={styles.infoLine}>Sat-Sun: 9am - 10pm</p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Our Location</h3>
              <p className={styles.infoLine}>123 Bridge Street</p>
              <p className={styles.infoLine}>New York, NY 12345</p>
              <p className={styles.infoLine}>United States</p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

