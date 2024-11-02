"use client";
import { setActiveCategory } from "@/app/features/gameSlice";
import { useAppDispatch } from "@/app/hooks";
import Link from "next/link";
import React from "react";
interface CategoryProps {
  text: string;
}

const Category = ({ text }: CategoryProps) => {
  const dispatch = useAppDispatch();
  const handleSaveCategory = (category: string) => {
    dispatch(setActiveCategory({ category }));
  };

  return (
    <Link
      onClick={() => handleSaveCategory(text)}
      className="category"
      href={`/games/${text}`}
    >
      <h3 className="category-h3">{text}</h3>
    </Link>
  );
};

export default Category;
