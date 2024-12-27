"use server";
import {Resend} from "resend"
import { validateString, getErrorMessage } from "@/lib/utils"


const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("senderEmail")
    const senderMessage = formData.get("senderMessage")

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(senderMessage, 5000)) {
        return {
            error: "Invalid sender message"
        }
    }

    try {
        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "samreen.aaziz@gmail.com",
            subject: "Message from portfolio contact form",
            replyTo: senderEmail as string,
            text: senderMessage as string,
        });

        console.log("Email sent successfully:", response);
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
};
