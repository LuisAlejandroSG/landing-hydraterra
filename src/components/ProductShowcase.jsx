"use client";

import { motion } from "framer-motion";

export default function ProductShowcase() {
  const pillars = [
    {
      title: "Ahorro de agua de hasta un 60%",
      desc: "Optimiza la frecuencia y volumen de riego",
    },
    {
      title: "100% Biodegradable y vegetal",
      desc: "Libre de acrilamidas y polímeros sintéticos",
    },
    {
      title: "Mejora la estructura del suelo",
      desc: "Aumenta la porosidad, aireación y retención de nutrientes",
    },
    {
      title: "Mayor supervivencia radicular",
      desc: "Disminuye el estrés hídrico post-trasplante",
    },
  ];

  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Official 3 Product Bags Illustration */}
        <div className="md:col-span-7 flex justify-center items-center relative py-2 sm:py-4">
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[440px] sm:max-w-[480px] flex items-center justify-center select-none cursor-pointer"
          >
            <img
              src="/images/hydraterra-productos.png"
              alt="Formatos de HydraTerra: Retenedor Agrícola 2Kg, Casa y Jardín, y Bio-Polímero"
              className="w-full h-auto object-contain   transition-all duration-300"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Right Column: 4 Stacked Green Pill Badges with Enlarged Text and Emojis */}
        <div className="md:col-span-5 flex flex-col gap-3.5">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex items-center bg-[#58A646] rounded-sm p-2 pr-5  hydra-card cursor-default"
            >
              
              <div className="ml-3.5 text-white leading-tight">
                <span className="font-bold block text-sm sm:text-[15px]">{item.title}</span>
                <span className="text-white/90 text-xs sm:text-[13px] font-normal">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
