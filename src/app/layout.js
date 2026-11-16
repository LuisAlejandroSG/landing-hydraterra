import localFont from "next/font/local";
import "./globals.css";

const afterFont = localFont({
  src: "../../public/fonts/After-Regular.ttf",
  variable: "--font-after",
  display: "swap",
});

const poppinsFont = localFont({
  src: "../../public/fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "HydraTerra | Retenedor de Agua Biodegradable | Andes GreenTech",
  description: "Tecnología sustentable de retención hídrica. El hidrogel 100% biodegradable que alimenta tus cultivos y protege el suelo.",
  keywords: ["HydraTerra", "retenedor de agua", "hidrogel biodegradable", "Andes GreenTech", "ahorro de agua", "riego eficiente", "agricultura sustentable"],
  openGraph: {
    title: "HydraTerra | Retenedor de Agua Biodegradable | Andes GreenTech",
    description: "Tecnología sustentable de retención hídrica. El hidrogel 100% biodegradable de origen vegetal.",
    type: "website",
    locale: "es_CL",
    url: "https://www.andesgreentech.cl",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${afterFont.variable} ${poppinsFont.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-hydra-green selection:text-white bg-hydra-bg text-hydra-tealText overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}


