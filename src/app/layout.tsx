import React from "react";
import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
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

    return (
        <html lang={locale}>
        <head>
            <title>{metadata.title as string}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={metadata.description as string}/>
            <meta name="keywords" content={metadata.keywords as string}/>
        </head>

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased 2xl:w-[80%] 2xl:mx-auto`}
        >
        <DirectionHandler locale={locale} />
        <NextIntlClientProvider>
            <Navbar/>
            {/* The QueryProvider is used to provide the query client to the application. */}
            <QueryProvider>{children}</QueryProvider>
            <Footer/>
        </NextIntlClientProvider>

        </body>
        </html>
    )
        ;
}

