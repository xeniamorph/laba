import '../App.scss';

import ProjectsTile from '../components/ProjectsTile/ProjectsTile';
import ProjectsTile2 from '../components/ProjectsTile2/ProjectsTile2';
import ProjectsTile3 from '../components/ProjectsTile3/ProjectsTile3';
import ProjectsTile3a from '../components/ProjectsTile3a/ProjectsTile3a';
import ProjectsTile4 from '../components/ProjectsTile4/ProjectsTile4';
import ProjectsTile5 from '../components/ProjectsTile5/ProjectsTile5';
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

export default function Home() {
  return (
    <main>
      <Intro2 />
      <ProjectsTile />
      <ProjectsTile2 />
      <ProjectsTile3 />
      <ProjectsTile3a />
      <ProjectsTile4 />
      <ProjectsTile5 />
      <ProjectsGrid />

      <Ticker />
      <Counter />
      <TextEffect />
      <Gallery />

      <Ticker />
      <AboutList />
      <Partners />
      <ProjectsSlider />
    </main>
  );
}
