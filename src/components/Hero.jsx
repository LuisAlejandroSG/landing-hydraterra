"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#E8F3F8]"
    >
      {/* Background Image: Seedling with translucent hydrogel pearls in soil & blurred forest */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_right] sm:bg-right md:bg-[center_right_15%]"
        style={{
          backgroundImage: "url('/images/hero-clean-bg.jpg')",
        }}
      />

      {/* Difuminado / Gradient overlay: Soft solid #E8F3F8 on the left, smoothly blending to transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E8F3F8] via-[#E8F3F8]/95 sm:via-[#E8F3F8]/85 md:via-[#E8F3F8]/60 to-transparent pointer-events-none" />

      {/* Main Content (Left aligned, exactly matching the screenshot) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 sm:px-14 lg:px-20 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl md:max-w-2xl text-left"
        >
          {/* Main Display Heading in After Font */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-[#154726] leading-[1.06] tracking-wider mb-5" >
            Hydraterra,
            <br />
            retenedor de humedad
            <br />
            de origen vegetal.
          </h1>

          {/* Subtitle */}
          <div className="mb-8 space-y-1">
            <p className="font-bold text-xl sm:text-2xl md:text-[26px] text-[#154726] leading-snug">
              Absorbe, retiene y libera
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#2C5E4F] font-normal leading-snug">
              el agua cuando la planta lo necesita.
            </p>
          </div>

          {/* Action Buttons matching screenshot */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
            {/* SVG Leaf Banner Button "Ver cómo se aplica" */}
            <a
              href="#usos"
              className="inline-block transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58A646] rounded-sm"
              aria-label="Ver cómo se aplica"
            >
              <img
                src="/images/btn_ver_como_se_aplica.svg"
                alt="Ver cómo se aplica"
                className="h-11 sm:h-12 md:h-13 lg:h-14 w-auto object-contain drop-shadow-sm"
              />
            </a>

            {/* Grey pill button "Escribir a AndesGreenTech" */}
            <a
              href="#contacto"
              className="border border-[#154726] text-[#154726] hover:bg-[#154726] hover:text-white text-sm sm:text-base font-semibold px-5 py-2.5 sm:py-3 rounded-sm transition-colors flex items-center justify-center"
            >
              Escribir a AndesGreenTech
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
