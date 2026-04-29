import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
<<<<<<< HEAD
import { FirstPagePart, FirstPagePartContext, GridDiv } from "./styled";
import { useEffect, useState } from "react";

export const FirstPage = () => {
  const weddingDate = new Date(2026, 5, 14, 0, 0, 0).getTime();
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <FirstPagePart>
      <img src={MainPhoto} className="grayscale" />
      <Container>
        <FirstPagePartContext>
          <h2 style={{ fontSize: "30px", letterSpacing: "1px" }}>
            Հարսանյաց <br /> հրավեր
          </h2>
          <Flexible className="uniqueDiv">
            <h1>Ռաֆայել</h1>
            <p className="text-[89px] and">&</p>
            <h1 className="uniqueH1">Ռոզի</h1>
          </Flexible>
          <div style={{textShadow: "5px 5px 10px black"}} className="w-full absolute bottom-9">
            <h2 className="uniqueH2">Մնաց</h2>
            <GridDiv>
              <Flexible>
                <h2>{formatNumber(timeLeft.days)}</h2>
                <p>Օր</p>
              </Flexible>
              <Flexible>
                <h2>{formatNumber(timeLeft.hours)}</h2>
                <p>Ժամ</p>
              </Flexible>
              <Flexible>
                <h2>{formatNumber(timeLeft.minutes)}</h2>
                <p>Րոպե</p>
              </Flexible>
              <Flexible className="uniqueBorder">
                <h2>{formatNumber(timeLeft.seconds)}</h2>
                <p>Վայրկյան</p>
              </Flexible>
            </GridDiv>
          </div>
=======
import { FirstPagePart, FirstPagePartContext } from "./styled";
import Srtik from "../../assets/image/srtik.png";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale contrast-125 brightness-105" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="mt-5 text-[#000]">
            <h2>Հարսանյաց</h2>
            <h2 className="ml-35 mt-2">հրավեր</h2>
          </div>
          <Flexible>
            <h1
              className="absolute bottom-38"
              style={{
                fontWeight: 600,
                textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
              }}
            >
              Ռաֆայել & Ռոզի
            </h1>
            <img src={Srtik} className="absolute bottom-10" />
          </Flexible>
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
