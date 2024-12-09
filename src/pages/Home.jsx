import '../App.scss';

import ProjectsTile from '../components/ProjectsTile/ProjectsTile';
import Intro from '../components/Intro/Intro';
import Intro2 from '../components/Intro2/Intro2';
import Ticker from '../components/Ticker/Ticker';
import Gallery from '../components/Gallery/Gallery';
import Counter from '../components/Counter/Counter';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';
import AboutList from '../components/AboutList/AboutList';
import TextEffect from '../components/TextEffect/TextEffect';
import Partners from '../components/Partners/Partners';
import ProjectsSlider from '../components/ProjectsSlider/ProjectsSlider';
import video from '../assets/videos/vr.mp4';

import ServiceIntro from '../components/ServiceIntro/ServiceIntro';
import Text from '../components/Text/Text';
import Softwar from '../components/Softwar/Softwar';

export default function Home() {
  return (
    <main>
      <ServiceIntro />
      <Text />
      <Softwar />
      {/* <Intro2 /> */}
      {/* <ProjectsTile />
      <Ticker />
      <Counter />
      <TextEffect />
      <Gallery />
      <Ticker />
      <AboutList />
      <Partners />
      <ProjectsSlider /> */}
    </main>
  );
}
