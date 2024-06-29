
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { useEffect, useState } from "react";
// import categoryData from '../data/category.data';
// // import axios from "axios";


// const currentYear = new Date().getFullYear();

// export function Footer() {

//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         setCategories(Object.values(categoryData));
//     }, []);



//     return (
//         <footer
//             className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left w-full pin-b">
//             <div
//                 className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
//                 <div className="mr-12 hidden lg:block">
//                     <span>Get connected with us on social networks:</span>
//                 </div>
//                 <div className="flex justify-center">
//                     <a className="mr-6 text-neutral-600 dark:text-neutral-200" >
//                         <Link to="">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-4 w-4"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24">
//                                 <path
//                                     d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                             </svg>
//                         </Link>
//                     </a>
//                     <a className="mr-6 text-neutral-600 dark:text-neutral-200">
//                         <Link to="">

//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-4 w-4"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24">
//                                 <path
//                                     d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                             </svg>
//                         </Link>
//                     </a>
//                     <a className="mr-6 text-neutral-600 dark:text-neutral-200">
//                         <Link to="">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-4 w-4"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24">
//                                 <path
//                                     d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                             </svg>
//                         </Link>
//                     </a>
//                 </div>
//             </div>


//             {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
//             <div className="mx-6 py-10 text-center md:text-left">
//                 <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//                     {/* <!-- TW Elements section --> */}

//                     <div className="">
//                         <h6
//                             className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-center">
//                             <img src="/images/logo/panther exim.png" className="mr-3 h-16 w-auto"></img>
//                         </h6>
//                         <p>
//                             Here you can use rows and columns to organize your footer
//                             content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                             elit.
//                         </p>
//                     </div>
//                     {/* <!-- Products section --> */}
//                     <div className="">
//                         <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Category</h6>
//                         {categories.map((category) => (
//                             <p key={category.id} className="mb-4">
//                                 <Link to={`/category/${category.link}`}>
//                                     <a className="text-neutral-600 dark:text-neutral-200">{category.name}</a>
//                                 </Link>
//                             </p>
//                         ))}
//                     </div>
//                     <div className="">
//                         <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
//                             Shop
//                         </h6>
//                         <p className="mb-4">
//                             <Link to="/about">
//                                 <a className="text-neutral-600 dark:text-neutral-200">About</a>
//                             </Link>
//                         </p>
//                         <p className="mb-4">
//                             <Link to="/contact">
//                                 <a className="text-neutral-600 dark:text-neutral-200">Contact</a>
//                             </Link>
//                         </p>
//                     </div>
//                     <div>
//                         <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
//                         <p className="mb-4 flex items-center justify-center md:justify-start">
//                             {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-14 w-14 md:h-14 md:w-14">
//                                 <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
//                                 <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
//                             </svg> */}
//                             <img className="mr-3 h-5 w-5 md:h-6 md:w-6" src="/images/icons/location.png" alt="company.png"/>
//                             <span className="text-sm md:text-base">Apple Gate, Plot No. 3021, Phase-III, GIDC Phase III, G.I, D.C, Dared, Jamnagar, Gujarat 361004</span>
//                         </p>
//                         <p className="mb-4 flex items-center justify-center md:justify-start" >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5 md:h-6 md:w-6">
//                                 <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
//                                 <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
//                             </svg>
//                             <span className="text-sm md:text-base">info@example.com</span>
//                         </p>
//                         <p className="mb-4 flex items-center justify-center md:justify-start">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5 md:h-6 md:w-6">
//                                 <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
//                             </svg>
//                             <span className="text-sm md:text-base">+91 7984353863</span>
//                         </p>
//                         <p className="flex items-center justify-center md:justify-start">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5 md:h-6 md:w-6">
//                                 <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clipRule="evenodd" />
//                             </svg>
//                             <span className="text-sm md:text-base">+01 234 567 89</span>
//                         </p>
//                     </div>

//                 </div>
//             </div>

//             {/* <!--Copyright section--> */}
//             <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
//                 <span>©{currentYear} All Rights Reserved.</span>
//             </div>
//         </footer>
//     );
// }




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
                <li><Link to="/" className="footer-link"><span className="underline-word">{t("footer.home")}</span></Link></li>
                <li><Link to="/about" className="footer-link"><span className="underline-word">{t("footer.aboutUs")}</span></Link></li>
                <li><Link to="/category" className="footer-link"><span className="underline-word">{t("footer.category")}</span></Link></li>
                <li><Link to="/quality" className="footer-link"><span className="underline-word">{t("footer.quality")}</span></Link></li>
                <li><Link to="/ourcustomer" className="footer-link"><span className="underline-word">Our Customer</span></Link></li>

                <li><Link to="/contact" className="footer-link"><span className="underline-word">{t("footer.contactUs")}</span></Link></li>
              </ul>
            </Col>
            <Col md={6} lg={3} className='my-10 custom-col'>
              <span className="footer-heading orange-underline">Products</span>
              <ul className="list-unstyled">
                <li><Link to="/category/cables" className="footer-link"><span className="underline-word">{t("footer.cableGland")}</span></Link></li>
                <li><Link to="/category/sanitary" className="footer-link"><span className="underline-word">{t("footer.sanitaryParts")}</span></Link></li>
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
