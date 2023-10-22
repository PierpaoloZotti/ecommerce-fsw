import { db } from "@/lib/prisma";
import ProductShowcase from "./component/product-showcase";
import TitleHeader from "@/components/ui/title-header";
import ProductList from "@/app/(home)/components/product-list";

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
  const relatedProducts = await db.product.findMany({
    where: {
      categoryId: product?.categoryId,
      NOT: {
        slug: params.slug,
      },
    },
    take: 4,
  });

  return (
    <>
      <div className="flex flex-col">
        {product && <ProductShowcase product={product} />}
      </div>

      <TitleHeader title="FEATURED PRODUCTS" />
      <ProductList products={relatedProducts} />
    </>
  );
};

export default ProductPage;
