"use server";
import {Resend} from "resend"


const resend = new Resend(process.env.RESEND_API_KEY); // access resend

const validateString = (value: unknown) => {
    if (!value || typeof value !== "string") {
        return false
    }
    return true
}

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("senderEmail")
    const senderMessage = formData.get("senderMessage")

    if (!validateString(senderEmail)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(senderMessage)) {
        return {
            error: "Invalid sender message"
        }
    }

    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "samreen.aaziz@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail,
            text: senderMessage,
        });

        console.log("Email sent successfully:", response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
