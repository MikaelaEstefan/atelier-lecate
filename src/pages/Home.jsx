import HomeSplit from "../components/home/HomeSplit";
import { useT } from "../i18n/useT";


export default function Home() {
  const { t } = useT();
  return <HomeSplit />;
}
