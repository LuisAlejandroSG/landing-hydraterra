"use client";

import { motion } from "framer-motion";

export default function UsesSection() {
  return (
    <section id="usos" className="bg-[#58A646] text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-serif font-normal leading-snug mb-10 sm:mb-12 max-w-2xl"
        >
          Descubre su uso para el Mundo Agrícola, Casa &amp; Jardín y Forestal
        </motion.h2>

        <div className="space-y-12 sm:space-y-14">
          {/* ROW 1: Mundo Agrícola (Image Left, Text Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-6">
              <div className="rounded-sm overflow-hidden  aspect-[4/3] bg-[#154726]/20">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                  alt="Agricultor trabajando en cultivo agrícola con HydraTerra"
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-6 space-y-4 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-2 bg-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-sm ">
                <span>Mundo Agrícola</span>
              </span>

              <div>
                <h3 className="font-bold text-sm sm:text-base mb-2 text-white flex items-center gap-1.5">
                  <span>Beneficios:</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Reduce el consumo de agua de riego entre un 40% y 60% en hortalizas y frutales.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Evita la lixiviación de fertilizantes, manteniéndolos disponibles para la raíz.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Aumenta el calibre y rendimiento parejo de la cosecha en suelos arenosos o francos.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-1">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-white">Cómo se aplica:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Aplicación en seco o pre-hidratado directamente en el surco o hoyo de plantación.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>En frutales establecidos: incorporar a 15-25 cm de profundidad en la banda de riego.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Dosificación recomendada: 5 a 15 g por planta según tamaño de pella radicular.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ROW 2: Casa & Jardín (Text Left, Image Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-6 order-2 md:order-1 space-y-4 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-2 bg-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-sm ">
                <span>Casa &amp; Jardín</span>
              </span>

              <div>
                <h3 className="font-bold text-sm sm:text-base mb-2 text-white">Beneficios:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Mantiene tus macetas, jardineras y césped hidratados durante viajes o vacaciones.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Evita el marchitamiento por golpes de calor y mejora la floración ornamental.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>100% inocuo para niños, mascotas, lombrices y microorganismos benéficos.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-1">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-white">Cómo se aplica:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Mezclar de 2 a 3 gramos por cada litro de sustrato al trasplantar macetas.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>En macetas existentes: realizar 3-4 pequeños orificios hacia la raíz, aplicar y regar.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Para prados y césped: esparcir 30-50 g/m² antes de instalar palmetas o sembrar.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-6 order-1 md:order-2">
              <div className="rounded-sm overflow-hidden  aspect-[4/3] bg-[#154726]/20">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
                  alt="Cuidado de plantas en casa y jardín con HydraTerra"
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* ROW 3: Mundo Forestal (Image Left, Text Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-6">
              <div className="rounded-sm overflow-hidden  aspect-[4/3] bg-[#154726]/20 relative">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                  alt="Aplicación forestal y reforestación con envase Kraft HydraTerra"
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                {/* Small kraft pouch badge overlay simulating mockup field bag */}
                <div className="absolute bottom-3.5 left-3.5 bg-[#d8bfa3]/95 text-[#154726] px-3.5 py-1.5 rounded-sm  border border-white/50 text-xs font-bold flex items-center gap-2">
                  <span>Envase Kraft Biodegradable en terreno</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 space-y-4 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-2 bg-white/25 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-3.5 py-1.5 rounded-sm ">
                <span>Mundo Forestal</span>
              </span>

              <div>
                <h3 className="font-bold text-sm sm:text-base mb-2 text-white">Beneficios:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Aumenta la tasa de prendimiento y sobrevivencia de plantines en zonas de secano.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Protege las raíces desnudas o en speedling durante el transporte y plantación.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Ideal para restauración ecológica de bosque nativo y plantaciones comerciales.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-1">
                <h3 className="font-bold text-sm sm:text-base mb-2 text-white">Cómo se aplica:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Inmersión de raíces (slurry) o incorporación de gel hidratado en la casilla de plantación.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Uso con Eco-Pote HydraTerra para liberación prolongada en laderas de difícil acceso.</span>
                  </li>
                  <li className="flex items-start gap-2.5 border-b border-white/25 pb-1.5 leading-relaxed">
                    <span>Dosificación: 3 a 8 g en seco (o 0.5 a 1 L de gel hidratado) por árbol plantado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
