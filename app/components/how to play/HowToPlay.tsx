import React from "react";
import Gameheader from "../Gameheader";
import { howToPlayInfo } from "@/app/data/howToPlay";
import HowToPlayCard from "./HowToPlayCard";
import "../../css/how-to-play.css";
import { useAppDispatch } from "@/app/hooks";
import { closeHowToPlay } from "@/app/features/initialize/initialize";

const HowToPlay = () => {
  const dispatch = useAppDispatch();
  const handleCloseHowToPlay = () => {
    dispatch(closeHowToPlay());
  };

  return (
    <section className="section-how-to-play">
      <div className="how-to-play-cont">
        <Gameheader onClick={handleCloseHowToPlay} title="how to play" />
        <div className="how-to-play-wrapper">
          {howToPlayInfo.map((el) => {
            return <HowToPlayCard {...el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
