import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import Photo3 from "../../assets/image/examp2.jpg";
import Bant from "../../assets/image/bant.png";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Մուղնու Սուրբ Գևորգ եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/aNddgDrq5TafCG2Y7?g_st=ic"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Felice ռեստորան"}
            mapSrc={"https://go.2gis.com/2ctv1"}
          />
        </ForthPagePartContext>
      </Container>
      <div className="relative">
        <img
          src={Photo3}
          alt="Restaurant"
          className="w-full my-10 mt-23 grayscale contrast-125 brightness-105"
        />
        <h1
          style={{
            fontFamily: "SaveTheDate", // Այստեղ համոզվեք, որ տառատեսակի անունը ճիշտ է
            textAlign: "center",
            color: "#ffff",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
            fontSize: "2rem", // սա text-4xl-ն է
            fontWeight: "600", // սա font-bold-ն է
            marginTop: "2.5rem", // սա mt-10-ն է
            position: "absolute", // սա absolute-ն է
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)", // սա -translate-x-1/2-ն է
          }}
        >
          Save the Date
        </h1>
      </div>

      <div className="text-center my-14">
        <h2>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible className="absolute w-full h-[322px] bg-white/45 font-[600] px-20">
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
    </ForthPagePart>
  );
};
