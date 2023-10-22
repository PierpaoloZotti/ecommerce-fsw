"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

type ProductShowcaseProps = {
  product: Product;
};

const ProductShowcase = ({ product }: ProductShowcaseProps) => {
  const [mainImage, setMainImage] = useState(product.imageUrls[0]);
  return (
    <div>
      <div className="flex h-[380px] w-full flex-col items-center justify-center bg-accent">
        <Image
          src={mainImage}
          alt={product.slug}
          height={0}
          width={0}
          sizes="100dvh"
          className="h-auto w-3/4 object-contain"
        />
      </div>
      <div className="-mt-8 rounded-t-xl bg-background">
        <div className="flex items-center justify-between rounded-xl bg-background px-5 py-8">
          {product.imageUrls.map((image) => (
            <button
              key={image}
              className={`relative flex h-[77px] w-[77px] cursor-pointer items-center justify-center rounded-xl bg-accent ${
                image === mainImage && "ring-2 ring-primary"
              }`}
              onClick={() => setMainImage(image)}
            >
              <Image
                src={image}
                alt={product.slug}
                height={0}
                width={0}
                sizes="100dvh"
                className="h-auto w-3/4 object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
