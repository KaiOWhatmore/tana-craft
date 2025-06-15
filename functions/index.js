// functions/index.js
const { onRequest } = require("firebase-functions/v2/https");
const { defineString, defineSecret } = require("firebase-functions/params");
const corsFactory = require("cors");
const nodemailer = require("nodemailer");

// define params/secrets
const gmailAddr = defineString("GMAIL_ADDR");
const gmailPass = defineSecret("GMAIL_PASS");

// setup CORS
const corsHandler = corsFactory({
    origin: ["https://www.tanacraft.com", "http://localhost:3000"]
});

exports.sendEmail = onRequest(
    { region: "us-central1", secrets: [gmailPass] },
    async (req, res) => {
        // handle preflight
        if (req.method === "OPTIONS") {
            res.set("Access-Control-Allow-Origin", "*");
            res.set("Access-Control-Allow-Methods", "POST");
            res.set("Access-Control-Allow-Headers", "Content-Type");
            return res.status(204).end();
        }

        corsHandler(req, res, async () => {
            if (req.method !== "POST") {
                return res.status(405).send("Only POST allowed");
            }

            const { firstName, lastName, email, phone, message } = req.body;

            // create transporter at runtime
            const transporter = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    user: gmailAddr.value(),
                    pass: gmailPass.value(),
                },
            });

            try {
                await transporter.sendMail({
                    from: `"Site Contact" <${email}>`,
                    to: "tanacwoodwork@gmail.com",
                    subject: `New message from ${firstName} ${lastName}`,
                    text: `${message}\n\nPhone: ${phone}`,
                });
                res.json({ success: true });
            } catch (err) {
                console.error("Mail error", err);
                res.status(500).json({ error: "Failed to send" });
            }
        });
    }
);
