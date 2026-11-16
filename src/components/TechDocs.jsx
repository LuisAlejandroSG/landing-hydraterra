"use client";

import { motion } from "framer-motion";

export default function TechDocs({ onOpenModal }) {
  const docs = [
    {
      id: "ficha-agricola",
      title: "Ficha Técnica\nHydraterra",
      items: [
        "Propiedades físico-químicas",
        "Curva de absorción y retención",
        "Dosis para cultivos y frutales",
      ],
    },
    {
      id: "ficha-jardin",
      title: "Ficha Técnica\nHuerto y Jardín",
      items: [
        "Guía para macetas y huertos",
        "Aplicación en césped y prados",
        "Tabla de medidas domésticas",
      ],
    },
    {
      id: "ecopote",
      title: "Eco-pote\nHydraterra",
      subtitle: "Formato forestal y frutícola de liberación prolongada",
    },
    {
      id: "flyer",
      title: "Flyer\nComercial",
      subtitle: "Resumen comercial y comparativa de beneficios",
    },
  ];

  return (
    <section id="documentacion" className="py-10 sm:py-14 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-[#2C5E4F]/20 pt-8 mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#2C5E4F] leading-tight mb-3">
          Documentación
          <br />
          Técnica.
        </h2>
        <p className="text-sm sm:text-base font-bold text-[#154726] max-w-lg mx-auto leading-relaxed">
          Descarga o visualiza las fichas técnicas y folletos con detalles científicos y guías completas de aplicación.
        </p>
      </motion.div>

      {/* 4 Vertical Green Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
        {docs.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="bg-[#58A646] rounded-sm p-5 flex flex-col justify-between text-white  hydra-card min-h-[260px]"
          >
            <div>
              
              <h3 className="text-center font-bold text-sm sm:text-base leading-snug mb-3 whitespace-pre-line">
                {doc.title}
              </h3>

              {doc.items && (
                <ul className="space-y-2 text-xs sm:text-[13px] text-white/95 mb-4">
                  {doc.items.map((it, i) => (
                    <li key={i} className="border-b border-white/25 pb-1 flex items-start gap-1.5">
                      <span className="text-[#D4A843] font-bold">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}

              {doc.subtitle && (
                <p className="text-center text-xs sm:text-[13px] text-white/90 mt-3 leading-relaxed mb-4">
                  {doc.subtitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => onOpenModal && onOpenModal("doc", doc.id)}
                className="flex-1 bg-[#D4A843] hover:bg-[#C89D3C] text-[#154726] font-extrabold text-xs py-2 px-2.5 rounded-sm text-center transition-colors cursor-pointer "
              >
                Descargar
              </button>
              <button
                onClick={() => onOpenModal && onOpenModal("doc", doc.id)}
                className="flex-1 bg-[#154726] hover:bg-[#1e5c33] text-white font-bold text-xs py-2 px-2.5 rounded-sm text-center transition-colors cursor-pointer "
              >
                Ver online
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
