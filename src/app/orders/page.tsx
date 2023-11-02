import { Separator } from "@/components/ui/separator";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import OrderBadge from "./components/order-badge";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <Badge
        variant="outline"
        className="my-8 ml-4 border-2 border-primary py-1"
      >
        YOURS ORDERS
      </Badge>
      <div className="flex flex-col gap-6 px-4">
        {orders.map((order) => (
          <Link key={order.id} href={`/orders/${order.id}`}>
            <OrderBadge key={order.id} order={order} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
