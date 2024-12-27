"use server";
import React from "react"
import {Resend} from "resend"
import { validateString, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"

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

    let data;
    try {
        data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "samreen.aaziz@gmail.com",
            subject: "Message from portfolio contact form",
            replyTo: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                senderMessage:senderMessage as string,
                senderEmail:senderEmail as string,
            })
        });
        if (data && data.error) {
            throw new Error(`Error from Resend API: ${data.error.message}`);
        }

    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    }
};
