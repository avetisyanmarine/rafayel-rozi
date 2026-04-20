import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import SvgCouple from "../../assets/vectors/cup.png";
import Photo2 from "../../assets/image/photo2.jpg";
import { ForthPagePartContext, ForthPagePart } from "../forth-page/styled";
import { ForthPageBlock } from "../forth-page/fortg-page-block";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            uniqueMargin={50}
            ImageSrc={SvgChurch}
            number={"14:30"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Մուղնի Սուրբ Գևորգ եկեղեցի"
          />

          <ThirdPageBlock
            className="secondBlock"
            uniqueMargin={100}
            line={true}
            ImageSrc={SvgCouple}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Եվրոպա (լենինգրադյան/քըրք քըրքորյան 29)"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Գևորգ եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/aNddgDrq5TafCG2Y7?g_st=ic"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Եվրոպա (Լենինգրադյան 29)"}
            mapSrc={"https://maps.app.goo.gl/oufTUnqRtCSWSdXF6"}
          />
        </ForthPagePartContext>
      </Container>
      <img src={Photo2} alt="Photo 2" className="rounded-[15px] photo2" />

      <Container>
        <ThirdPagePartMini>
          <h3>Սիրով սպասում ենք</h3>
          <hr />
          <h3>Պահպանիր Օրը</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i - 1 == 24 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
