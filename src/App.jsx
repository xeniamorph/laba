import './App.css';
// import './variables.scss';
import video1 from './assets/videos/gallery-1.mp4';

import Header from './sections/Header/Header.jsx';
import Intro from './sections/Intro/Intro.jsx';
import Gallery from './sections/Gallery/Gallery.jsx';
import Ticker from './sections/Ticker/Ticker.jsx';
import AboutList from './sections/AboutList/AboutList.jsx';
import Footer from './sections/Footer/Footer.jsx';

const App = () => {
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

  return (
    <>
      <Header />
      <Intro />
      <Ticker items={tickerItems} />
      <Gallery />
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
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Ticker items={tickerItems} />
      <AboutList />
      {/* <InteractiveText /> */}

      <Footer />
    </>
  );
};

export default App;
