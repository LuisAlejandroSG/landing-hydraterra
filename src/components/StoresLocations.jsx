"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function StoresLocations() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220 * direction;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const stores = [
    {
      name: "Viveros & Garden",
      region: "Región Metropolitana y Valparaíso",
      action: "Ver mapa",
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Agroinsumos O'Higgins",
      region: "Rancagua, San Fernando y Curicó",
      action: "Ver mapa",
      img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Centro Agrícola Maule",
      region: "Talca, Linares y Chillán",
      action: "Ver mapa",
      img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Forestal & Huertos Sur",
      region: "Concepción, Los Ángeles y Temuco",
      action: "Ver mapa",
      img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Tienda Oficial Online",
      region: "Despacho directo a todo Chile",
      action: "Comprar",
      img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-[#2C5E4F]/20 pt-8 mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#2C5E4F] leading-tight">
          Dónde nos encuentras
        </h2>
      </motion.div>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          className="-left-3 sm:-left-6 z-10 w-9 h-9 rounded-sm bg-white/90 text-[#2C5E4F]  flex items-center justify-center transition-all focus:outline-none cursor-pointer"
          aria-label="Anterior tienda"
        >
          <span className="text-sm font-semibold">&lsaquo;</span>
        </button>

        {/* 5 Store/Partner Cards Track */}
        <div
          ref={scrollRef}
          className="flex gap-3.5 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full py-3 px-1"
        >
          {stores.map((store, idx) => (
            <motion.div
              key={idx}
              className="min-w-[145px] sm:min-w-[155px] flex-1 bg-[#58A646] rounded-sm overflow-hidden  flex flex-col shrink-0 hydra-card text-center"
            >
              <div className="h-28 w-full overflow-hidden">
                <img
                  src={store.img}
                  alt={store.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-3 flex-1 flex flex-col justify-between items-center">
                

                <h4 className="text-white font-bold text-xs sm:text-sm mt-1.5 leading-snug">
                  {store.name}
                </h4>

                <p className="text-white/90 text-[11px] sm:text-xs my-1.5 leading-tight">
                  {store.region}
                </p>

                <a
                  href="#contacto"
                  className="bg-white/95 text-[#154726] text-xs font-bold px-3 py-1.5 rounded-sm w-full transition-colors "
                >
                  {store.action}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          className="-right-3 sm:-right-6 z-10 w-9 h-9 rounded-sm bg-white/90 text-[#2C5E4F]  flex items-center justify-center transition-all focus:outline-none cursor-pointer"
          aria-label="Siguiente tienda"
        >
          <span className="text-sm font-semibold">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
}
