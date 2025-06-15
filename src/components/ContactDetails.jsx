import React, { useState } from "react";
import styles from './ContactDetails.module.css'

export default function ContactDetails() {
    return (
        <div className={styles.contactDetails}>
            <ul className={styles.contactFields}>
                <li className={styles.contactValues}>
                    Email: tanacwoodwork@gmail.com
                </li>
                <li className={styles.contactValues}>
                    Phone: 0435 157 530
                </li>
            </ul>
        </div>
    )
}