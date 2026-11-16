"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Aplicación", href: "#usos" },
    { name: "Resultados", href: "#resultados" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#E8F3F8]/95  border-b border-[#8AB8C9]/25"
          : "bg-[#E8F3F8] "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Left: Brand Logo (Large, authentic colors) */}
        <a
          href="#inicio"
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A646] rounded-sm shrink-0"
          aria-label="HydraTerra By Andes GreenTech Inicio"
        >
          <img
            src="/images/logo_navbar.svg"
            alt="HydraTerra By Andes GreenTech"
            className="h-12 sm:h-13 md:h-14 w-auto max-w-[210px] sm:max-w-[245px] object-contain transition-transform duration-300"
          />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-sm sm:text-base font-semibold text-[#2C5E4F] tracking-normal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-[#58A646] transition-colors py-1 group whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop: Large SVG Button "Hablar con el equipo" with leaves */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#contacto"
            className="inline-block transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A646] rounded-sm"
            aria-label="Hablar con el equipo"
          >
            <img
              src="/images/btn_hablar_con_el_equipo.svg"
              alt="Hablar con el equipo"
              className="h-10 md:h-11 lg:h-12 w-auto object-contain drop-shadow-sm"
            />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-sm text-[#2C5E4F] hover:bg-[#58A646]/10 focus:outline-none"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className="text-sm font-semibold">{isMenuOpen ? "Cerrar" : "Menú"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#E8F3F8] border-b border-[#8AB8C9]/30 px-6 py-5 space-y-3.5 text-base font-semibold text-[#2C5E4F] overflow-hidden "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 hover:text-[#58A646] transition-colors border-b border-[#8AB8C9]/20"
              >
                {link.name}
              </a>
            ))}

            {/* SVG Button in Mobile Menu (Placed below all links) */}
            <div className="pt-4 pb-2 flex justify-center">
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A646] rounded-sm"
                aria-label="Hablar con el equipo"
              >
                <img
                  src="/images/btn_hablar_con_el_equipo.svg"
                  alt="Hablar con el equipo"
                  className="h-11 sm:h-12 w-auto max-w-[260px] object-contain drop-shadow-sm"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
