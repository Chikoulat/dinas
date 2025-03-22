'use client'

import React from 'react';

export default function Home() {
    const handleScrollToSectionAction = (
        event: React.MouseEvent,
        sectionId: string
    ) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="bg-gray-800 bg-no-repeat bg-center bg-contain xl:flex flex-col items-end"
        >
            <div className="text-white p-5 pt-20 xl:px-20 xl:py-40 xl:w-1/2">
                <h2 className="text-xl lg:text-3xl">
                    DINAS - Votre solution immigration en ligne
                </h2>
                <p className="mt-5 text-sm lg:text-base lg:text-justify">
                    <b>DINAS</b> est une plateforme en ligne qui vous permet de gérer vos démarches pour les études à l&#39;étranger, les visas, les permis de travail et de séjour, et bien plus encore. Nous vous accompagnons dans toutes les étapes de votre projet
                </p>
                <div className="flex justify-end gap-4">
                    <a
                        href="#about"
                        onClick={(event) => handleScrollToSectionAction(event, 'about')}
                        className="bg-blue-600 rounded-md mt-5 text-xs text-center text-white px-3 py-2 xl:py-2 xl:text-base"
                    >
                        En savoir plus
                    </a>
                    <a
                        href="/contact"
                        className="bg-blue-600 rounded-md mt-5 text-xs text-center text-white px-3 py-2 xl:py-2 xl:text-base"
                    >
                        Nous contacter
                    </a>
                </div>
            </div>
        </section>
    );
}
