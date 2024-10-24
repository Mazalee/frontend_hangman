import React, { useEffect } from "react";
import data from "../../data/data.json";
import Category from "./Category";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { saveCurrentCategory } from "@/app/features/gameSlice";

console.log(data);
const Categories = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.game.categories
  );

  useEffect(() => {
    dispatch(saveCurrentCategory(data.categories));
  }, [dispatch]);

  return (
    <div className="categories">
      {data.categories.map((category) => (
        <Category key={category._id} text={category.name} id={category._id} />
      ))}
    </div>
  );
};

export default Categories;
