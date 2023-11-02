import { ProductWithTotalPrice } from "@/helper/product";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductItemProps = {
  product: ProductWithTotalPrice;
  className?: string;
  quantity?: number;
};

const ProductItem = ({ product, quantity, className }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`} className={`cursor-pointer`}>
      <div className={`flex max-w-[156px] flex-col gap-4`}>
        <div
          className={cn(
            `relative flex h-[170px] w-[156px] items-center rounded-xl bg-secondary`,
            className,
          )}
        >
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100dvw"
            objectFit="content"
            className="m-auto h-auto max-h-[60%] w-auto"
          />
          {quantity && (
            <span className="absolute bottom-1 right-2 text-sm font-semibold text-secondary-foreground">
              x{quantity}
            </span>
          )}

          {product.discountPercentage > 0 && (
            <span className="absolute left-2.5 top-2.5 flex items-center gap-0.5 rounded-full bg-primary px-2 py-0.5 text-xs font-bold">
              <ArrowDown className="h-4 w-4" />
              {product.discountPercentage}%
            </span>
          )}
        </div>
        <div>
          <p className="w-full truncate overflow-ellipsis text-xs font-light text-primary-foreground/75">
            {product.name}
          </p>

          <div>
            {product.discountPercentage > 0 ? (
              <div className="flex items-baseline gap-x-1 font-semibold">
                <h2>R$ {product.totalPrice}</h2>

                <span className="ml-1 text-xs font-light text-secondary-foreground/50 line-through">
                  {product.basePrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex items-baseline gap-x-1 font-semibold">
                <h2>R$</h2>
                <h2>{product.totalPrice}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
