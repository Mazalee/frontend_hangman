import { HowToPlayCardProps } from "../components/how to play/HowToPlayCard";

export const howToPlayInfo: HowToPlayCardProps[] = [
  {
    num: "01",
    title: "Choose a category",
    body: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    num: "02",
    title: "Guess letters",
    body: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    num: "03",
    title: "win or lose",
    body: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];
