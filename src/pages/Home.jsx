import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';
import AboutList from '../components/AboutList/AboutList';
import Expertise from '../components/Expertise/Expertise';
import Gallery from '../components/Gallery/Gallery';
import Intro from '../components/Intro/Intro';
import Partners from '../components/Partners/Partners';
import Projects from '../components/Projects/Projects';
import ProjectsSlider from '../components/ProjectsSlider/ProjectsSlider';
import TextEffect from '../components/TextEffect/TextEffect';
import Ticker from '../components/Ticker/Ticker';
import video from '../assets/videos/vr.mp4';

import '../App.scss';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);
  return (
    // <div id="smooth-wrapper">
    //   <div id="smooth-content">
        <main>
          <Intro />
          <Ticker />
          <Gallery />
          <Expertise />
          <Projects />
          <Ticker star={true} />
          <video
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
            }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Ticker />
          <AboutList />
          <TextEffect />
          <Partners />
          <ProjectsSlider />
        </main>
    //   </div>
    // </div>
  );
}
