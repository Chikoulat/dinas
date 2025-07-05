import React from 'react';
import {useTranslations} from "next-intl";
import slider from "@/data/slide.json";
import {ImagesSlider} from "@/components/ui/images-slider";

function Slider() {
    const t = useTranslations("Slider");
    return (
        <ImagesSlider images={slider} autoplay direction="up"
                      className="h-96 flex flex-col items-center gap-2 lg:h-[45rem] ">
            <h1 className="z-50 text-white text-xl lg:text-3xl">{t("Gérer votre carrière")}</h1>
            <p className="z-50 text-white px-8 text-sm lg:text-base lg:px-0">{t("Dinas vous aide dans vos démarches pour les études à l'étranger, commencez à remplir")}
                <a className="underline" target="_blank"
                   href="https://docs.google.com/forms/d/e/1FAIpQLSe9tG1BRBsV7l3Lc-wgHy4QFcFC4yv9o6FAnMTMR1BC0YzP7g/viewform"> {t("Ce formulaire")}</a> {t("Pour un accompagnement sur mesure")}</p>
        </ImagesSlider>
    );
}

export default Slider;