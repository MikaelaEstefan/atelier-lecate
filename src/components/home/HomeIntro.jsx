import { Link } from "react-router-dom";
import { useT } from "../../i18n/useT";

export default function HomeIntro() {
  const { t } = useT();

  return (
    <div className="home-intro-layout">
      
      {/* Texto */}
      <div className="home-intro-text">
        <h1 className="home-title">
          Atelier Lecatte
        </h1>

        <p className="home-description">
          {t("home_tagline")}
        </p>

        <Link to="/products" className="home-cta">
          {t("home_cta")}
        </Link>
      </div>

      {/* Imagen */}
      <div className="home-intro-image">
        <img
          src="/images/obra-1.jpg"
          alt="Atelier Lecate editorial"
        />
      </div>

    </div>
  );
}

