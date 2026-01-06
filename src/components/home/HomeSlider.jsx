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
    <div className="relative w-full h-[280px] md:h-[420px] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

