import React from "react";
import Home from "@/components/Home";
import Slider from "@/components/Slider";
import About from "@/components/About";
import Countries from "@/components/Countries";


export default function Page() {
    return (
        <>
            <Home/>
            <Slider/>
            <About/>
            <Countries/>
        </>
    );
}
