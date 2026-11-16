"use client";

import { motion } from "framer-motion";

export default function WhatIsIt() {
  const features = [
    {
      title: "Absorbe",
      tag: "La matriz vegetal de HydraTerra® absorbe la humedad disponible apenas entra en contacto con el agua.",
    },
    {
      title: "Retiene",
      tag: "El agua queda retenida en forma de gel, justo en la zona donde se desarrollan las raíces.",
    },
    {
      title: "Libera",
      tag: "A medida que la planta demanda humedad, HydraTerra® la va liberando de forma progresiva.",
    },
    {
      title: "Biodegradable",
      tag: "Cumplido su ciclo funcional, se descompone por completo como materia orgánica, sin residuos persistentes.",
    },
  ];

  return (
    <section id="que-es" className="py-8 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Title with top & bottom thin divider line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title-divider py-3.5 mb-6"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#2C5E4F] tracking-wide">
          ¿Qué es Hydraterra?
        </h2>
      </motion.div>

      {/* Explanatory paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm sm:text-base text-[#2C5E4F]/95 leading-relaxed max-w-3xl mx-auto mb-10 font-normal"
      >
        Hydraterra Es un biomaterial superabsorbente de origen vegetal que retiene agua, forma una
        reserva hídrica y la libera gradualmente según la humedad del suelo. Funciona como un seguro
        hídrico: ayuda a las plantas a enfrentar períodos sin riego y permite distanciar su frecuencia, sin
        reemplazarlo. Es biodegradable, natural y apto para macetas, jardines y distintas especies
        vegetales.
      </motion.p>

      {/* 4 Square Green Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
        {features.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="bg-[#58A646] rounded-sm p-4 flex flex-col items-center justify-between  hydra-card cursor-default min-h-[170px]"
          >
            
            <h3 className="text-white font-bold text-base sm:text-lg mb-2">{item.title}</h3>
            <div className="bg-white/95 text-[#154726] text-xs font-semibold rounded-sm px-3 py-1.5 w-full leading-snug ">
              {item.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
