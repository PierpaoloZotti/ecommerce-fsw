import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { db } from "@/lib/prisma";

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: { gt: 0 },
    },
  });
  return (
    <div>
      <Image
        src="/bannerHome01.png"
        alt="banner"
        width={0}
        height={0}
        className="h-auto w-full overflow-hidden rounded-2xl px-5"
        sizes="100dvh"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
