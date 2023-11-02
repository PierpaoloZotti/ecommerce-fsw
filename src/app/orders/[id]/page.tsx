import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { Separator } from "@/components/ui/separator";
import { computeProductTotalPrice } from "@/helper/product";
import { db } from "@/lib/prisma";
import Image from "next/image";

const OrderDetailPage = async ({ params }: any) => {
  const orderDetail = await db.order.findUnique({
    where: {
      id: params.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  if (!orderDetail) {
    return null;
  }
  return (
    <div>
      <Badge
        variant="outline"
        className="my-8 ml-4 border-2 border-primary py-1"
      >
        Order Details
      </Badge>
      <div className="flex flex-col gap-2 px-4 text-sm">
        <div>
          <h2 className=" font-semibold">
            Order N°: <span className="font-light">{orderDetail.id}</span>
          </h2>
          <p className="font-semibold">
            Order Status:{" "}
            <span className="font-light">{orderDetail.status}</span>
          </p>
          <Separator className="my-4" />
        </div>
        <div className="mx-auto grid grid-cols-2 gap-2">
          {orderDetail.orderProducts.map((orderProduct: any) => (
            <div key={orderProduct.id}>
              <ProductItem
                product={computeProductTotalPrice(orderProduct.product)}
                className=" max-h-[100px] max-w-[100px]"
                quantity={orderProduct.quantity}
              />
            </div>
          ))}
        </div>
        <Separator className="my-4" />
      </div>
    </div>
  );
};

export default OrderDetailPage;
