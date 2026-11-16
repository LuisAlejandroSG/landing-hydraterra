"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import WhatIsIt from "@/components/WhatIsIt";
import HowItWorks from "@/components/HowItWorks";
import UsesSection from "@/components/UsesSection";
import WhatIsItFor from "@/components/WhatIsItFor";
import ScienceBehind from "@/components/ScienceBehind";
import TechDocs from "@/components/TechDocs";
import Gallery from "@/components/Gallery";
import StoresLocations from "@/components/StoresLocations";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Modal from "@/components/Modal";
import { docContent, videoContent } from "@/data/landingData";

export default function Home() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    data: null,
  });

  const handleOpenModal = (type, key) => {
    let item = null;
    if (type === "doc") {
      item = docContent[key];
    } else if (type === "video") {
      item = videoContent[key] || videoContent["animacion"];
    }

    if (item) {
      setModalState({
        isOpen: true,
        data: item,
      });
    }
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      data: null,
    });
  };

  return (
    <main className="min-h-screen bg-[#E8F3F8] text-[#2C5E4F] overflow-x-hidden selection:bg-[#58A646] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* 2. Hero Banner */}
      <Hero />

      {/* 3. Product Showcase & 4 Pillars */}
      <ProductShowcase />

      {/* 4. ¿Qué es Hydraterra? */}
      <WhatIsIt />

      {/* 5. ¿Cómo funciona? */}
      <HowItWorks onOpenModal={handleOpenModal} />

      {/* 6. Wavy Transition 1 */}

      {/* 7. Descubre su uso (Mundo Agrícola, Casa & Jardín, Forestal) */}
      <UsesSection />

      {/* 8. Wavy Transition 2 */}

      {/* 9. ¿Para qué sirve? */}
      <WhatIsItFor />

      {/* 10. Wavy Transition 3 */}

      {/* 11. La ciencia detrás del material */}
      <ScienceBehind />

      {/* 12. Documentación Técnica */}
      <TechDocs onOpenModal={handleOpenModal} />

      {/* 13. Nuestra galería de fotos y Videos */}
      <Gallery onOpenModal={handleOpenModal} />

      {/* 14. Dónde nos encuentras */}
      <StoresLocations />

      {/* 15. Sky Blue CTA Banner */}
      <CtaBanner />

      {/* 16. Contáctanos & Footer */}
      <Contact />

      {/* Interactive Global Modal */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        data={modalState.data}
      />
    </main>
  );
}
