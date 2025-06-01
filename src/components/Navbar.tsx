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
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/home'
    const isContactPage = pathname === '/contact';
    const isBlog = pathname === '/blog' || pathname.startsWith('/blog/');
    const is404 = pathname === '/**';

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
            className={`flex justify-between px-5 py-2 fixed w-full transition-colors duration-300 z-50 ${navbarClasses} ${is404 ? 'hidden' : ''} 2xl:w-[80%]`}
        >
            <a href={`${isHomePage ? '#home' : '/home'}`}
               onClick={(e) => isHomePage && handleScrollToSectionAction(e, 'home')}>
                {renderLogo(scroll, isHomePage)}
            </a>
            <ul className="hidden lg:!flex lg:items-center lg:gap-10">
                {isHomePage && (
                    <>
                        <li>
                            <a href="#about" onClick={(e) => handleScrollToSectionAction(e, 'about')}>
                                À propos
                            </a>
                        </li>
                        <li>
                            <a href="#countries" onClick={(e) => handleScrollToSectionAction(e, 'countries')}>
                                Pays
                            </a>
                        </li>
                    </>
                )}
               {*/ <li><Link href="/blog">Blog</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>
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
                                        À propos
                                    </a>
                                </li>
                                <li>
                                    <a href="#countries" onClick={(e) => handleScrollToSectionAction(e, 'countries')}>
                                        Pays
                                    </a>
                                </li>
                            </>
                        )}
                       {/* <li><Link href="/blog">Blog</Link></li> */}
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                )}
        </header>
    );
}
