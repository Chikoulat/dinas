import React from "react";
import Home from "@/components/Home";
import {ImagesSlider} from "@/components/ui/images-slider";
import slider from "../../data/slide.json"
import About from "@/components/About";
import Countries from "@/components/Countries";

export default function Page() {

    return (
        <>
            <Home/>
            <ImagesSlider images={slider} autoplay direction="up" className="h-96 flex flex-col items-center gap-2 lg:h-[45rem] ">
                <h1 className="z-50 text-white text-xl lg:text-3xl">Gérer votre carrière dès maintenant.</h1>
                <p className="z-50 text-white px-8 text-sm lg:text-base lg:px-0">Dinas vous aide dans vos démarches pour les études à
                    l&#39;étranger, commencez à remplir <a className="underline" target="_blank"
                                                           href="https://docs.google.com/forms/d/e/1FAIpQLSe9tG1BRBsV7l3Lc-wgHy4QFcFC4yv9o6FAnMTMR1BC0YzP7g/viewform"> ce
                        formulaire</a> pour un accompagnement </p>
            </ImagesSlider>
            <About/>
            <Countries/>
        </>
    );
}
