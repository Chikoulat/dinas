'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import logoBlue from '../../public/logo/DCA LOGO B.png';
import logoWhite from '../../public/logo/DCA LOGO WHITE.png';
import openWhite from '../../public/button/open-white.png';
import openBlue from '../../public/button/open-blue.png';
import closeWhite from '../../public/button/close-white.png';
import closeBlue from '../../public/button/close-blue.png';
import {usePathname} from 'next/navigation';
import Link from "next/link";
import {useTranslations} from "next-intl";
import Languages from "@/data/Language.json";
import Cookies from 'js-cookie';
import {useRouter} from 'next/navigation';

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

const getNavbarClasses = (scroll: boolean, isHomePage: boolean, isContactPage: boolean, isBlog: boolean) => {
    if (scroll && isHomePage) return 'bg-white text-primary';
    if (isContactPage) return 'bg-gray-800 text-white';
    if (isBlog) return 'bg-black text-white';
    return 'bg-transparent text-white';
};

const renderLogo = (scroll: boolean, isHomePage: boolean) => {
    return scroll && isHomePage ? (
        <Image src={logoBlue} alt="logo" className="size-12 lg:size-20"/>
    ) : (
        <Image src={logoWhite} alt="logo" className="size-12 lg:size-20"/>
    );
};

const renderMobileMenu = (isOpen: boolean, scroll: boolean, handleToggle: () => void, isHomePage: boolean) => {
    return (
        <button
            type="button"
            onClick={handleToggle}
            className="transition-all duration-1000 lg:hidden"
        >
            {isOpen ? (
                <Image
                    src={scroll && isHomePage ? closeBlue : closeWhite}
                    alt="close"
                    className="transition-img"
                    style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}
                    width={40} height={40}
                />
            ) : (
                <Image
                    src={scroll && isHomePage ? openBlue : openWhite}
                    alt="open"
                    className="transition-img"
                    style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}
                    width={40} height={40}
                />
            )}
        </button>
    );
};

export default function Navbar() {
    const t = useTranslations("Navbar");
    const router = useRouter();
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/home'
    const isContactPage = pathname === '/contact';
    const isBlog = pathname === '/blog' || pathname.startsWith('/blog/');
    const is404 = pathname === '/**';
    const [language, setLanguage] = useState('');

    useEffect(() => {
        const savedLocale = Cookies.get('locale');
        if (savedLocale) {
            setLanguage(savedLocale);
        }
    }, []);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;
        setLanguage(newLocale);
        Cookies.set("locale", newLocale, {expires: 365});
        router.refresh();
    };

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = getNavbarClasses(scroll, isHomePage, isContactPage, isBlog);

    return (
        <header
            className={`flex justify-between px-5 py-2 fixed w-full transition-colors duration-300 z-50 ${navbarClasses} ${is404 ? 'hidden' : ''} `}
        >

            <div className="flex items-center gap-8">
                <a href={`${isHomePage ? '#home' : '/home'}`}
                   onClick={(e) => isHomePage && handleScrollToSectionAction(e, 'home')}>
                    {renderLogo(scroll, isHomePage)}
                </a>
                <select
                    value={language}
                    onChange={handleLanguageChange}
                    className={`${scroll && isHomePage ? "border border-black" : "bg-gray-100"} text-black rounded px-4 py-2`}
                >
                    {Languages.map((lang) => (
                        <option key={lang.id} value={lang.code}>
                            {t(lang.language)}
                        </option>
                    ))}
                </select>
            </div>
            <Link href="/contact" className="hidden lg:block">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    {t("Contact")}
                </button>
            </Link>
            <ul className="hidden lg:!flex lg:items-center lg:gap-10">
                {isHomePage && (
                    <>
                        <li>
                            <a href="#about" onClick={(e) => handleScrollToSectionAction(e, 'about')}>
                                {t("À propos")}
                            </a>
                        </li>
                        <li>
                            <a href="#countries" onClick={(e) => handleScrollToSectionAction(e, 'countries')}>
                                {t("Pays")}
                            </a>
                        </li>
                    </>
                )}
                {/* <li><Link href="/blog">Blog</Link></li> */}
                <li><Link href="/contact">{t("Contact")}</Link></li>
            </ul>
            {
                renderMobileMenu(isOpen, scroll, () => setIsOpen(!isOpen), isHomePage)
            }
            {
                isOpen && (
                    <ul
                        className={`transition-menu fixed top-16 right-0 w-full space-y-3 p-5 text-lg ${scroll && isHomePage ? 'bg-white text-primary z-20' : 'bg-gray-800 text-white'}`}
                        style={{
                            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                            transition: 'transform 0.5s ease-in-out',
                        }}
                    >
                        {isHomePage && (
                            <>
                                <li>
                                    <a href="#about" onClick={(e) => handleScrollToSectionAction(e, 'about')}>
                                        {t("À propos")}
                                    </a>
                                </li>
                                <li>
                                    <a href="#countries" onClick={(e) => handleScrollToSectionAction(e, 'countries')}>
                                        {t("Pays")}
                                    </a>
                                </li>
                            </>
                        )}
                        {/* <li><Link href="/blog">Blog</Link></li> */}
                        <li><Link href="/contact">{t("Contact")}</Link></li>
                    </ul>
                )}
        </header>
    );
}
