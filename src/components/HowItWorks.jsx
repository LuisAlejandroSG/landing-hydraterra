"use client";

import { motion } from "framer-motion";

export default function HowItWorks({ onOpenModal }) {
  const steps = [
    {
      text: "Al hidratarse, forma un gel que almacena agua y nutrientes de manera gradual según sus raíces lo soliciten.",

    },
    {
      text: "Mantiene un nivel de humedad óptimo, soportando el estrés hídrico y períodos prolongados sin riego.",

    },
    {
      text: "Se biodegrada e integra como materia orgánica al final de su vida útil, sin generar residuos perjudiciales.",

    },
  ];

  return (
    <section id="como-funciona" className="py-6 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Title with top divider */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-[#2C5E4F]/25 pt-6 pb-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#2C5E4F] tracking-wide">
          ¿Cómo funciona?
        </h2>
      </motion.div>

      {/* Asymmetric 2-Column Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Tall Green Interactive Video/Animation Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="sm:col-span-5"
        >
          <button
            onClick={() => onOpenModal && onOpenModal("video", "animacion")}
            className="w-full h-full min-h-[280px] sm:min-h-[330px] bg-[#58A646] hover:bg-[#478c37] rounded-sm p-6 flex flex-col items-center justify-center relative overflow-hidden  group transition-all focus:outline-none cursor-pointer"
          >
            {/* Subtle decorative ripple rings */}

            {/* Center icon badge */}
            

            <span className="relative z-10 mt-4 text-white text-sm sm:text-base font-bold tracking-wide text-center">
              Ver ciclo de acción en el suelo
            </span>
            <span className="relative z-10 mt-1.5 text-white/90 text-xs sm:text-sm text-center font-medium bg-black/10 px-3 py-1 rounded-sm">
              Clic para simular absorción
            </span>
          </button>
        </motion.div>

        {/* Right Column: 3 Stacked Dark Forest Green Step Cards */}
        <div className="sm:col-span-7 flex flex-col justify-between gap-4">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="bg-[#154726] rounded-sm p-5 sm:p-6 flex items-center gap-4 text-left  flex-1 hydra-card cursor-default"
            >
              
              <p className="text-white font-medium text-xs sm:text-sm md:text-[15px] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
