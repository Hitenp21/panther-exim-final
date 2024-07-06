import React, { useEffect, useRef } from 'react';

const GoogleTranslate = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    const addScript = () => {
      scriptRef.current = document.createElement('script');
      scriptRef.current.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      scriptRef.current.async = true;
      document.body.appendChild(scriptRef.current);
    };

    const initTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
          },
          'google_translate_element'
        );
      } else {
        setTimeout(initTranslate, 100);
      }
    };

    window.googleTranslateElementInit = initTranslate;

    // Delay adding the script to ensure React has finished rendering
    setTimeout(addScript, 300);

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999
      }}
    ></div>
  );
};

export default GoogleTranslate;