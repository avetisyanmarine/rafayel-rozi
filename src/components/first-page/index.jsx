import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <div>
        <img src={MainPhoto} />
        <h1 className="bigNumber" data-aos="fade-right" data-aos-delay="200">
          30
        </h1>
        <h1
          className="bigNumber bignumber2"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          05
        </h1>
        <h1
          className="bigNumber bignumber3"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          26
        </h1>
        <Container>
          <FirstPagePartContext>
            <div className="wedding-invite">
              <h2>Հարսանյաց</h2>
              <h2 className="mt-2">Հրավեր</h2>
            </div>
            <Flexible>
              <h1
                className="absolute bottom-10 right-10 text-center"
                style={{
                  fontWeight: 600,
                  color: "#151515",
                }}
              >
                Միշ <br /> Սոֆի
              </h1>
            </Flexible>
          </FirstPagePartContext>
        </Container>
      </div>
    </FirstPagePart>
  );
};
