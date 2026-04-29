import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const SecondPagePart = styled.div`
  div {
    text-align: center;
  }
  h2 {
    font-size: 30px;
  }
`;

const GridDiv = styled(Flexible)`
  div {
    flex-direction: column;
    text-align: center;
    border-right: 2px solid #1e1e1e;
    padding: 4px 20px;
    p {
      font-size: 23px;
      line-height: 12px;
    }
<<<<<<< HEAD
    h2 {
        color: #3d3a3a;
        font-size: 48px;
        font-weight: 600;
        font-family: ArmAllegrou;
        letter-spacing: 10px;
    }
`
const SecondPagePartContext = styled.div`
    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
        img {
            object-fit: cover;
            margin-right: 20px;
            margin-top: 20px;
        }
        h4 {
            background-color: #ffffff;
            border-radius: 15px;
            padding: 20px;
            font-size: 31px;
            font-family: ArmAllegrou;
            margin-bottom: 40px;
        }
    }
`
export { SecondPagePart, SecondPagePartContext }
=======
  }
  .uniqueBorder {
    border: 0;
  }
`;
export { SecondPagePart, GridDiv };
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
