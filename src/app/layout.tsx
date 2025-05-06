import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Dinas studies & immigration</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>

        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased 2xl:w-[80%] 2xl:mx-auto`}
        >
      <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
