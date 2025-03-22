'use client';

import React from 'react';
import Image from "next/image";
import logo from "../../public/logo/DCA LOGO B.png";
import facebook from "../../public/social/facebook.png";
import instagram from "../../public/social/instagram.png";
import linkedin from "../../public/social/linkedin.png";
import telegram from "../../public/social/telegram.png";
import tiktok from "../../public/social/tiktok.png";
import whatsapp from "../../public/social/whatsapp.png";
import youtube from "../../public/social/youtube.png";
import {usePathname} from "next/navigation";

function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/home';
    const isContactPage = pathname === '/contact';
    return (
        <footer className={`space-y-3 p-4 bg-gray-200 ${ !isHomePage && !isContactPage ? 'hidden' : ''}`}>
            <div className="flex items-center gap-4">
                    <Image src={logo} alt="Logo" width={60} height={60} className="size-10"/>
                    <div className="flex flex-col space-x-5 lg:space-x-10 text-xs lg:text-base">
                        <a href="https://maps.app.goo.gl/tV1JQJxrYnVeGo4W7" target="_blank">Adresse: Cité 800 logements - Boumerdes</a>
                        <a href="tel:00000000">Téléphone: 000000000</a>
                    </div>
            </div>
          <div className="flex justify-between items-center gap-4">
              <p className="text-sm">© 2025 Dinas Company</p>
              <div className="flex gap-2">
              <a href="https://www.facebook.com/share/12AFNhmMjaD/" target="_blank"> <Image src={facebook} alt="facebook" className="size-6 lg:size-12"/></a>
              <a href="https://instagram.com/dinascompanyalgeria" target="_blank"> <Image src={instagram} alt="instagram" className="size-6 lg:size-12"/></a>
              <a href="https://www.linkedin.com/company/dinas-immigration/" target="_blank"> <Image src={linkedin} alt="linkedin" className="size-6 lg:size-12"/></a>
              <a href="https://@Dinasdz" target="_blank"> <Image src={telegram} alt="telegram" className="size-6 lg:size-12"/> </a>
              <a href="https://www.tiktok.com/@dinasmultimedia" target="_blank"> <Image src={tiktok} alt="tiktok" className="size-6 lg:size-12"/></a>
              <a href="https://api.whatsapp.com/send?phone=213549725876" target="_blank"> <Image src={whatsapp} alt="whatsapp" className="size-6 lg:size-12"/></a>
              <a href="https://www.youtube.com/@dinas_studies" target="_blank"> <Image src={youtube} alt="youtube" className="size-6 lg:size-12"/></a>
          </div>
          </div>

        </footer>
    );
}

export default Footer;