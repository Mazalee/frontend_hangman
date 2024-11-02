import data from "../../data/data.json";
import Category from "./Category";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

console.log(data.categories);
const Categories = () => {
  const categories = useAppSelector(
    (state: RootState) => state.game.categories
  );

  return (
    <div className="categories">
      {categories.map((category) => (
        <Category key={category} text={category} />
      ))}
    </div>
  );
};

export default Categories;
