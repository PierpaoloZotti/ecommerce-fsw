import CategoryItem from "./category-item";
import { db } from "@/lib/prisma";

const Categories = async () => {
  const categories = await db.category.findMany();
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-[10px]">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
