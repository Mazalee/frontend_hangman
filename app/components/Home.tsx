"use client";
import React from "react";
import { useAppDispatch } from "../hooks";
import {
  openHowToPlay,
  openIntializeStart,
} from "../features/initialize/initialize";

const Home = () => {
  const dispatch = useAppDispatch();

  const handleHowToPlay = () => {
    dispatch(openHowToPlay());
  };
  const handleStart = () => {
    dispatch(openIntializeStart());
  };

  return (
    <section className="home-section">
      <div className="home-container">
        <figure className="logo">
          <img
            className="home-img"
            src="/images/logo.svg"
            alt="the hangman game"
          />
        </figure>
        <div className="btn-container">
          <button className="home-btn" onClick={handleStart}>
            <img
              className="home-btn-logo"
              src="/images/icon-play.svg"
              alt="start"
            />
          </button>
          <button className="play-btn" onClick={handleHowToPlay}>
            how to play
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
