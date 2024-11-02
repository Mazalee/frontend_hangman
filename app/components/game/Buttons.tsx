import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import React from "react";

const Buttons = () => {
  const unneededLetters = useAppSelector(
    (state: RootState) => state.game.unneededLetters
  );
  const alphabets = useAppSelector((state: RootState) => state.game.alphabets);
  const addClassDynamically = (alphabet: string): string => {
    let defaultClass = "game-keys";
    if (unneededLetters.includes(alphabet)) {
      defaultClass = "game-keys picked";
    } else {
      defaultClass = "game-keys";
    }
    return defaultClass;
  };

  return (
    <div className="alphabets">
      {alphabets.map((alphabet: string, index: number) => (
        <button
          key={index}
          className={addClassDynamically(alphabet)}
          type="button"
        >
          {alphabet}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
