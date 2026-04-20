import { Container } from "../../GlobalStyle";
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled";
import PhoneSvg from "../../assets/vectors/Phone.svg";
import Instagram from "../../assets/vectors/instagram.svg";

export const LastFooterPage = () => {
  return (
    <LastFooterPagePart>
      <Container>
        <LastFooterPagePartContext>
          <div className="text-center flex flex-col items-center gap-4">
            <p>Պատրաստվել է</p>
            <div className="flex items-center gap-1 mx-1">
              <img src={Instagram} alt="Instagram" className="inline-block" />
              <a href="https://www.instagram.com/webinvite.am/"> WEB INVITE </a>
            </div>
            <p>կողմից</p>
          </div>
        </LastFooterPagePartContext>
      </Container>
    </LastFooterPagePart>
  );
};
