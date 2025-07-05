"use client";

import { useEffect } from "react";

export default function DirectionHandler({ locale }: { locale: string }) {
    useEffect(() => {
        if (locale === "ar") {
            const carousel = document.querySelector(".carousel-class"); // Replace with your Carousel's class
            if (carousel) {
                carousel.setAttribute("dir", "ltr");
            }
            document.documentElement.dir = "rtl";
        } else {
            document.documentElement.dir = "ltr";
        }
    }, [locale]);

    return null;
}