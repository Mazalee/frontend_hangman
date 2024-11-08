"use client";

import React, { useEffect } from "react";
import GameNav from "./GameNav";
import "../../css/game.css";
import Puzzle from "./Puzzle";
import Buttons from "./Buttons";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import Modal from "../modal/Modal";
import Options from "./Options";
import {
  gamePuzzle,
  loadGameData,
  saveCurrentCategory,
} from "@/app/features/gameSlice";

const FetchGameDetails = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.game.categories
  );
  useEffect(() => {
    if (categories) {
      dispatch(saveCurrentCategory(categories));
      dispatch(loadGameData());
      dispatch(gamePuzzle());
    }
  });
  const verdict = useAppSelector((state: RootState) => state.game.verdict);
  const gameOver = useAppSelector((state: RootState) => state.game.gameOver);
  const isPaused = verdict === "paused";

  return (
    <section
      className={`game-section ${gameOver || isPaused ? "game-over" : ""}`}
    >
      <div className="game-container">
        <GameNav />
        <Puzzle />
        <Buttons />
        {(gameOver || isPaused) && (
          <Modal>
            <p className="verdict">{verdict}</p>
            <Options />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default FetchGameDetails;
