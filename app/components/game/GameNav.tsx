import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import React from "react";

const GameNav = () => {
  const activeCategory = useAppSelector(
    (state: RootState) => state.game.activeCategory
  );
  const healthBar = useAppSelector(
    (state: RootState) => state.game.numOfTrialsLeft
  );

  const healthBarProgress = 12.5 * healthBar;

  return (
    <div className="game-header">
      <div className="header-1">
        <div className="menu-button">
          <img src="/images/icon-menu.svg" alt="menu-icon" />
        </div>
        <h2>{activeCategory}</h2>
      </div>

      <div className="header-2">
        <div className="health-bar">
          <span style={{ width: `${healthBarProgress}%` }}></span>
        </div>
        <span className="icon-heart">
          <img src="/images/icon-heart.svg" alt="icon heart" />
        </span>
      </div>
    </div>
  );
};

export default GameNav;
