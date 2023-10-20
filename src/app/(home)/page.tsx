import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { db } from "@/lib/prisma";
import TitleHeader from "@/components/ui/title-header";
import Banner from "./components/banner";

export default async function Home() {
  const deals = await db.product.findMany({
    where: {
      discountPercentage: { gt: 0 },
    },
  });

  const mouses = await db.product.findMany({
    where: {
      category: {
        name: "Mouses",
      },
    },
  });

  const keyboards = await db.product.findMany({
    where: {
      category: {
        name: "Teclados",
      },
    },
  });

  return (
    <>
      <Banner src="/bannerHome01.png" alt="banner1" />

      <div className="mt-8 px-5">
        <Categories />
      </div>
      <TitleHeader title="DEALS" />
      <ProductList products={deals} />
      <Banner src="/bannerHome02.png" alt="banner2" />
      <TitleHeader title="KEYBOARDS" />
      <ProductList products={keyboards} />
      <Banner src="/bannerHome03.png" alt="banner3" />
      <TitleHeader title="MOUSES" />
      <ProductList products={mouses} />
    </>
  );
}
