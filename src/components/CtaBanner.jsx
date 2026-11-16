"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#3FA9D6] rounded-sm p-8 sm:p-10 text-center text-white  relative overflow-hidden"
      >
        {/* Subtle decorative water wave sheen */}

        <div className="relative z-10 inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-sm text-white text-xs sm:text-sm font-semibold mb-3 border border-white/20">
          <span>Soluciones para Agro y Reforestación</span>
        </div>

        <h2 className="relative z-10 font-sans font-extrabold text-xl sm:text-2xl md:text-3xl leading-snug max-w-xl mx-auto mb-3">
          ¿Quieres incorporar HydraTerra en tu proceso productivo?
        </h2>

        <p className="relative z-10 text-white/95 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed font-normal">
          Solicita asesoría técnica personalizada, protocolos de ensayo en campo o formatos industriales para proyectos agrícolas y forestales a gran escala.
        </p>

        <div className="relative z-10 flex flex-wrap justify-center items-center gap-3.5">
          <a
            href="#contacto"
            className="bg-[#D4A843] hover:bg-[#C89D3C] text-[#154726] font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-sm  transition-all  inline-flex items-center gap-2"
          >
            <span>Cotizar ahora</span>
          </a>
          <a
            href="#contacto"
            className="bg-[#154726] hover:bg-[#1e5c33] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-sm  transition-all  inline-flex items-center gap-2"
          >
            <span>Hablar con ventas</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
