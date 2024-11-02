import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from ".././data/data.json";

export type Category = string;

interface CategoryItem {
  name: string;
  selected: boolean;
}

interface CategoriesData {
  [key: string]: CategoryItem[];
}

interface IntitalState {
  gameStarted: boolean;
  numOfTrialsLeft: number;
  missingWords: string[] | null;
  alphabets: string[];
  userOption: string[] | null;
  correctWords: string[] | null;
  isCorrect: boolean | null;
  incorrectIndices: number[];
  gameOver: boolean;
  verdict: "" | "you win" | "you lose";
  newCategory: boolean;
  clueLetters: string[];
  selectedLetters: string[];
  unneededLetters: string[];
  categories: string[];
  categoryItems: CategoriesData;
  activeCategory: string | null;
  selectedWord: string | null;
}

const initialState: IntitalState = {
  gameStarted: false,
  numOfTrialsLeft: 8,
  missingWords: null,
  correctWords: null,
  userOption: null,
  isCorrect: null,
  alphabets: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  incorrectIndices: [],
  gameOver: false,
  verdict: "",
  newCategory: false,
  clueLetters: [],
  selectedLetters: [],
  unneededLetters: [],
  categories: Object.keys(data.categories),
  categoryItems: data.categories,
  activeCategory: null,
  selectedWord: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<{ category: string }>) => {
      state.activeCategory = action.payload.category;

      const words = state.categoryItems[action.payload.category];
      if (words) {
        state.selectedWord =
          words[Math.floor(Math.random() * words.length)].name;
      } else {
        state.selectedWord = null;
      }
    },
    loadGameData: (state) => {
      if (!state.activeCategory) return;

      const words =
        state.categoryItems[state.activeCategory]?.map((item) => item.name) ||
        [];
      state.selectedWord = words[Math.floor(Math.random() * words.length)];
      state.missingWords = Array(state.selectedWord.length).fill("");
    },
    saveCurrentCategory: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setGameStarted: (state, action: PayloadAction<boolean>) => {
      state.gameStarted = action.payload;
    },
    updateAnswer: (state, action: PayloadAction<string[]>) => {
      state.userOption = action.payload;
    },
    checkForCorrectAnswer: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      const { index, value } = action.payload;
      if (!state.correctWords) return;

      const correctWordMatch = state.correctWords[index];
      if (value === "") return;

      if (correctWordMatch.toLowerCase() !== value.toLowerCase()) {
        state.isCorrect = false;
        state.incorrectIndices.push(index);
        state.numOfTrialsLeft--;
        if (state.numOfTrialsLeft < 1) {
          state.numOfTrialsLeft = 0;
          state.gameOver = true;
          state.verdict = "you lose";

          return;
        }
      } else if (correctWordMatch.toLowerCase() === value.toLowerCase()) {
        state.isCorrect = true;
        state.incorrectIndices = state.incorrectIndices.filter(
          (i) => i !== index
        );
        console.log("checking answer is active");
      }
    },
    checkForWin: (state) => {
      if (!state.correctWords || !state.userOption) return;

      const isArrayEqual = state.userOption.every(
        (value, index) =>
          value.toLowerCase() === state.correctWords![index].toLowerCase()
      );
      if (isArrayEqual) {
        state.gameOver = true;
        state.verdict = "you win";
        console.log("this is a win state");
      }
    },
    playAgain: (state) => {
      if (!state.categories) return;

      state.numOfTrialsLeft = 8;
      state.verdict = "";
      state.userOption = null;
      state.missingWords = null;
      state.correctWords = null;
      state.isCorrect = null;
      state.incorrectIndices = [];
      state.gameOver = false;
      state.gameStarted = false;
    },
    setNewCategory: (state) => {
      state.newCategory = true;
      state.categories = [];
      state.userOption = null;
    },
  },
});

export const {
  saveCurrentCategory,
  setGameStarted,
  setActiveCategory,
  loadGameData,
  checkForCorrectAnswer,
  checkForWin,
  playAgain,
  setNewCategory,
  updateAnswer,
} = gameSlice.actions;
export default gameSlice.reducer;
