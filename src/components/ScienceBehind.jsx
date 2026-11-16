"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ScienceBehind() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const cards = [
    {
      label: "Capacidad de absorción",
      prefix: "Hasta ",
      value: 300,
      suffix: "x",
      text: "Absorbe y retiene hasta 300 veces su propio peso en agua purificada o de riego.",
    },
    {
      label: "Origen del polímero",
      staticValue: "Vegetal",
      text: "Formulado a base de polisacáridos orgánicos naturales, libre de derivados del petróleo.",
    },
    {
      label: "Biodegradación en suelo",
      staticValue: "Completa",
      text: "Se reintegra por acción microbiológica como humus y materia orgánica sin dejar residuos.",
    },
    {
      label: "Frecuencia de riego",
      prefix: "-",
      value: 60,
      suffix: "%",
      text: "Reducción comprobada en requerimiento hídrico y frecuencia de riegos semanales.",
    },
    {
      label: "Retención útil (%)",
      staticValue: "50-80",
      text: "Porcentaje de aumento en la capacidad de retención de humedad disponible en el sustrato.",
    },
    {
      label: "Seguridad ambiental",
      staticValue: "No tóxico",
      text: "Completamente seguro para operadores, mascotas, lombrices, polinizadores y napas.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-serif font-normal text-[#2C5E4F] leading-tight mb-10"
      >
        La ciencia detrás
        <br />
        del material
      </motion.h2>

      {/* 3x2 Outlined Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, idx) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="border border-[#8AB8C9] rounded-sm p-5 bg-white/50 hydra-card flex flex-col justify-between text-center"
          >
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <span className="block text-xs uppercase tracking-wider text-[#2C5E4F]/80 font-bold">
                {card.label}
              </span>
            </div>

            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#2C5E4F] border-b border-[#8AB8C9]/50 pb-2.5 mb-2.5">
              {card.staticValue ? (
                card.staticValue
              ) : (
                <>
                  {card.prefix}
                  {inView ? (
                    <CountUp
                      start={0}
                      end={card.value}
                      duration={2.2}
                      delay={0.1 + idx * 0.05}
                    />
                  ) : (
                    card.value
                  )}
                  {card.suffix}
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#2C5E4F]/90 leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
