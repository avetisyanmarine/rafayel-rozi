import { Container, Flexible } from "../../GlobalStyle";
<<<<<<< HEAD
import Church from "../../assets/image/church.jpg";
import Bant from "../../assets/image/bant.png";
import PHoto3 from "../../assets/image/photo3.jpg";
import SaveTheDate from "../../assets/image/savethedate.png";
import { ForthPagePart } from "./styled";
=======
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import Photo3 from "../../assets/image/examp2.jpg";
import Bant from "../../assets/image/bant.png";
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
<<<<<<< HEAD
        <div className="relative">
          <img
            src={PHoto3}
            alt="Photo 3"
            className="rounded-[15px] grayscale"
          />
          <img
            style={{ filter: "drop-shadow(2px 4px 6px black)" }}
            className="absolute top-1.5 left-1.5 w-[130px]"
            src={SaveTheDate}
            alt="Save The Date"
          />
        </div>
      </Container>
      <div style={{ margin: "55px 0" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible
            style={{ padding: "0 25px" }}
            data-aos="fade-up"
            className="absolute w-full h-[322px] bg-white/45 text-2xl"
          >
=======
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
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
<<<<<<< HEAD
      <Container>
        <h2
          className="text-center font-[ArmAllegrou]"
          style={{ margin: "20px 0" }}
        >
          Սիրով ՝ <br /> Ռաֆայել և Ռոզի
        </h2>
      </Container>
=======
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
    </ForthPagePart>
  );
};
