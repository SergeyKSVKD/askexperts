import AboutUs from "./components/home/about-us/AboutUs";
import Banner from "./components/home/banner/Banner";
import Client from "./components/home/client/Client";
import Counter from "./components/home/counter/Counter";
import Gallery from "./components/home/gallery/Gallery";
import Process from "./components/home/process/Process";
import Services from "./components/home/services/Services";
import styles from "./page.module.scss";

export default function Home() {
  return (<>
    <div className={styles.container}>
      <Banner />
      <Client />
      <AboutUs />
      <Services />
      <Process />
      <Gallery />
      <Counter />
    </div>
  </>
  );
}
