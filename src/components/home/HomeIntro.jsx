import { Link } from "react-router-dom";
import { useT } from "../../i18n/useT";

export default function HomeIntro() {
  const { t } = useT();

  return (
    <div className="flex flex-col justify-center px-12">
      <h1 className="text-4xl font-light mb-6">
        {t("brand")}
      </h1>

      <p className="text-sm text-[#8A8A8A] max-w-md mb-8">
        {t("home_tagline")}
      </p>

      <Link
        to="/products"
        className="inline-block border border-black px-6 py-3 text-sm w-fit hover:bg-black hover:text-white transition"
      >
        {t("home_cta")}
      </Link>
    </div>
  );
}

