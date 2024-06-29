// import React, { useState } from 'react';
// import '../../index.css'; // Import the CSS file
// import { Link, useNavigate } from 'react-router-dom';
// import { useData } from '../Data/dataservice';

// const defaultBackgroundImage = 'https://exploreengineering.ca/sites/default/files/2020-02/NEM_mechanical.jpg';

// export function Home() {
//     const { categories } = useData();
//     const [backgroundImage, setBackgroundImage] = useState(defaultBackgroundImage);
//     const [currentCategory, setCurrentCategory] = useState('');
//     // const navigator = useNavigate();

//     const handleMouseEnter = (category) => {
//         setBackgroundImage(category.imageUrl);
//         setCurrentCategory(category.name);
//     };

//     const handleMouseLeave = () => {
//         setBackgroundImage(defaultBackgroundImage);
//         setCurrentCategory('');
//     };

//     return (
//         <>
//             <nav className='sticky top-0 bg-white z-50 shadow'>
//                 {/* Your navigation content goes here */}
//             </nav>
//             <div className='slider-container relative' style={{ height: 'calc(100vh - 64px)' }}>
//                 <div className='slider' style={{ backgroundImage: `url(${backgroundImage})`, transition: 'background-image 0.5s ease', height: '100%' }}>
//                     <div className="categoryNames absolute text-gary-400 bottom-0 left-0 w-full p-4 flex" onMouseLeave={handleMouseLeave}>
//                         {categories.map(category => (
//                             <span key={category._id} className="px-2 py-1 text-gary-400 cursor-pointer" onMouseEnter={() => handleMouseEnter(category)} style={{ fontWeight: '75%', color: 'white', textTransform: 'uppercase', fontSize: '25px', textAlign: 'center', justifyContent: 'space-between' }}>
//                                 {category.name}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className='main relative my-10' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <h1 style={{ fontWeight: 'bold', fontSize: "25px" }}>BRASS CATEGORY</h1>
//                 <p style={{ textAlign: 'center', fontSize: "25px" }}>Our Products Are Suitable For Every Home And Can Give Grace To Any Project. Help yourself indulge into Our Architectural</p>
//             </div>


//             <div className="grid grid-cols-1 m-20 gap-4 sm:grid-cols-2 md:grid-cols-3" style={{ marginBottom: '20px' }}>
//                 {categories.map(({ _id, imageUrl, desc, name }) => (
//                     <Link to={`/category/${name.toString().toLowerCase().replace(/\s/g, '').trim()}`}>
//                         <figure className="snip1477" key={_id}>
//                             <img
//                                 className="h-60 w-full max-w-full rounded-lg object-cover object-center"
//                                 src={imageUrl}
//                                 alt="gallery-photo"
//                             />
//                             <div className="title">
//                                 <div>
//                                     <h4>{name}</h4>
//                                 </div>
//                             </div>
//                             <figcaption>
//                                 <p>{desc}</p>
//                             </figcaption>
//                         </figure>
//                     </Link>
//                 ))}
//             </div>
//         </>
//     );
// }

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css';
import CountsContainer from '../components/count';

export default function Home() {
  return (<>
    <Carousel>
      <Carousel.Item>
        <img width='full' height={500} src="https://thumbs.dreamstime.com/z/electrical-cable-glands-electrical-cable-glands-connected-to-junction-box-105428031.jpg" alt="900x500" />
        <Carousel.Caption>
          <h3>Cable Gland</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="https://www.ifanfittings.com/wp-content/uploads/2023/06/PEX%E6%B0%B4%E6%9A%96%E4%BB%B6_05-1024x624.jpg" />
        <Carousel.Caption>
          <h3>Senitary Parts</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width='full' height={500} alt="900x500" src="https://thumbs.dreamstime.com/z/plumber-s-pipes-fittings-random-mixture-copper-pipe-brass-ideal-use-as-website-header-background-98045501.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* <div className="company-at-glance">
      <h2>COMPANY AT A GLANCE</h2>

      <Container className="company-container">
        <Row className="company-row">
          <Col sm={4} className="company-col">
            <div className="company-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square icon" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
              </svg>
              <h4>PROFILE</h4>
              <span>ABOUT US, MISSION ETC.</span>
              <span className="read-more">READ MORE</span>
            </div>
          </Col>
          <Col sm={4} className="company-col">
            <div className="company-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes icon" viewBox="0 0 16 16">
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
              </svg>
              <h4>OUR RANGE OF PRODUCTS</h4>
              <span>HIGH QUALITY ELECTRICAL PRODUCTS.</span>
              <span className="read-more">READ MORE</span>
            </div>
          </Col>
          <Col sm={4} className="company-col">
            <div className="company-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes icon" viewBox="0 0 16 16">
                <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
              </svg>
              <h4>QUALITY</h4>
              <span>ISO 9001, 18001 & 45001 CERTIFIED CO.</span>
              <span className="read-more">READ MORE</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div> */}



    <div className='my-10'>

      <CountsContainer />
    </div>
    <div class="grid-container">
    <div>
        <img src='/images/home/customer support.png' alt='customer-support.png' />
        <div>
            <h3>Customer Support</h3>
            <p>Our clients tell us our passion is contagious and invigorating. People who are passionate about what they do deliver exceptional results and have fun doing it.</p>
        </div>
    </div>
    <div>
        <img src='/images/home/team work.png' alt='team-work.png' />
        <div>
            <h3>Team Work</h3>
            <p>Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives.</p>
        </div>
    </div>
    <div>
        <img src='/images/home/process.png' alt='process.png' />
        <div>
            <h3>Process Oriented</h3>
            <p>Processes are developed and tested to ensure the product or quality. This also involves making sure suppliers offer quality supplies needed to produce products.</p>
        </div>
    </div>
</div>


    <div class='home-content' id='content'>
      <h2>
        OUR RANGE OF PRODUCTS
      </h2>

      <div class="item e4">
        <img src='/images/home/cableGland.jpg' alt='cableGland.jpg' />
        <Link to="/category/cables">
          <div className="text4">
            <h3>Cable Gland</h3>
            <div className="line middle"></div>
            <p>A picture description here</p>
          </div>
        </Link>
      </div>

      <div class="item e4">
        <Link to='/category/sanitary'>
          <img src='/images/home/sanitryParts.jpg' alt='sanitryParts.jpg' />
          <div className="text4">
            <h3>Sanitary Parts</h3>
            <div className="line middle"></div>
            <p>A picture description here</p>
          </div>
        </Link>
      </div>
      <div class="item e4">

        <img src='https://5.imimg.com/data5/SELLER/Default/2021/5/QL/ZX/MY/41693358/sanitary-hardware-500x500.jpg' alt='product3.jpg' />

        <Link to="">
          <div className="text4">
            <h3>Sanitary Parts</h3>
            <div className="line middle"></div>
            <p>A picture description here</p>
          </div>
        </Link>
      </div>

      <div class="item e4">
        <img src='https://2.imimg.com/data2/WE/PA/MY-4195561/plumbing-sanitary-fittings-500x500.jpg' alt='product4.jpg' />
        <Link to="">
          <div className="text4">
            <h3>Cable Gland</h3>
            <div className="line middle"></div>
            <p>A picture description here</p>
          </div>
        </Link>
      </div>

    </div>


  </>)
}