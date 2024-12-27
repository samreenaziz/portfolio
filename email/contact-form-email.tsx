import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components"

import {Tailwind } from "@react-email/tailwind"

type ContactFormEmailProps = {
    senderMessage:string,
    senderEmail:string,
}

export default function ContactFormEmail({senderMessage, senderEmail} : ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview className="text-xl font-semibold text-indigo-600">🌟 Exciting News! You've Got a New Message from a Portfolio Visitor! 🌟</Preview>
        <Body className = "bg-gray-100">
            <Container className="px-4 py-6 bg-gray-100">
                <Section className="bg-white shadow-lg rounded-lg p-6">
                    <Heading className="text-3xl font-bold text-pink-600 mb-4 leading-tight">🎉 Hooray! You've Got a New Message!</Heading>
                    <Text className="text-lg leading-relaxed mb-4 text-gray-950">A visitor just reached out through your contact form and wants to connect with you. Here’s what they had to say:</Text>
                    <Text className="text-lg italic mb-4">“{senderMessage}”</Text>
                    <Hr className="border-t-2 border-pink-500 mb-4" />
                    <Text className="text-lg font-semibold">This email was sent from: <span className="text-blue-500">{senderEmail}</span></Text>
                </Section>
            </Container>
        </Body>
    </Html>


  )
}

