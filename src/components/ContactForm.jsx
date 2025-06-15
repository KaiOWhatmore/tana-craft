import React, { useState } from "react";
import classNames from "classnames";
import styles from "./ContactForm.module.css"; // Import CSS module

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formValues;

    if (!email || !message) {
      setErrorMessage("Email and Message fields are required.");
      return;
    }

    try {
      // Replace with your Firebase Function URL
      const functionUrl =
        "https://sendemail-dqksttu4gq-uc.a.run.app";

      const response = await fetch(functionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Contact us - We'd love to hear from you</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={classNames(styles.group, styles.groupFirstName)}>
            <label className={styles.label}>First name</label>
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              placeholder="First name"
              className={styles.input}
            />
          </div>
          <div className={classNames(styles.group, styles.groupLastName)}>
            <label className={styles.label}>Last name</label>
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className={styles.input}
            />
          </div>
        </div>
        <div className={classNames(styles.group, styles.groupEmail)}>
          <label className={styles.label}>Email *</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
            className={styles.input}
            required
          />
        </div>
        <div className={classNames(styles.group, styles.groupPhone)}>
          <label className={styles.label}>Phone</label>
          <input
            type="text"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={styles.input}
          />
        </div>
        <div className={classNames(styles.group, styles.groupMessage)}>
          <label className={styles.label}>Message *</label>
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Message"
            rows="4"
            className={styles.textarea}
            required
          />
        </div>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
