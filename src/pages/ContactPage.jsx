// ContactPage.jsx
import React from "react";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <ContactDetails />
            <ContactForm />
        </div>
    );
}
