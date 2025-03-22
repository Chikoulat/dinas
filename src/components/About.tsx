'use client'

import React from 'react';
import FeaturesSectionDemo from "@/components/ui/features-section-demo-1";

function About() {
    return (
        <section className=" mx-auto my-4 space-y-8" id="about">
            <div>
                <h1 className="text-5xl text-center p-4">L&#39;Agence Dina</h1>
                <p className="mx-auto px-10 lg:px-20 lg:w-[70%] lg:text-xl">
                    L&#39;Agence Dina est un acteur incontournable dans le domaine de l&#39;accompagnement des étudiants
                    algériens
                    souhaitant poursuivre leurs études à l&#39;étranger. Forte d&#39;une équipe de professionnels
                    expérimentés et
                    passionnés, notre agence s&#39;engage à guider chaque étudiant tout au long de son parcours, de la
                    recherche
                    d’une formation à l’obtention de son visa, en passant par la préparation aux exigences académiques
                    et
                    administratives.
                </p>
            </div>
            <FeaturesSectionDemo/>
        </section>
    );
}

export default About;