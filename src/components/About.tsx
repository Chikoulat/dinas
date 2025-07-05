'use client'

import React from 'react';
import FeaturesSectionDemo from "@/components/ui/features-section-demo-1";
import {useTranslations} from "next-intl";

function About() {
    const t = useTranslations("About");
    return (
        <section className=" mx-auto my-4 space-y-8" id="about">
            <div>
                <h1 className="text-5xl text-center p-4">{t("L'Agence Dinas")}</h1>
                <p className="mx-auto px-10 lg:px-20 lg:w-[70%] lg:text-xl">
                    {t("Dinas Studies & Immigration")} <br/>
                    {t("Dinas")}
                </p>
            </div>
            <FeaturesSectionDemo/>
        </section>
    );
}

export default About;