import { db } from "@/lib/prisma";
import Image from "next/image";
import ProductShowcase from "./component/product-showcase";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await db.product.findFirst({
    where: {
      slug: params.slug,
    },
  });
  return (
    <div className="flex flex-col">
      {product && <ProductShowcase product={product} />}
    </div>
  );
};

export default ProductPage;
