import HomeIntro from "./HomeIntro";
import HomeSlider from "./HomeSlider";

export default function HomeSplit() {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-16 py-24">
      <div>
        <HomeIntro />
      </div>
      <div>
        <HomeSlider />
      </div>
    </section>
  );
}

