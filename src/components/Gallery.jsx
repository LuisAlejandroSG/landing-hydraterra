"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Gallery({ onOpenModal }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240 * direction;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const galleryItems = [
    {
      id: "ensayo-campo",
      badge: "Video Terreno",
      title: "Hidratación de gel en plantación de paltos",
      type: "video",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "comparativa-riego",
      badge: "Fotografía",
      title: "Desarrollo radicular a los 45 días con HydraTerra",
      type: "image",
      img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "laboratorio",
      badge: "Laboratorio",
      title: "Capacidad de hinchamiento 300x en timelapse",
      type: "video",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "reforestacion",
      badge: "Caso Forestal",
      title: "Reforestación de quillay y peumo en zona central",
      type: "image",
      img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: "huerto-urbano",
      badge: "Casa & Jardín",
      title: "Paso a paso para aplicar en macetas y almácigos",
      type: "video",
      img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-[#2C5E4F]/20 pt-8 mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#2C5E4F] leading-tight">
          Nuestra galería de
          <br />
          fotos y Videos.
        </h2>
      </motion.div>

      {/* Carousel Container with Left/Right Arrows */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          className="-left-3 sm:-left-6 z-10 w-9 h-9 rounded-sm bg-white/90 text-[#2C5E4F]  flex items-center justify-center transition-all focus:outline-none cursor-pointer"
          aria-label="Anterior elemento"
        >
          <span className="text-sm font-semibold">&lsaquo;</span>
        </button>

        {/* Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full py-3 px-1"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenModal && onOpenModal("video", item.id)}
              className="min-w-[170px] sm:min-w-[190px] flex-1 h-52 sm:h-56 rounded-sm bg-[#58A646] relative overflow-hidden  cursor-pointer group shrink-0 select-none"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover opacity-35 group-hover:opacity-55 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 p-3.5 flex flex-col justify-between text-left text-white pointer-events-none">
                <span className="inline-flex items-center gap-1.5 bg-white/25 text-xs font-bold uppercase px-2.5 py-1 rounded-sm w-fit">
                  <span>{item.badge}</span>
                </span>


                <p className="text-xs sm:text-[13px] font-bold leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          className="-right-3 sm:-right-6 z-10 w-9 h-9 rounded-sm bg-white/90 text-[#2C5E4F]  flex items-center justify-center transition-all focus:outline-none cursor-pointer"
          aria-label="Siguiente elemento"
        >
          <span className="text-sm font-semibold">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
}
