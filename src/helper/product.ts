import { Product } from "@prisma/client";
import { type } from "os";

/* export const computeProductTotalPrice = (
  productPrice: number,
  descontPercentage: number,
): number => {
  let discountedPrice = 0;
  if (descontPercentage > 0) {
    discountedPrice = productPrice - (productPrice * descontPercentage) / 100;
    return discountedPrice;
  } else {
    return productPrice;
  }
}; */
export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }
  return {
    ...product,
    totalPrice:
      Number(product.basePrice) -
      (Number(product.basePrice) * Number(product.discountPercentage)) / 100,
  };
};
