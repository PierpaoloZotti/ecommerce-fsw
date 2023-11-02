import { Separator } from "@/components/ui/separator";

const OrderBadge = ({ order }: any) => {
  return (
    <div key={order.id} className="rounded-2xl border border-primary p-4">
      <h2 className="font-semibold">
        Order N°:{"  "}
        <span className="text-xs font-thin opacity-60">{order.id}</span>
      </h2>
      <Separator />
      <div></div>
    </div>
  );
};

export default OrderBadge;
