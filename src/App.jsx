import { useEffect, useState } from "react";
import { FirstPage } from "./components/first-page";
import { ForthPage } from "./components/forth-page";
import { LastFooterPage } from "./components/last-footer-page";
import { MusicPage } from "./components/music-page";
import { SecondPage } from "./components/second-page";
import { ThirdPage } from "./components/third-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackToTop } from "./components/top-button";
import WeddingInvitationEnvelope from "./components/wedding-invitation";

function App ({isOpened}) {
  useEffect(() => {
<<<<<<< HEAD
    AOS.init({ duration: 2000, once: true, easing: "ease-in-out" });
=======
    AOS.init({ duration: 700, once: true });

>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
  }, []);

  return (
    <>
      <MusicPage isPlaying={isOpened} />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <LastFooterPage />
      {/* <BackToTop /> */}
    </>
  );
}

export default App;
