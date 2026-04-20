import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const FirstPagePart = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  height: 100svh;
  overflow: hidden;
  div {
    background-color: rgb(191 182 182 / 40%);
    width: 100%;
    height: 100%;
    z-index: 0;
    margin: 0;
    .bigNumber {
      font-size: 120px;
      font-weight: 600;
      width: 100%;
      color: #151515;
      position: absolute;
      left: 15px;
      top: 10px;
      font-weight: 100;
      z-index: 10;
    }
    .bignumber2 {
      left: 55px;
      top: 78px;
    }
    .bignumber3 {
      left: 15px;
      top: 143px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
      /* filter: grayscale(30%); */
    }
  }
`;
const FirstPagePartContext = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  height: 100%;
  line-height: 49px;
  .wedding-invite {
    h2 {
      text-align: center;
      z-index: -1;
      font-family: ArmAllegrou;
      line-height: 35px;
      letter-spacing: 5px;
      font-weight: 600;
      color: #15151596;
    }
  }
  img {
    width: 137px;
    height: 97px;
  }
  .uniqueH2 {
    font-family: ArmenianDecorativeU-Italic;
    margin-bottom: 28px;
  }
  .uniqueDiv {
    flex-direction: column;
    gap: 10px;
    margin-top: -24px;

    .uniqueH1 {
      line-height: 48px;
    }
    p {
      color: #965a00;
      font-family: ArmAllegrou;
      font-weight: 400;
      margin-top: -64px;
    }
  }
`;
export { FirstPagePart, FirstPagePartContext };
