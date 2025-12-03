import React from "react";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getLocale} from 'next-intl/server';
import QueryProvider from "@/service/QueryProvider";
import DirectionHandler from "@/service/DirectionHandler";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Dinas studies & immigration",
    description: "Votre partenaire pour vous accompagner à l’international",
    keywords: [
        "Study Abroad", "Immigration Services", "International Education", "Student Visa",
        "Global Opportunities", "Educational Consultancy", "Academic Programs",
        "Cultural Exchange", "University Admissions", "Career Development",
        "Étudier à l'étranger", "Services d'immigration", "Éducation internationale",
        "Visa étudiant", "Opportunités mondiales", "Conseil en éducation",
        "Programmes académiques", "Échange culturel", "Admissions universitaires",
        "Développement de carrière",
        "الدراسة في الخارج", "خدمات الهجرة", "التعليم الدولي", "تأشيرة الطالب",
        "الفرص العالمية", "الاستشارات التعليمية", "البرامج الأكاديمية",
        "التبادل الثقافي", "قبول الجامعات", "تطوير المسار المهني",
    ],
};

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <NextIntlClientProvider locale={locale} messages={messages}>
            <DirectionHandler locale={locale}/>
            <Navbar/>
            <QueryProvider>{children}</QueryProvider>
            <Footer/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
