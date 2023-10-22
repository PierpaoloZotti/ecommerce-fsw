"use client";

import { Product } from "@prisma/client";
import Image from "next/image";

type ProductShowcaseProps = {
  product: Product;
};

const ProductShowcase = ({ product }: ProductShowcaseProps) => {
  return (
    <div>
      <div className="flex h-[380px] w-full flex-col items-center justify-center bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.slug}
          height={0}
          width={0}
          sizes="100dvh"
          className="h-auto w-3/4 object-contain"
        />
      </div>
      <div className="-mt-8 rounded-t-xl bg-background">
        <div className="flex items-center justify-between rounded-xl bg-[#0b0b0b] px-5 py-8">
          {product.imageUrls.map((image) => (
            <div
              key={image}
              className="relative flex h-[77px] w-[77px] items-center justify-center rounded-xl bg-accent"
            >
              <Image
                src={image}
                alt={product.slug}
                height={0}
                width={0}
                sizes="100dvh"
                className="h-auto w-3/4 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
