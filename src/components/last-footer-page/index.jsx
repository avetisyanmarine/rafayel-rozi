import { Container, Flexible } from "../../GlobalStyle";
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled";
import PhoneSvg from "../../assets/vectors/Phone.svg";
import Webinvite from "../../assets/webinvite.png";

export const LastFooterPage = () => {
  return (
    <LastFooterPagePart className="bg-[#1E1E1E] rounded-tl-[100px] pt-[10px]">
      <Container>
        <LastFooterPagePartContext>
          <p>Հրավիրատոմսը պատրաստվել է</p>
          <Flexible className="items-center justify-center gap-2 mt-4">
            <a
              href="https://www.instagram.com/webinvite.am"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Webinvite} width={150} alt="Webinvite" />
            </a>
            կողմից
          </Flexible>
          <div style={{marginTop: "20px"}}>
            <a
              href="tel:+37477506269"
              className="flex items-center mt-[20px] justify-center gap-2 text-white text-xl font-semibold transition-colors"
            >
              <img
                src={PhoneSvg}
                width={20}
                alt="Phone"
              />
              077 50 62 69
            </a>
          </div>
        </LastFooterPagePartContext>
      </Container>
    </LastFooterPagePart>
  );
};
