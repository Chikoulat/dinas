'use client'

import React from 'react';
import FeaturesSectionDemo from "@/components/ui/features-section-demo-1";

function About() {
    return (
        <section className=" mx-auto my-4 space-y-8" id="about">
            <div>
                <h1 className="text-5xl text-center p-4">L&#39;Agence Dinas</h1>
                <p className="mx-auto px-10 lg:px-20 lg:w-[70%] lg:text-xl">
                    Dinas études & Immigration
                    Spécialiste de la mobilité internationale, nous guidons étudiants et professionnels algériens dans
                    leurs projets d’études, de travail ou d’immigration. De la sélection du programme à l’obtention du
                    visa, notre équipe simplifie chaque démarche académique, professionnelle et administrative.
                </p>
            </div>
            <FeaturesSectionDemo/>
        </section>
    );
}

export default About;