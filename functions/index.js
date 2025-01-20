const logger = require("firebase-functions/logger");
const { onRequest } = require("firebase-functions/v2/https");
const nodemailer = require("nodemailer");

exports.sendEmail = onRequest(
    { secrets: ["EMAIL_OUTLOOK_USER", "EMAIL_OUTLOOK_PASS"] }, // Declare secrets
    (req, res) => {
        const emailUser = process.env.EMAIL_OUTLOOK_USER; // Access the secret value
        const emailPass = process.env.EMAIL_OUTLOOK_PASS;

        const transporter = nodemailer.createTransport({
            service: "Outlook",
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const { to, subject, text } = req.body;

        transporter
            .sendMail({
                from: emailUser,
                to,
                subject,
                text,
            })
            .then(() => res.status(200).send("Email sent successfully!"))
            .catch((error) => {
                console.error("Error sending email:", error);
                res.status(500).send("Failed to send email");
            });
    }
);
