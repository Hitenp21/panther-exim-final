import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const useSubDropdown = () => {
  let timeoutId;
  const [showSubDropdown, setShowSubDropdown] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowSubDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowSubDropdown(false);
    }, 50);  };

  return { showSubDropdown, handleMouseEnter, handleMouseLeave };
};

export default function Navbarlist() {

  const { showSubDropdown: showSubDropdown1, handleMouseEnter: handleMouseEnter1, handleMouseLeave: handleMouseLeave1 } = useSubDropdown();
  const { showSubDropdown: showSubDropdown2, handleMouseEnter: handleMouseEnter2, handleMouseLeave: handleMouseLeave2 } = useSubDropdown();
  const { showSubDropdown: showSubDropdown3, handleMouseEnter: handleMouseEnter3, handleMouseLeave: handleMouseLeave3 } = useSubDropdown();
  const { showSubDropdown: showSubDropdown4, handleMouseEnter: handleMouseEnter4, handleMouseLeave: handleMouseLeave4 } = useSubDropdown();
  const { showSubDropdown: showSubDropdown5, handleMouseEnter: handleMouseEnter5, handleMouseLeave: handleMouseLeave5 } = useSubDropdown();


  let Navigatore = useNavigate();



  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top shadow">
      <Container className='nav'>
        <Link to="/">
          <Navbar.Brand>
            <img src="/images/logo/panther exim.png" alt="Panther Exim" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link">
              <span className='underline-word'>
                HOME
              </span>
            </Link>
            <Link to="/about" className="nav-link">
              <span className='underline-word'>
                ABOUT US
              </span>
            </Link>
            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown" className="nav-dropdown-title" onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              show={showSubDropdown1}
            >
              <NavDropdown.Item >
                <NavDropdown title="Cable Gland" drop="end" className='sub-drop' onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                  show={showSubDropdown2} 
                  onClick={() => Navigatore("/category/cables")}
                  >
                  <NavDropdown.Item>
                    <Link to="/category/cables/brass-stopping-plug" className="dropdown-item" >
                      <span className='underline-word'>
                      Brass Stopping Plug
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cables/extension-piece" className="dropdown-item">
                      <span className='underline-word'>
                      Extension Piece
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cables/earthing-tag" className="dropdown-item">
                      <span className='underline-word'>
                      Earthing Tag
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cables/lock-nut" className="dropdown-item">
                      <span className='underline-word'>
                      Lock Nut
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cables/brass-reducers" className="dropdown-item">
                      <span className='underline-word'>
                      Brass Reducers
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item> */}

                </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavDropdown title="Sanitary Parts" drop="end" className='sub-drop' onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                  show={showSubDropdown3} 
                  onClick={() => Navigatore("/category/sanitary")}
                  >
                  <NavDropdown.Item>
                    <Link to="/category/sanitary/hex-nipple" className="dropdown-item" >
                      <span className='underline-word'>
                      Hex Nipple
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/sanitary/union" className="dropdown-item">
                      <span className='underline-word'>
                      UNION
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/sanitary/reducing-bush" className="dropdown-item">
                      <span className='underline-word'>
                      Reducing Bush
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/sanitary/ROUND-FLANGE" className="dropdown-item">
                      <span className='underline-word'>
                      ROUND FLANGE TANK CONNECTOR SINGLE SIDE MOVE
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/sanitary/TANK-CONNECTOR" className="dropdown-item">
                      <span className='underline-word'>
                      TANK CONNECTOR DOUBLE-SIDE MOVE
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item> */}

                </NavDropdown>
              </NavDropdown.Item>
              {/* <NavDropdown.Item >
                <NavDropdown title="Brass Insert" drop="end" className='sub-drop' onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                  show={showSubDropdown4} 
                  onClick={() => Navigatore("/category/brass-insert")}
                  >
                  <NavDropdown.Item>
                    <Link to="/category/cable-type1" className="dropdown-item" >
                      <span className='underline-word'>
                      Brass Insert Type 1
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                      Sanitary Parts Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>

                </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavDropdown title="Brass Spirit Bolt" drop="end" className='sub-drop' onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                  show={showSubDropdown5} 
                  onClick={() => Navigatore("/category/brass-spirit-bolt")}
                  >
                  <NavDropdown.Item>
                    <Link to="/category/cable-type1" className="dropdown-item" >
                      <span className='underline-word'>
                      Brass Spirit Bolt Type 1
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                      /category/brass-spirit-bolt Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/category/cable-type2" className="dropdown-item">
                      <span className='underline-word'>
                        Cable Type 2
                      </span>
                    </Link>
                  </NavDropdown.Item>

                </NavDropdown>
              </NavDropdown.Item> */}
              
              <NavDropdown.Divider />
              <Link to="/fq" className="dropdown-item">
                <span className='underline-word mx-2' style={{fontWeight:'550'}}>
                  FAQ
                </span>
              </Link>
            </NavDropdown>

            <Link to="/quality" className="nav-link">
              <span className='underline-word'>
                QUALITY
              </span>
            </Link>
            {/* <Link to="/ourCustomer" className="nav-link">
              <span className='underline-word'>
                OUR CUSTOMER
              </span>
            </Link> */}
            <Link to="/contact" className="nav-link">
              <span className='underline-word'>
                CONTACT US
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}














// import { Fragment, useEffect, useRef, useState } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { Link } from 'react-router-dom';
// import categoryData from '../data/category.data';
// import "../index.css"
// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbarlist() {
//   const ref = useRef(null);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [showCategoryName, setShowCategoryName] = useState(false);

//   useEffect(() => {
//     // Fetch categories when the component mounts
//     setCategories(Object.values(categoryData));
//   }, []);

// //   const fetchCategories = async () => {
// //     try {
// //       // Fetch categories from your API
// //       const response = await axios('http://localhost:5000/getCategory');
// //       setCategories(response.data);
// //     } catch (error) {
// //       console.error('Error fetching categories:', error);
// //     }
// //   };

//   const navigation = [
//     { name: 'HOME', to: '/', current: false },
//     { name: 'CATEGORY', to: '/category', current: false, subItems: [...categories] },
//     { name: 'ABOUT US', to: '/about', current: false },
//     { name: 'QUALITY', to: '/quality', current: false },
//     { name: 'CONTACT US', to: '/contact', current: false },
//   ];

//   let intervalId;
//   const handleMouseEnter = (name) => {
//     clearInterval(intervalId);
//     setHoveredCategory(name);
//     setShowCategoryName(name === 'CATEGORY'); // Show submenu only if the hovered item is CATEGORY
//   };

//   const handleMouseLeave = () => {
//     intervalId = setTimeout(() => {
//       setHoveredCategory(null);
//       setShowCategoryName(false);
//     }, 500);
//   };

//   return (
//     <Disclosure as="nav" className="nav bg-neutral-200 fixed w-full z-50 top-0" style={{ fontFamily: 'Nunito Sans, sans-serif'}}>
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="flex items-center justify-center">
//                 <Link to={`/`}>
//                   <img
//                     className="h-16 w-auto mr-6"
//                     src="/images/logo/panther exim.png"
//                     alt="Panther Exim"
//                   />
//                 </Link>
//                 <div className="hidden sm:flex space-x-4">
//                   {navigation.map((item) => (
//                     <Fragment key={item.name}>
//                       {item.subItems ? (
//                         <Menu
//                           as="div"
//                           className="relative"
//                           onMouseEnter={() => handleMouseEnter(item.name)}
//                           onMouseLeave={handleMouseLeave}
//                         >
//                           {/* <Link to={`/category`} className="m-0"> */}
//                             <Menu.Button
//                               className={classNames(
//                                 'text-neutral-600 hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-lg',
//                                 {
//                                   'bg-neutral-100 text-neutral-600': item.current || hoveredCategory === item.name,
//                                 }

//                               )}
//                               // style={{fontSize:'meduim'}}
//                             >
//                               <Link to={`/category`}>

//                               {item.name}
//                               </Link>
//                             </Menu.Button>
//                           {/* </Link> */}
//                           <Transition
//                             show={showCategoryName} // Use showCategoryName instead of hoveredCategory
//                             as={Fragment}
//                             enter="transition ease-out duration-100"
//                             enterFrom="transform opacity-0 scale-95"
//                             enterTo="transform opacity-100 scale-100"
//                             leave="transition ease-in duration-75"
//                             leaveFrom="transform opacity-100 scale-100"
//                             leaveTo="transform opacity-0 scale-95"
//                           >
//                             <Transition.Child as="div" ref={ref}>
//                               {showCategoryName && ( // Use showCategoryName instead of hoveredCategory
//                                 <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                                   {navigation.find(item => item.name === 'CATEGORY').subItems.map((subItem) => (
//                                     <Menu.Item key={subItem}>
//                                       {({ active }) => (
//                                         <Link
//                                           to={`/category/${subItem.link}`}
//                                           className={classNames(
//                                             active ? 'bg-gray-300' : '',
//                                             'block px-4 py-2 text-lg text-neutral-600'
//                                           )}
//                                           style={{ margin: '0' }}
//                                         >
//                                           {subItem.name}
//                                         </Link>
//                                       )}
//                                     </Menu.Item>
//                                   ))}
//                                 </Menu.Items>
//                               )}
//                             </Transition.Child>
//                           </Transition>
//                         </Menu>
//                       ) : (
//                         <Link
//                           to={`${item.to}`}
//                           className={classNames(
//                             item.current ? 'bg-neutral-100 text-white' : 'text-lg text-neutral-600 hover:bg-gray-500 hover:text-white',
//                             'rounded-md px-3 py-2 font-medium'
//                           )}
//                           // style={{fontSize:'meduim'}}
//                           aria-current={item.current ? 'page' : undefined}
//                         >
//                           {item.name}
//                         </Link>
//                       )}
//                     </Fragment>
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
//                 {/* Toggle button */}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>
//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Fragment key={item.name}>
//                   {item.subItems && item.name === 'category' ? (
//                     <div>
//                       <select onChange={(e) => navigation(`/category/${e.target.value.toLowerCase().replace(/\s/g, '').trim()}`)}>
//                         <option value="">{item.name}</option>
//                         {item.subItems.map((subItem) => (
//                           <option key={subItem.name} value={subItem.name}>
//                             {subItem.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   ) : (
//                     <Disclosure.Button
//                       as={Link}
//                       to={item.to}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-lg text-neutral-600 hover:bg-gray-700 hover:text-white',
//                         'block rounded-md px-3 py-2 font-medium',
//                         { 'm-0': true }
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   )}
//                 </Fragment>
//               ))}
//             </div>
//           </Disclosure.Panel>



//         </>
//       )}
//     </Disclosure>
//   );
// }