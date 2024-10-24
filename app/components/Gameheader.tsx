import React from "react";
interface GameheaderProps {
  onClick: () => void;
  title: string;
}

const Gameheader = ({ onClick, title }: GameheaderProps) => {
  return (
    <div className="how-to-play-header">
      <span onClick={onClick} className="icon-back">
        <img src="/images/icon-back.svg" alt="icon back" />
      </span>
      <h1>{title}</h1>
    </div>
  );
};

export default Gameheader;
