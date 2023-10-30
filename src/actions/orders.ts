"use server";

import { db } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";

export const createOrder = async (products: CartProduct[], userId: string) => {
  const order = await db.order.create({
    data: {
      userId,
      status: "WAITING_FOR_PAYMENT",
      orderProducts: {
        createMany: {
          data: products.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
          })),
        },
      },
    },
  });
  return order;
};
