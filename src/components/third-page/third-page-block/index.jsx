import { ThirdPagePartContext } from "../styled";
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled";
<<<<<<< HEAD
=======
import Arrow from "../../../assets/image/arrow.png";
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77

export const ThirdPageBlock = ({
  ImageSrc,
  number,
  bigText,
  smallText,
  uniqueMargin,
<<<<<<< HEAD
  className,
  line,
=======
  line,
  imageSize,
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
}) => {
  return (
    <>
      <ThirdPageBlockPart
<<<<<<< HEAD
        className={className || ""}
        style={{ marginTop: { uniqueMargin } ? `${uniqueMargin}px` : "" }}
      >
        <ThirdPageBlockPartSvg line={line}>
          <img loading="lazy" src={ImageSrc} />
        </ThirdPageBlockPartSvg>
        <ThirdPagePartContext data-aos="fade-left">
=======
        style={{ marginTop: uniqueMargin ? `${uniqueMargin}px` : "" }}
      >
        <ThirdPageBlockPartSvg line={line}>
          <img loading="lazy" src={ImageSrc} width={imageSize} />
        </ThirdPageBlockPartSvg>
        <ThirdPagePartContext data-aos="fade-up">
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
          <h3>{number}</h3>
          <h3>{bigText}</h3>
          <p>{smallText}</p>
        </ThirdPagePartContext>
<<<<<<< HEAD
=======
        {!line && <img src={Arrow} className="mb-5" />}
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
      </ThirdPageBlockPart>
    </>
  );
};
