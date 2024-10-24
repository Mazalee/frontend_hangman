"use client";
import React from "react";
import "../../css/how-to-play.css";
export interface HowToPlayCardProps {
  num: string;
  title: string;
  body: string;
}

const HowToPlayCard = ({ body, num, title }: HowToPlayCardProps) => {
  return (
    <article className="how-to-play">
      <h2 className="how-to-play-h2">{num}</h2>
      <h3 className="how-to-play-title">{title}</h3>
      <p className="how-to-play-body">{body}</p>
    </article>
  );
};

export default HowToPlayCard;
