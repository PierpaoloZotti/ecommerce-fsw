import { db } from "@/lib/prisma";
import ProductShowcase from "./component/product-showcase";
import TitleHeader from "@/components/ui/title-header";
import ProductList from "@/app/(home)/components/product-list";
import ProductInfo from "./component/product-info";
import { computeProductTotalPrice } from "@/helper/product";
import NoProductFound from "./component/not-founded";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  //this is a better way to select one product and all related products of the same category excluding the current product
  //this way we don't need to make two queries
  const product = await db.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              NOT: {
                slug: params.slug,
              },
            },
          },
        },
      },
    },
  });

  /*   const relatedProducts = await db.product.findMany({  //this is the old way to select related products
    where: {
      categoryId: product?.categoryId,
      NOT: {
        slug: params.slug,
      },
    },
    take: 4,
  }); */
  if (!product) return <NoProductFound />;
  return (
    <>
      <div className="flex flex-col">
        <ProductShowcase product={product} />
      </div>
      <ProductInfo product={computeProductTotalPrice(product)} />
      <TitleHeader title="FEATURED PRODUCTS" />
      <ProductList products={product.category.products} />
    </>
  );
};

export default ProductPage;
