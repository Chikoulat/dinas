import React from 'react';
import countries from '@/data/countries.json';
import Carousel from "@/components/ui/carousel";
import {useTranslations} from "next-intl";

function Countries() {
    const t = useTranslations("Countries");
    return (
        <section id="countries" className="space-y-4 h-[30rem] lg:h-screen overflow-x-hidden">
            <h1 className="text-2xl lg:text-5xl text-center lg:pb-5">{t("Une Séléction de pays pour construire votre futur carrière")}</h1>
            <Carousel slides={countries}/>
        </section>
    );
}

export default Countries;