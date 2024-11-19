import '../App.scss';

import ProjectsTile from '../components/ProjectsTile/ProjectsTile';
import ProjectsTile2 from '../components/ProjectsTile2/ProjectsTile2';
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

      <Ticker />
      {/* <Gallery /> */}
      {/* <Counter /> */}
      {/* <ProjectsGrid /> */}
      {/* <Ticker star={true} /> */}
      {/* <video
        preload="auto"
        autoPlay
        loop
        muted
        style={{
          display: 'block',
          width: '100%',
          height: '100vh',
          maxHeight: '1024px',
          objectFit: 'cover',
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <Ticker /> */}
      {/* <AboutList /> */}
      <TextEffect />
      {/* <Partners />
      <ProjectsSlider /> */}
    </main>
  );
}
