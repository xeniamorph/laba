import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import GalleryTabs from './components/GalleryTabs/GalleryTabs.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import './App.scss';
import Home from './pages/Home.jsx';
import FormBrief from './components/FormBrief/FormBrief.jsx';

const App = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<GalleryTabs />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path='/form' element={<FormBrief />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
