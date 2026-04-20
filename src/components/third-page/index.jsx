import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            uniqueMargin={50}
            imageSize={147}
            ImageSrc={Haverjutyun}
            number={"13:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText="Մուղնի, 6 թղմ, տուն 10"
          />
          <ThirdPageBlock
            imageSize={114}
            ImageSrc={Church}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Արտաշատի Սուրբ Հովհաննես եկեղեցի"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={159}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Ադանա Ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          <h3>Սիրով սպասում ենք</h3>
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
