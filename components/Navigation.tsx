"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from "@/components/ui/resizable-navbar";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Apps", link: "/#apps" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo href="/" className="flex-shrink-0">
          <Image
            src="/images/hyaline-digital.png"
            alt="Hyaline Digital Logo"
            width={40}
            height={40}
            className="h-8 md:h-10 w-auto"
          />
        </NavbarLogo>
        <div className="flex justify-center items-center">
          <NavItems 
            items={navItems}
            className=""
          />
        </div>
        <div className="flex-shrink-0 w-[40px]"></div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo href="/" className="flex-shrink-0">
            <Image
              src="/images/hyaline-digital.png"
              alt="Hyaline Digital Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </NavbarLogo>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              className="text-base sm:text-[1.15rem] font-medium w-full py-2"
              style={{ color: '#121212' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
