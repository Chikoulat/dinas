import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';

export interface EmailData {
    name: string;
    email: string;
    phone: string;
    company?: string;
    subject: string;
    message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
    const sanitizedData = {
        name: DOMPurify.sanitize(data.name),
        email: DOMPurify.sanitize(data.email),
        phone: DOMPurify.sanitize(data.phone),
        company: data.company ? DOMPurify.sanitize(data.company) : "",
        subject: DOMPurify.sanitize(data.subject),
        message: DOMPurify.sanitize(data.message),
    };

    const serviceID = process.env.NEXT_PUBLIC_API_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_API_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_API_PUBLIC_KEY as string;

    await emailjs.send(serviceID, templateID, sanitizedData, userID);
};