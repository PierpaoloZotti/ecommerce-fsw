import { Category } from "@prisma/client";
import Image from "next/image";

type CatalogItemProps = {
  category: Category;
};

const CatalogItem = ({ category }: CatalogItemProps) => {
  return (
    <div className="flex h-[193px] w-full flex-col overflow-hidden rounded-xl bg-accent">
      <div className="flex h-[80%] w-full items-center justify-center bg-gradient-to-tr from-primary to-primary/20">
        <Image
          src={category.imageUrl}
          height={0}
          width={0}
          sizes="100dvh"
          className="h-auto w-3/4"
          alt={category.slug}
        />
      </div>
      <div className="flex h-[20%] items-center justify-center font-bold">
        <h2>{category.name}</h2>
      </div>
    </div>
  );
};

export default CatalogItem;
