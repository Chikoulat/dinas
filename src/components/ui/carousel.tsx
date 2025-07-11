"use client";
import {IconArrowNarrowRight} from "@tabler/icons-react";
import React, {useState, useRef, useId, useEffect} from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

interface SlideData {
    title: string;
    button: string;
    src: string;
    specialties: string[];
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({slide, index, current, handleSlideClick}: SlideProps) => {
    const t = useTranslations("Countries");
    const r = useTranslations("Specialities");
    const slideRef = useRef<HTMLLIElement>(null);

    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;

            const x = xRef.current;
            const y = yRef.current;

            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);

            frameRef.current = requestAnimationFrame(animate);
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMouseMove = (event: React.MouseEvent) => {
        const el = slideRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.style.opacity = "1";
    };

    const {src, title, specialties} = slide;

    return (
        <div className="xl:[perspective:1200px] [transform-style:preserve-3d] xl:w-[120%] xl:h-[120%] overflow-hidden">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 group"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? "scale(0.98) rotateX(8deg)"
                            : "scale(1) rotateX(0deg)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transformOrigin: "bottom",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#1D1F2F] rounded-[1%] transition-all duration-150 ease-out py-6"
                    style={{
                        transform:
                            current === index
                                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                                : "none",
                    }}
                >
                    <Image
                        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                        style={{
                            opacity: current === index ? 1 : 0.5,
                        }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="eager"
                        decoding="sync"
                        width={1100}
                        height={1100}
                    />
                    {current === index && (
                        <div className="absolute inset-0 bg-black/30 transition-all duration-1000"/>
                    )}
                </div>

                <article
                    className={`relative bottom-25 lg:bottom-40 transition-opacity duration-1000 ease-in-out ${
                        current === index ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
                        {t(title)}
                    </h2>
                </article>

                {/* Specialties List */}
                <ul
                    className="absolute bottom-[-100%] left-0 w-full bg-black/70 text-white text-sm lg:text-lg p-4 xl:space-y-2 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500 ease-in-out"
                >
                    {specialties.map((specialty, i) => (
                        <li key={i}>{r(specialty)}</li>
                    ))}
                </ul>
            </li>
        </div>
    );
};

interface CarouselControlProps {
    type: string;
    title: string;
    handleClick: () => void;
}

const CarouselControl = ({
                             type,
                             title,
                             handleClick,
                         }: CarouselControlProps) => {
    return (
        <button
            className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
                type === "previous" ? "rotate-180" : ""
            }`}
            title={title}
            onClick={handleClick}
        >
            <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200"/>
        </button>
    );
};

interface CarouselProps {
    slides: SlideData[];
}

export default function Carousel({slides}: CarouselProps) {
    const [current, setCurrent] = useState(1);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index: number) => {
        if (current !== index) {
            setCurrent(index);
        }
    };

    const id = useId();

    return (
        <div
            className="carousel-class relative size-[70vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
        >
            <ul
                className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick}
                    />
                ))}
            </ul>

            <div className="absolute z-20 flex justify-center w-full top-[calc(100%+1rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />

                <CarouselControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>
        </div>
    );
}
