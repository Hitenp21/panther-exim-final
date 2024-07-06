import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'
import background from '../image/background-footer.jpg';
import { useTranslation } from 'react-i18next';
import './footer.css';

const currentYear = new Date().getFullYear();

export function Footer() {
  const [t, i18n] = useTranslation("global");
  // const hanleChangeLangauge = (lang) => {
  //   i18n.changeLanguage(lang);
  // }

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseOver = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseOut = () => {
    setHoveredIcon(null);
  };

  return (

    <footer className="bg-dark text-light py-4" style={{
      // backgroundColor: "rgba(0, 0, 0, 0.5)",
      backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div>
        <Container className='my-10'>
          <Row gutter={[4, 4]}>
            <Col md={6} lg={3} className='my-10 d-flex justify-content-center'>
              <div style={{ display: 'block', marginBottom: '20px' }}>
                <div >
                  <img className="img-fluid image-custom" src='/images/logo/panther exim.png' alt='pantherexim.png' />
                </div>

                <div className="social-icons-container">
                  <SocialIcon
                    url="https://www.facebook.com/in/couetilc"
                    bgColor="#212529"
                    fgColor={hoveredIcon === 'facebook' ? 'blue' : 'white'}
                    className='custom-social-icon'
                    onMouseOver={() => handleMouseOver('facebook')}
                    onMouseOut={handleMouseOut}
                  />
                  <SocialIcon
                    url="https://www.instagram.com/in/couetilc"
                    bgColor="#212529"
                    fgColor={hoveredIcon === 'instagram' ? 'red' : 'white'}
                    className='custom-social-icon'
                    onMouseOver={() => handleMouseOver('instagram')}
                    onMouseOut={handleMouseOut}
                  />
                  <SocialIcon
                    url="https://www.twitter.com/in/couetilc"
                    bgColor="#212529"
                    fgColor={hoveredIcon === 'twitter' ? 'blue' : 'white'}
                    className='custom-social-icon'
                    onMouseOver={() => handleMouseOver('twitter')}
                    onMouseOut={handleMouseOut}
                  />
                  <SocialIcon
                    url="https://linkedin.com/in/couetilc"
                    bgColor="#212529"
                    fgColor={hoveredIcon === 'linkedin' ? 'cyan' : 'white'}
                    className='custom-social-icon'
                    onMouseOver={() => handleMouseOver('linkedin')}
                    onMouseOut={handleMouseOut}
                  />
                </div>

              </div>
            </Col>
            <Col md={6} lg={3} className='my-10 custom-col'>
              {/* <button onClick={()=>hanleChangeLangauge("en")}>EN</button>
              <button onClick={()=>hanleChangeLangauge("fr")}>FR</button> */}

              <span className="footer-heading orange-underline">{t("footer.company")}</span>
              <ul className="list-unstyled">
                <li><Link to="/" className="footer-link"><span className="underline-word">Home</span></Link></li>
                <li><Link to="/about" className="footer-link"><span className="underline-word">About US</span></Link></li>
                <li><Link to="/category" className="footer-link"><span className="underline-word">Category</span></Link></li>
                <li><Link to="/quality" className="footer-link"><span className="underline-word">Quality</span></Link></li>
                <li><Link to="/ourcustomer" className="footer-link"><span className="underline-word">Our Customer</span></Link></li>

                <li><Link to="/contact" className="footer-link"><span className="underline-word">Contact US</span></Link></li>
              </ul>
            </Col>
            <Col md={6} lg={3} className='my-10 custom-col'>
              <span className="footer-heading orange-underline">Products</span>
              <ul className="list-unstyled">
                <li><Link to="/category/cables" className="footer-link"><span className="underline-word">Cable Gland</span></Link></li>
                <li><Link to="/category/sanitary" className="footer-link"><span className="underline-word">Sanitary Parts</span></Link></li>
                <li><Link to="/category/brass-insert" className="footer-link"><span className="underline-word">Brass Insert</span></Link></li>
                <li><Link to="/category/brass-spirit-bolt" className="footer-link"><span className="underline-word">Brass Spirit Bolt</span></Link></li>

              </ul>
            </Col>

            <Col md={6} lg={3} className='my-10'>
              <span className="footer-heading orange-underline">Contact</span>
              <ul className="list-unstyled flex flex-wrap ">
                <li className="mr-6 mb-2 flex items-center">
                  <img className="mr-3 h-6 w-6 md:h-8 md:w-8 inline-block" src="/images/icons/location.png" alt="company.png" />
                  {t("footer.address")}
                </li>
                <li className="mr-6 mb-2 flex items-center w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-6 w-6 md:h-8 md:w-8 inline-block">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {t("footer.phoneNumber")}
                </li>
                <li className="flex items-center w-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-6 w-6 md:h-8 md:w-8 inline-block">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  {t("footer.email")}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className='rights d-flex justify-content-center '>
          <p>{t("footer.allRightsReserved1")} {currentYear}{t("footer.allRightsReserved2")}</p>
        </div>
      </div>
    </footer>
  );
}
