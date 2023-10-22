import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helper/product";
import { db } from "@/lib/prisma";

const CategoryPage = async ({ params }: any) => {
  const category = await db.product.findMany({
    where: {
      category: {
        slug: params.slug,
      },
    },
  });
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-7 px-5">
      {category.map((category) => (
        <ProductItem
          key={category.id}
          product={computeProductTotalPrice(category)}
        />
      ))}
    </div>
  );
};

export default CategoryPage;
