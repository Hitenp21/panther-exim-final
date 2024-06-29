import './App.css';
import Navbarlist from './components/header';
import { Footer } from './components/footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import About from './pages/About';
import CountsContainer from './components/count';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import FQ from './pages/Fq';
import Category from './pages/Category';
// import ExtensionPiece from './pages/cableGalnd/extension';
// import PgBrass from './pages/cableGalnd/pgBrass';
// import Earthing from './pages/cableGalnd/erthingTag';
// import LockNut from './pages/cableGalnd/lockNut';
// import BrassReducers from './pages/cableGalnd/brassReducer';
// import StoppingPlug from './pages/cableGalnd/brassStopping';
// import LineTap from './pages/cableGalnd/lineTap';
// import SplitBolt from './pages/cableGalnd/splitBolt';
// import HexNipple from './pages/sanitaryParts/hexNipple';
// import Union from './pages/sanitaryParts/union';
// import ReducingBush from './pages/sanitaryParts/reducingBush';
// import SocketRound from './pages/sanitaryParts/socketRound';
// import ConnectorSingleSide from './pages/sanitaryParts/connectorSingleSide';
// import DoubleSideMove from './pages/sanitaryParts/doubleSideMove';
// import WaterMeter from './pages/sanitaryParts/waterMeter';
// import TeeCoupling from './pages/sanitaryParts/teeCoupling';
// import ElbowCoupling from './pages/sanitaryParts/elbowCoupling';
// import KimNipple from './pages/sanitaryParts/kimNipple';
// import MalePlug from './pages/sanitaryParts/malePlug';
// import FemalePlug from './pages/sanitaryParts/femalePlug';
// import HoseNipple from './pages/sanitaryParts/hoseNipple';
// import LongNipple from './pages/sanitaryParts/longNipple';
// import CPSocket from './pages/sanitaryParts/cpSocket';
// import BrassNut from './pages/subCategory';
// import CPCrossTee from './pages/sanitaryParts/cpCrossTee';
// import CPMaleFemaleElbow from './pages/sanitaryParts/cpMaleFemaleElbow';
// import CPHexCapFemale from './pages/sanitaryParts/cpHexCapFemale';
// import CPHexNipple from './pages/sanitaryParts/cpHexNipple';
// import CPPlugMaleFemale from './pages/sanitaryParts/cpPlugMaleFemale';
// import CPWasteCoupling from './pages/sanitaryParts/cpWasteCoupling';
import './header1.css';
import Loader from './components/loader';
import SendEmail from './components/emailSend';
import SubCategory from './pages/subCategory';
import Products from './pages/Products';

function App() {
  const [t, i18n] = useTranslation("global")
  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'en'); // State for current locale, default to English

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
    i18n.changeLanguage(selectedLocale);
    localStorage.setItem('locale', selectedLocale); // Store selected language in localStorage
  };

  useEffect(() => {
    // On component mount, set language based on stored value in localStorage
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      setLocale(storedLocale);
      i18n.changeLanguage(storedLocale);
    }
  }, []);

  const [loading, setLoading] = useState(false); // State to manage loading
  const location = useLocation();
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer on component unmount
    // return () => clearTimeout(timer);
  }, [location.pathname]);


  // useEffect(() => {
  //   // Prevent right-click context menu
  //   window.addEventListener('contextmenu', function (e) {
  //     e.preventDefault();
  //   });

  //   // Prevent opening developer tools
  //   window.addEventListener('keydown', function (e) {
  //     if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
  //       e.preventDefault();
  //     }
  //     if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
  //       e.preventDefault();
  //     }
  //   });

  //   // Cleanup function to remove the event listeners when component unmounts
  //   return () => {
  //     window.removeEventListener('contextmenu', function (e) {
  //       e.preventDefault();
  //     });
  //     window.removeEventListener('keydown', function (e) {
  //       if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
  //         e.preventDefault();
  //       }
  //       if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
  //         e.preventDefault();
  //       }
  //     });
  //   };
  // }, []);


  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <>
        <div className='navbar-container'>
          <span className='navbar-section time-section'>

            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 64 64" id="email" style={{ marginRight: '7px', transition: 'color 0.3s' }}>
              <path d="M53.42 53.32H10.58a8.51 8.51 0 0 1-8.5-8.5V19.18a8.51 8.51 0 0 1 8.5-8.5h42.84a8.51 8.51 0 0 1 8.5 8.5v25.64a8.51 8.51 0 0 1-8.5 8.5ZM10.58 13.68a5.5 5.5 0 0 0-5.5 5.5v25.64a5.5 5.5 0 0 0 5.5 5.5h42.84a5.5 5.5 0 0 0 5.5-5.5V19.18a5.5 5.5 0 0 0-5.5-5.5Z"></path>
              <path d="M32 38.08a8.51 8.51 0 0 1-5.13-1.71L3.52 18.71a1.5 1.5 0 1 1 1.81-2.39L28.68 34a5.55 5.55 0 0 0 6.64 0l23.35-17.68a1.5 1.5 0 1 1 1.81 2.39L37.13 36.37A8.51 8.51 0 0 1 32 38.08Z"></path>
              <path d="M4.17 49.14a1.5 1.5 0 0 1-1-2.62l18.4-16.41a1.5 1.5 0 0 1 2 2.24L5.17 48.76a1.46 1.46 0 0 1-1 .38zm55.66 0a1.46 1.46 0 0 1-1-.38l-18.4-16.41a1.5 1.5 0 1 1 2-2.24l18.39 16.41a1.5 1.5 0 0 1-1 2.62z"></path></svg>
            <p className='hp'>info@pantherexim.com</p>
          </span>
          <span className='navbar-section call-section'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16" style={{ marginRight: '7px', transition: 'color 0.3s' }}>
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            <p className='hp'>Call Us: +91 7984353863</p>
          </span>
          <div className='navbar-section language-section'>
            <LanguageSelector onLanguageChange={handleLanguageChange} />
          </div>
        </div>

      </>
      {
        !loading ?
          (
            <>
              <Navbarlist />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/send-email" element={<SendEmail />} />

                <Route path="/quality" element={<Quality />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/category" element={<Category />} />

                <Route path="/category/cables" element={<Products />} />
                <Route path="/category/cables/*" element={<SubCategory />} />
                {/* <Route path="/category/cables/extention-piece" element={<ExtensionPiece />} />
                <Route path="/category/cables/pg-brass-cable-gland" element={<PgBrass />} />
                <Route path="/category/cables/earthing-tag" element={<Earthing />} />
                <Route path="/category/cables/lock-nut" element={<LockNut />} />
                <Route path="/category/cables/brass-reducers" element={<BrassReducers />} />
                <Route path="/category/cables/brass-stopping-plug" element={<StoppingPlug />} />
                <Route path="/category/cables/line-taps" element={<LineTap />} />
                <Route path="/category/cables/split-bolt-connector" element={<SplitBolt />} /> */}

                <Route path="/category/sanitary" element={<Products />} />
                <Route path="/category/sanitary/*" element={<SubCategory />} />

                {/* <Route path="/category/sanitary/hex-nipple" element={<HexNipple />} /> */}
                {/* <Route path="/category/sanitary/union" element={<Union />} />
                <Route path="/category/sanitary/reducing-bush" element={<ReducingBush />} />
                <Route path="/category/sanitary/socket-round" element={<SocketRound />} />
                <Route path="/category/sanitary/round-flange-tank-connector-single-side-move" element={<ConnectorSingleSide />} />
                <Route path="/category/sanitary/tank-connector-double-side-move" element={<DoubleSideMove />} />
                <Route path="/category/sanitary/water-meter-connctor" element={<WaterMeter />} />
                <Route path="/category/sanitary/tee-coupling" element={<TeeCoupling />} />
                <Route path="/category/sanitary/elbow-coupling" element={<ElbowCoupling />} />
                <Route path="/category/sanitary/kim-nipple" element={<KimNipple />} />
                <Route path="/category/sanitary/male-plug" element={<MalePlug />} />
                <Route path="/category/sanitary/female-plug" element={<FemalePlug />} />
                <Route path="/category/sanitary/hose-nipple" element={<HoseNipple />} />
                <Route path="/category/sanitary/long-nipple" element={<LongNipple />} />
                <Route path="/category/sanitary/cp-socket" element={<CPSocket />} />
                <Route path="/category/sanitary/brass-nut" element={<BrassNut />} />
                <Route path="/category/sanitary/cp-cross-tee" element={<CPCrossTee />} />
                <Route path="/category/sanitary/cp-male-female-elbow" element={<CPMaleFemaleElbow />} />
                <Route path="/category/sanitary/cp-hex-nipple" element={<CPHexNipple />} />
                <Route path="/category/sanitary/cp-hex-cap-female" element={<CPHexCapFemale />} />
                <Route path="/category/sanitary/cp-plug-male-female" element={<CPPlugMaleFemale />} />
                <Route path="/category/sanitary/cp-waste-coupling" element={<CPWasteCoupling />} /> */}
                {/* <Route path="/category/sanitary/pg-brass-cable-glands-nickle-plated" element = {<HexNipple />} /> */}



                <Route path="/fq" element={<FQ />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
            </>
          ) : (
            <Loader />
          )
      }


    </>
  );

  function LanguageSelector({ onLanguageChange }) {
    const handleChange = (e) => {
      const selectedLocale = e.target.value;
      onLanguageChange(selectedLocale);
    };

    return (
      <div className="language-selector-container">

        <select className="language-selector" onChange={handleChange} value={locale}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
    );
  }
}

export default App;
