import React from "react";
import "../../css/pick-category.css";
import Gameheader from "../Gameheader";
import { closeInitializeStart } from "@/app/features/initialize/initialize";
import { useAppDispatch } from "@/app/hooks";
import Categories from "./Categories";

const PickCategory = () => {
  const dispatch = useAppDispatch();
  const handleCloseStartGame = () => {
    dispatch(closeInitializeStart());
  };

  return (
    <div className="pick-category">
      <Gameheader onClick={handleCloseStartGame} title="pick a category" />
      <Categories />
    </div>
  );
};

export default PickCategory;
