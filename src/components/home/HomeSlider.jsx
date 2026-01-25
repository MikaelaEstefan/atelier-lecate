import { motion } from "framer-motion";

const image = "/images/slider/obra-3.jpg";

export default function HomeSlider() {
  return (
    <motion.div
      className="home-editorial"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <img
        src={image}
        alt="Detalle de obra Atelier Lecaté"
      />
    </motion.div>
  );
}



