import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import SvgChurch from "../../assets/vectors/church.png";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.png";
import SvgCouple from "../../assets/vectors/cup.png";
import SerLiqySer from "../../assets/image/serliqyser.png";
import PhotoGroup1 from "../../assets/image/groupphoto1.jpg";
import PhotoGroup2 from "../../assets/image/groupphoto2.jpg";
import PhotoGroup3 from "../../assets/image/groupphoto3.jpg";
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
            number={"14:40"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Հռիփսիմե եկեղեցի"
          />

          <ThirdPageBlock
            className="secondBlock"
            uniqueMargin={100}
            line={true}
            ImageSrc={SvgCouple}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Արև Հանդիսությունների Սրահ"
          />
        </ThirdPagePartContext>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Հռիփսիմե եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/gzUZACnnjxVvF93s5"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Արև Հանդիսությունների Սրահ"}
            mapSrc={"https://maps.app.goo.gl/K1sC7RjCT9bhTLCv5"}
          />
        </ForthPagePartContext>
        <div className="flex h-[100vh] gap-[20px] justify-around" style={{marginTop: "70px"}}>
          <div>
            <img src={SerLiqySer} className="h-[100vh] w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src={PhotoGroup1}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup2}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
            <img
              src={PhotoGroup3}
              alt=""
              className="h-1/3 object-cover rounded-[10px]"
            />
          </div>
        </div>
      </Container>
      <Container>
        <ThirdPagePartMini>
          <h3 className="dzev">Սիրով սպասում ենք</h3>
          <hr />
          <h3 className="dzev">Պահպանիր Օրը</h3>
          <h3>Հունիս</h3>
        </ThirdPagePartMini>
        <ThirdPagePartCalendar>
          {[...Array(35)].map((_, i) =>
            i > -1 && i <= 29 ? (
              <div className={i - 1 == 2 ? "special" : ""}>{i + 1}</div>
            ) : (
              <div></div>
            ),
          )}
        </ThirdPagePartCalendar>
      </Container>
    </ThirdPagePart>
  );
};
