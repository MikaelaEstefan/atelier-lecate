import { Link } from "react-router-dom";
import { useT } from "../../i18n/useT";

export default function HomeIntro() {
  const { t } = useT();

  return (
    <div className="px-16 max-w-md">
      <h1 className="text-5xl font-light tracking-wide mb-10">
        Atelier Lecate
      </h1>

      <p className="text-base text-[#8FA3AD] leading-relaxed mb-12">
        {t("home_tagline")}
      </p>

      <Link
        to="/products"
        className="text-sm tracking-wide underline underline-offset-8 hover:opacity-60 transition"
      >
        {t("home_cta")}
      </Link>
    </div>
  );
}

