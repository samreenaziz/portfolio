"use server";
import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY); // access resend

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server")
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"))

    resend.emails.send({
        from: "onboarding@resend.dev",
        to: "samreen.aaziz@gmail.com",
        subject: "Message from portfolio contact form",
        text: "Hello world",
    })
};
