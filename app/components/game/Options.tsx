import {
  loadGameData,
  playAgain,
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
  const category = useAppSelector(
    (state: RootState) => state.game.activeCategory
  );
  const categoryItems = useAppSelector(
    (state: RootState) => state.game.categoryItems
  );
  const handlePlayAgain = () => {
    dispatch(playAgain());
    dispatch(loadGameData());
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
      <button onClick={handlePlayAgain} className="options-1">
        play again
      </button>
      <button onClick={handleNewCategory} className="options-2">
        new category
      </button>
      <button onClick={handleQuitGame} className="options-3">
        quit game
      </button>
    </div>
  );
};

export default Options;
