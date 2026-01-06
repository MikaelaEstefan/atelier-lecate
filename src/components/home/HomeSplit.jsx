import HomeIntro from "./HomeIntro";
import HomeSlider from "./HomeSlider";

export default function HomeSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <HomeIntro />
      <HomeSlider />
    </section>
  );
}
