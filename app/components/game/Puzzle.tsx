"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import React, { useEffect, useState } from "react";
import LoadingComponent from "../LoadingComponent";
import {
  checkForCorrectAnswer,
  checkForWin,
  puzzleClue,
  setGameStarted,
  updateAnswer,
} from "@/app/features/gameSlice";

const Puzzle = () => {
  const dispatch = useAppDispatch();
  const selectedWord = useAppSelector(
    (state: RootState) => state.game.selectedWord
  );
  const missingWords = useAppSelector(
    (state: RootState) => state.game.missingWords
  );
  console.log(selectedWord);
  const gameStarted = useAppSelector(
    (state: RootState) => state.game.gameStarted
  );
  const incorrectIndices = useAppSelector(
    (state: RootState) => state.game.incorrectIndices
  );
  const [inputValues, setInputValues] = useState<string[]>(
    selectedWord ? Array(selectedWord.length).fill("") : []
  );

  useEffect(() => {
    if (selectedWord) {
      setInputValues(Array(selectedWord.length).fill(""));
    }
  }, [selectedWord]);

  useEffect(() => {
    if (selectedWord && missingWords) {
      setInputValues(missingWords.map((char) => char || ""));
    }
  }, [selectedWord, missingWords]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;

    setInputValues(newInputValues);
    const userOption = { index, value: event.target.value };
    if (event.target.value !== "") {
      if (!gameStarted) {
        dispatch(setGameStarted(true));
      }
      dispatch(checkForCorrectAnswer(userOption));
      dispatch(checkForWin());
    }
  };

  useEffect(() => {
    if (gameStarted) {
      dispatch(updateAnswer(inputValues));
      dispatch(checkForWin());
    }
  }, [inputValues, gameStarted]);

  useEffect(() => {
    dispatch(puzzleClue());
  }, [inputValues]);

  return (
    <div className="">
      <div className="words">
        {selectedWord ? (
          selectedWord
            .split("")
            .map((char, index) =>
              char === " " ? (
                <span key={index} className="puzzle-whitespace"></span>
              ) : (
                <input
                  key={index}
                  className={`puzzle ${
                    inputValues[index] === "" ? "puzzle-space" : ""
                  } ${incorrectIndices.includes(index) ? "wrong" : ""}`}
                  type="text"
                  value={inputValues[index] || ""}
                  onChange={(event) => handleInputChange(index, event)}
                  readOnly={(missingWords && missingWords[index]) !== ""}
                  placeholder={
                    missingWords && missingWords[index] === "" ? "" : undefined
                  }
                />
              )
            )
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div>
  );
};

export default Puzzle;
