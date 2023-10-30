import { OrderStatus } from "@prisma/client";

export const getOrderStatus = (status: string) => {
  return {
    [OrderStatus.WAITING_FOR_PAYMENT]: "Waiting for payment",
    [OrderStatus.PAYMENT_CONFIRMED]: "Paid",
    [OrderStatus.CANCELLED]: "Cancelled",
  };
};
