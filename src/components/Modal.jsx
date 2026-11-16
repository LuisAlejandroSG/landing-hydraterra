"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, data }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 "
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 bg-[#E8F3F8] border-2 border-[#58A646] rounded-sm max-w-lg w-full p-6 sm:p-7  text-[#2C5E4F]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#154726] text-white flex items-center justify-center hover:bg-[#58A646] transition-colors focus:outline-none cursor-pointer"
            aria-label="Cerrar modal"
          >
            <span className="text-xs font-semibold">Cerrar</span>
          </button>

          {data.badge && (
            <div className="inline-flex items-center gap-1.5 bg-[#D4A843] text-[#154726] text-xs font-extrabold uppercase px-3 py-1 rounded-sm mb-3 ">
              <span>{data.badge}</span>
            </div>
          )}

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#154726] mb-3.5 pr-8 leading-snug">
            {data.title}
          </h3>

          <div
            className="text-xs sm:text-sm leading-relaxed space-y-3 bg-white/95 p-4 sm:p-5 rounded-sm border border-[#8AB8C9]/40 mb-5 max-h-[60vh] overflow-y-auto no-scrollbar"
            dangerouslySetInnerHTML={{ __html: data.body }}
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-[#154726] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-sm hover:bg-[#1e5c33] transition-colors cursor-pointer "
            >
              Cerrar vista previa
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
