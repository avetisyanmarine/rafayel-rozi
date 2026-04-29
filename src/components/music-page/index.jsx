import { MusicPagePart } from "./styled";
<<<<<<< HEAD
import Pause from "../../assets/vectors/pause.svg";
import Play from "../../assets/vectors/play.svg";
import Song from "../../assets/audio/song.mp3";
import { useEffect, useRef, useState } from "react";

export const MusicPage = ({ isPlaying }) => {
  const audioRef = useRef(null);
  const [manualPlay, setManualPlay] = useState(false);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Playback error:", err));
      setManualPlay(true);
    }
  }, [isPlaying]);

  const handleClick = () => {
    if (manualPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setManualPlay(!manualPlay);
  };
  return (
    <MusicPagePart>
      <div>
        <h4 className="text-[16px]">Maher Zain</h4>
      </div>
      <div onClick={handleClick}>
        <img src={manualPlay ? Pause : Play} alt="music-control" />{" "}
      </div>
      <audio ref={audioRef} src={Song} loop />
=======
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";
import { useRef, useState, useEffect } from "react";

export const MusicPage = () => {
  const audioRef = useRef(null);
  const [showTip, setShowTip] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const hideTip = () => {
    setIsFading(true);
    setTimeout(() => setShowTip(false), 350);
  };

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 43;
      audioRef.current.play();
    }
    hideTip();
  };

  useEffect(() => {
    const timeout = setTimeout(hideTip, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <MusicPagePart onClick={handleClick}>
      <img loading="lazy" src={Music} alt="music" />
      <audio ref={audioRef} src={Song} loop />
      {showTip && (
        <div
          onClick={handleClick}
          className={`tip ${isFading ? "fade-out" : ""}`}
        >
          Սեղմեք այստեղ
        </div>
      )}
>>>>>>> fbb79a48ee4533207568b5b525ff59256600cf77
    </MusicPagePart>
  );
};
