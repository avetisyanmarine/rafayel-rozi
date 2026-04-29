<<<<<<< HEAD
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import "./index.css";
import { preloadFonts } from "./fontLoader.js";
import { AnimatePresence, motion } from "framer-motion";
import WeddingInvitationEnvelope from "./components/wedding-invitation/index.jsx";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import './index.css';
import { preloadFonts } from './fontLoader.js';
import AOS from 'aos'
import 'aos/dist/aos.css'
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77

preloadFonts();

<<<<<<< HEAD
const Main = () => {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
  if (!isOpened) {
    // Ֆիքսում ենք body-ն, որ չշարժվի
    document.body.style.position = "fixed";
    document.body.style.top = `0px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
  } else {
    // Վերադարձնում ենք նախկին վիճակին
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
  }
}, [isOpened]);

  return (
    <>
      <GlobalStyle />
      <App isOpened={isOpened} />
      <AnimatePresence>
        {!isOpened && (
          <WeddingInvitationEnvelope onOpen={() => setIsOpened(true)} />
        )}
      </AnimatePresence>
    </>
  );
};

createRoot(document.getElementById("root")).render(
=======
AOS.init({
  duration: 1000,
  offset: 400,
  once: true,
  easing: 'ease-out-cubic',
})

createRoot(document.getElementById('root')).render(
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
  <StrictMode>
    <Main />
  </StrictMode>,
);
