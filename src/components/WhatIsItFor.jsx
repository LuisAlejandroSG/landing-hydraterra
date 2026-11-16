"use client";

import { motion } from "framer-motion";

export default function WhatIsItFor() {
  const cards = [
    {
      tag: "Riego eficiente",
      title: "Cuidado de plantas en el hogar",
      desc: "Mantiene la humedad constante en plantas de interior, balcones y jardines urbanos, evitando el estrés por olvido de riego o altas temperaturas.",
    },
    {
      tag: "Producción",
      title: "Producción de plantines",
      desc: "Potencia el desarrollo radicular en viveros y almácigos, logrando plantas más vigorosas y resistentes al momento del despacho a campo.",
    },
    {
      tag: "Establecimiento",
      title: "Establecimiento de cultivos",
      desc: "Asegura un suministro hídrico continuo durante las etapas críticas de enraizamiento y floración en cultivos intensivos y frutales.",
    },
    {
      tag: "Reforestación",
      title: "Establecimiento de plantaciones",
      desc: "Maximiza la sobrevivencia de árboles forestales y nativos en suelos degradados, laderas o zonas con escasez prolongada de lluvias.",
    },
  ];

  return (
    <section className="bg-[#154726] text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title + Description + Seedling Hydrogel Cross-section Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-5"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-wide">
              ¿Para qué sirve?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-normal">
              HydraTerra actúa como una batería hídrica subterránea. Captura el agua de riego o lluvia que normalmente se perdería por infiltración profunda o evaporación, manteniéndola disponible justo en la rizósfera.
            </p>

            {/* Close-up of seedling roots with hydrogel crystals */}
            <div className="rounded-sm overflow-hidden  border border-white/15 relative aspect-square sm:aspect-[4/3] bg-[#1a0f0a]">
              <img
                src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=700&q=85"
                alt="Raíces de plántula con cristales de hidrogel hidratados"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: 4 Stacked Medium-Green Horizontal Cards */}
          <div className="md:col-span-7 flex flex-col gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-[#58A646] rounded-sm p-4 sm:p-5  hydra-card cursor-default"
              >

                <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">{card.title}</h3>
                <p className="text-white/95 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
