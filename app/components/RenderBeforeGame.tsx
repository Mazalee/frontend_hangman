"use client";
import React from "react";
import { useAppSelector } from "../hooks";
import {
  isHowToPlayMode,
  isStartMode,
} from "../features/initialize/initialize";
import { RootState } from "../store";
import Home from "./Home";
import HowToPlay from "./how to play/HowToPlay";
import PickCategory from "./pick a category/PickCategory";

const RenderBeforeGame = () => {
  let renderGame;
  const isHowToPlay = useAppSelector(isHowToPlayMode);
  const quitGame = useAppSelector(
    (state: RootState) => state.initialize.quitGame
  );
  const isStart = useAppSelector(isStartMode);
  const isNewCategory = useAppSelector(
    (state: RootState) => state.game.newCategory
  );

  switch (true) {
    case quitGame:
      renderGame = <Home />;
      console.log("quit game");
      break;
    case isStart || isNewCategory:
      console.log("start or new");
      renderGame = <PickCategory />;
      break;
    case isHowToPlay:
      renderGame = <HowToPlay />;
      console.log("how to play");
      break;
    default:
      renderGame = <Home />;
  }

  return renderGame;
};

export default RenderBeforeGame;
