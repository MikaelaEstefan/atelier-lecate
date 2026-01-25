import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/slider/obra-1.jpg",
  "/images/slider/obra-2.jpg",
  "/images/slider/obra-3.jpg",
];

export default function HomeSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden rounded-sm">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          className="w-full h-full object-cover opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-white/20" />
    </div>
  );
}


