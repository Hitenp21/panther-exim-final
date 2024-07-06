import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import {isMobile} from 'react-device-detect';

const WhatsAppButton = () => {
    let phoneNumber = "";
    let whatsappUrl ="";
    const message = 'Hello! I have a question.'; // Optional pre-filled message
    if(isMobile){
        phoneNumber = '+917984353863';
        whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    }else{
        phoneNumber = '7984353863';
        whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        boxShadow: '2px 2px 3px #999',
        zIndex: 1000,
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;