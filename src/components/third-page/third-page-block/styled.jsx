import styled from "styled-components";
import { Flexible } from "../../../GlobalStyle";

export const ThirdPageBlockPart = styled(Flexible)`
<<<<<<< HEAD
  justify-content: start;
  gap: 40px;
  margin-top: 120px;
`;
export const ThirdPageBlockPartSvg = styled.div`
  position: relative;
  img {
    width: 70px;
    height: 100%;
    object-fit: contain;
  }
  ${({ line }) =>
    !line &&
    `
      &::before {
        content: "";
        position: absolute;
        top: 86px; 
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        margin-top: 11px;
        height: 102px;
        background: #3d3a3a;
        border-radius: 50px;
      }
    `}
`;
=======
    flex-direction: column;
    gap: 40px;
`
export const ThirdPageBlockPartSvg = styled.div`
    position: relative; 
    img {
      
        max-width: none;
    }

`
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
export const ThirdPageBlockPartContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 12px;
`;
