import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";

const OrderPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-neutral-100">
          Access denied
        </h2>
        <p className="text-sm font-light opacity-20">
          Log In to see your orders
        </p>
      </div>
    );
  }
  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <div>
      OrderPage
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order N° {order.id}</h2>
          <Separator />
          <div>
            {order.orderProducts.map((orderProduct) => (
              <div key={orderProduct.id}>
                <h3>{orderProduct.product.name}</h3>
                <p>R$ {orderProduct.product.basePrice.toFixed(2)}</p>
                <p>Quantity: {orderProduct.quantity}</p>
                <p>
                  Total:{" "}
                  {orderProduct.quantity * Number(orderProduct.basePrice)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
