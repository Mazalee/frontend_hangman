"use client";

import React from "react";
import GameNav from "./GameNav";
import "../../css/game.css";
import Puzzle from "./Puzzle";
import Buttons from "./Buttons";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import Modal from "../modal/Modal";
import Options from "./Options";

interface FetchGameDetailsProps {
  text: string;
}

const FetchGameDetails = ({ text }: FetchGameDetailsProps) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.game.categories
  );
  const verdict = useAppSelector((state: RootState) => state.game.verdict);
  const gameOver = useAppSelector((state: RootState) => state.game.gameOver);

  return (
    <section className={`game-section ${gameOver ? "game-over" : ""}`}>
      <div className="game-container">
        <GameNav />
        <Puzzle />
        <Buttons />
        {gameOver && (
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
