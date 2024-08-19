import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother.min';

import './App.css';

import video from './assets/videos/vr.mp4';

import Header from './sections/Header/Header.jsx';
import Intro from './sections/Intro/Intro.jsx';
import Gallery from './sections/Gallery/Gallery.jsx';
import Service from './sections/Service/Service.jsx';
import Сompetencies from './sections/Сompetencies/Сompetencies.jsx';
import Ticker from './sections/Ticker/Ticker.jsx';
import AboutList from './sections/AboutList/AboutList.jsx';
import InteractiveText from './sections/InteractiveText/InteractiveText.jsx';
import Footer from './sections/Footer/Footer.jsx';
import ButtonWrapper from './sections/ButtonWrapper/ButtonWrapper.jsx';
import FormBrief from './sections/FormBrief/FormBrief.jsx';

const tickerItems = [
  'Компьютерная графика',
  '3D&nbsp;анимация',
  'VR',
  '3d&nbsp;панорамы',
  '3d&nbsp;визуализация',
  'ux/ui дизайн',
  'видео продакшн',
  'разработка ios',
  'разработка android',
  'WEB разработка',
  'контекстная реклама',
  'таргетированная реклама',
  'SEO ПРОДВИЖЕНИЕ',
  'Компьютерная графика',
];

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <Intro />
            <Ticker items={tickerItems} />
            <Gallery />
            <Service />
            <Сompetencies />
            <ButtonWrapper />
            <Ticker items={tickerItems} star={true} />
            <video
              autoPlay
              loop
              muted
              style={{
                display: 'block',
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
              }}>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Ticker items={tickerItems} />
            <AboutList />
            {/* <InteractiveText /> */}
            <FormBrief />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
