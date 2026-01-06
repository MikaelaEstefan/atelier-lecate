import { Link } from "react-router-dom";

export default function HomeIntro() {
  return (
    <div className="flex flex-col justify-center px-12">
      <h1 className="text-4xl font-light mb-6">
        Atelier Lecate
      </h1>

      <p className="text-sm text-[#8A8A8A] max-w-md mb-8">
        Obras originales y piezas únicas creadas en un espacio de
        exploración artística, materia y tiempo.
      </p>

      <Link
        to="/products"
        className="inline-block border border-black px-6 py-3 text-sm w-fit hover:bg-black hover:text-white transition"
      >
        Ir a la tienda
      </Link>
    </div>
  );
}
