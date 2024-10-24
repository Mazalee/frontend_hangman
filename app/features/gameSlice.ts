import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from ".././data/data.json";

interface GameData {
  name: string;
  selected: boolean;
  _id: string;
}

export interface CategoryData {
  _id: string;
  name: string;
  items: GameData[];
  // [Category: string]: GameData[];
}

interface IntitalState {
  gameStarted: boolean;
  numOfTrialsLeft: number;
  category: CategoryData | null;
  game: GameData | null;
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
  categories: CategoryData[];
}

const initialState: IntitalState = {
  gameStarted: false,
  category: null,
  numOfTrialsLeft: 8,
  game: null,
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
  categories: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    saveCurrentCategory: (state, action: PayloadAction<CategoryData>) => {
      state.category = action.payload;
    },
  },
});

export const { saveCurrentCategory } = gameSlice.actions;
export default gameSlice.reducer;
