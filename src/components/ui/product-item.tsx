import { computeProductTotalPrice } from "@/helper/product";
import { Product } from "@prisma/client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const discountedPrice = computeProductTotalPrice(
    product.basePrice.toNumber(),
    product.discountPercentage,
  ).toFixed(2);
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center rounded-xl bg-secondary">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100dvh"
          objectFit="content"
          objectPosition="center"
          className="m-auto h-auto max-h-[60%] w-auto"
        />

        <span className="absolute left-2.5 top-2.5 flex items-center gap-0.5 rounded-full bg-primary px-2 py-1 text-xs font-bold">
          <ArrowDown className="h-4 w-4" />
          {product.discountPercentage}%
        </span>
      </div>
      <div>
        <p className="w-full truncate overflow-ellipsis text-xs font-light text-primary-foreground/75">
          {product.name}
        </p>

        <div className="flex items-baseline gap-x-1 font-semibold">
          <h2>R$</h2>
          <h2>{discountedPrice}</h2>
          <span className="ml-1 text-xs font-light text-secondary-foreground/50 line-through">
            {product.basePrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
