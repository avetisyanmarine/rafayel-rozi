import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const ThirdPagePart = styled.div`
  h2 {
    width: fit-content;
    margin: auto;
  }
<<<<<<< HEAD
  .photo2 {
    margin-top: 50px;
    width: 100%;
  }
   .uniqueone{
    margin-top: 40px;
  }
`;
const ThirdPagePartContext = styled.div`
  overflow: hidden;
  .secondBlock {
    margin-left: 19px;
  }
=======
`;
const ThirdPagePartContext = styled.div`
  overflow: hidden;
  text-align: center;
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
`;
const ThirdPagePartMini = styled.div`
  text-align: center;
  h3 {
<<<<<<< HEAD
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 31px;
    margin: 30px 0;
  }
  .dzev {
    font-family: ArmAllegrou;
=======
    letter-spacing: 9px;
    font-weight: 200;
    font-size: 18px;
    margin: 30px 0;
    &:nth-child(1) {
      margin-top: 100px;
    }
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
  }
  hr {
    width: 195px;
    margin: auto;
<<<<<<< HEAD
    background: #3d3a3a;
=======
    background: #1E1E1E;
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
    border: 0;
    height: 2px;
    border-radius: 50px;
  }
`;
<<<<<<< HEAD
const ThirdPagePartCalendar = styled(Flexible)`
  flex-wrap: wrap;
  gap: 10px;
  div {
    text-align: center;
    font-size: 27px;
    flex: 1 0 calc(100% / 7 - 10px);
  }
  .special {
    position: relative;
    &::after {
      content: "";
      width: 45px;
      height: 42px;
=======
const ThirdPagePartCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-top: 20px;
  div {
    text-align: center;
    font-size: 27px;
  }
  .special {
    position: relative;
    font-weight: bold;
    &::after {
      content: "";
      width: 52px;
      height: 47px;
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("/heart.png");
      background-size: cover;
<<<<<<< HEAD
=======
      z-index: -1;
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
    }
  }
`;

export {
  ThirdPagePart,
  ThirdPagePartContext,
  ThirdPagePartMini,
  ThirdPagePartCalendar,
};
