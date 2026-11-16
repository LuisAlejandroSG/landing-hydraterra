"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 600);
  };

  return (
    <footer id="contacto" className="pt-8 pb-12 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="border-t border-[#2C5E4F]/20 pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Large Gold Serif Heading & Green Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-3"
          >
            <div className="inline-flex items-center gap-2 bg-[#58A646]/15 px-3 py-1 rounded-sm text-[#154726] text-xs font-bold">
              <span>Atención Técnica y Comercial</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[#C89D3C] tracking-wide">
              Contáctanos
            </h2>

            <p className="text-xs sm:text-sm text-[#58A646] font-semibold leading-relaxed">
              Déjanos tus datos y un especialista de nuestro equipo técnico te contactará a la brevedad para resolver tus dudas o coordinar tu pedido.
            </p>
          </motion.div>

          {/* Right Column: Compact Form with Dark Forest & Medium Green Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nombre y Apellido"
                  className="w-full bg-[#154726] text-white placeholder-white/80 text-xs sm:text-sm font-medium px-5 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4A843]  transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Correo electrónico"
                  className="w-full bg-[#154726] text-white placeholder-white/80 text-xs sm:text-sm font-medium px-5 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4A843]  transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mensaje / Tipo de cultivo o consulta"
                  className="w-full bg-[#58A646] text-white placeholder-white/90 text-xs sm:text-sm font-medium px-5 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#154726]  transition-all"
                />
              </div>

              <div className="pt-1.5 flex items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D4A843] hover:bg-[#C89D3C] text-white font-bold text-xs sm:text-sm px-9 py-2.5 rounded-sm  transition-all cursor-pointer disabled:opacity-75 inline-flex items-center gap-2"
                >
                  <span>{isSubmitting ? "Enviando..." : "Enviar"}</span>
                </button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-xs sm:text-sm font-bold text-[#154726] inline-flex items-center gap-1.5"
                    >
                      <span>¡Mensaje enviado con éxito!</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-[#2C5E4F]/20 pt-6 text-center text-xs text-[#2C5E4F]/85 flex flex-wrap justify-center items-center gap-4">
        <span>www.andesgreentech.cl | contacto@andesgreentech.cl</span>
        <span className="hidden sm:inline">•</span>
        <span>Andes GreenTech SpA</span>
      </div>
    </footer>
  );
}
