import {
  gamePuzzle,
  loadGameData,
  playAgain,
  resumeGame,
  setNewCategory,
} from "@/app/features/gameSlice";
import { setQuitGame } from "@/app/features/initialize/initialize";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import React from "react";

const Options = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const verdict = useAppSelector((state: RootState) => state.game.verdict);

  const handlePlayAgain = () => {
    dispatch(playAgain());
    dispatch(loadGameData());
    dispatch(gamePuzzle());
  };

  const handleContinue = () => {
    dispatch(resumeGame());
  };

  const handleNewCategory = () => {
    dispatch(playAgain());
    dispatch(setNewCategory());
    router.push("/");
  };

  const handleQuitGame = () => {
    dispatch(playAgain());
    dispatch(setQuitGame());
    router.push("/");
  };

  return (
    <div className="options">
      {verdict === "paused" ? (
        <button onClick={handleContinue} className="option-1">
          continue
        </button>
      ) : (
        <button onClick={handlePlayAgain} className="option-1">
          play again
        </button>
      )}
      <button onClick={handleNewCategory} className="option-2">
        new category
      </button>
      <button onClick={handleQuitGame} className="option-3">
        quit game
      </button>
    </div>
  );
};

export default Options;
