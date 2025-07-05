'use client'

import React from 'react';
import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");
    const handleScrollToSectionAction = (
        event: React.MouseEvent,
        sectionId: string
    ) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section
            id="home"
            className="bg-gray-800 bg-no-repeat bg-center bg-contain xl:h-80"
        >
            <div className="text-white p-5 pt-20 space-y-4 xl:space-y-0 xl:px-20 xl:py-40 xl:flex xl:justify-between">
                <div className="xl:w-1/2">
                    <h2 className="text-xl lg:text-3xl">
                        {t("Dinas Studies & Immigration")}
                    </h2>
                    <p className="mt-5 text-sm lg:text-base lg:text-justify">
                        {t("Concrétiser votre projet")}
                    </p>
                </div>
                <div className="flex items-center justify-evenly xl:gap-10">
                    <a
                        href="#about"
                        onClick={(event) => handleScrollToSectionAction(event, 'about')}
                        className="bg-blue-600 rounded-md mt-5 text-xs text-center text-white px-3 py-2 xl:py-2 xl:text-base"
                    >
                        {t("En savoir plus")}
                    </a>
                    <a
                        href="/contact"
                        className="bg-blue-600 rounded-md mt-5 text-xs text-center text-white px-3 py-2 xl:py-2 xl:text-base"
                    >
                        {t("Contactez-nous")}
                    </a>
                </div>
            </div>
        </section>
    );
}
