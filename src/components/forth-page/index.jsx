import { Container, Flexible } from "../../GlobalStyle";
import Church from "../../assets/image/church.jpg";
import Bant from "../../assets/image/bant.png";
import PHoto3 from "../../assets/image/photo3.jpg";
import SaveTheDate from "../../assets/image/savethedate.png";
import AttendanceGuests from "../AttendanceGuests";
import { ForthPagePart } from "./styled";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>

        <div className="relative">
          <img src={PHoto3} alt="Photo 3" className="rounded-[15px]" />
          <img
            className="absolute top-1.5 left-1.5 w-[130px]"
            src={SaveTheDate}
            alt="Save The Date"
          />
        </div>
      </Container>
      <div style={{ marginTop: "45px" }} className="text-center w-full">
        <h2 style={{ marginBottom: "20px" }}>Դետալներ</h2>
        <Flexible>
          {/* <img src={Bant} className="mx-auto my-8 grayscale" /> */}
          <Flexible
            style={{ padding: "20px 25px" }}
            data-aos="fade-up"
            className="w-full  bg-white/45 text-2xl"
          >
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
          </Flexible>
        </Flexible>
      </div>
      <Container>
        <h2 className="text-center font-[ArmAllegrou]" style={{marginBottom: "20px"}}>
          Սիրով ՝ <br /> Սարգիս և Նարինե
        </h2>
      </Container>
    </ForthPagePart>
  );
};
