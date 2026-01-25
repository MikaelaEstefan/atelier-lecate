import HomeIntro from "../components/home/HomeIntro";
import HomeSlider from "../components/home/HomeSlider";
import { useT } from "../i18n/useT";

export default function Home() {
  const { t } = useT();
  return (
    <>
      <section className="section">
        <div className="container">
          <HomeIntro />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <HomeSlider />
        </div>
      </section>
    </>
  );
}
