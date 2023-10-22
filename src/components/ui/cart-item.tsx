import { computeProductTotalPrice } from "@/helper/product";
import { CartProduct } from "@/providers/cart";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

type CartItemProps = {
  product: CartProduct;
};

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100dvw"
          className="h-[77px] w-[77px] rounded-lg bg-accent object-contain"
        />
        <div className="flex flex-col">
          <h3 className="text-xs opacity-70">{product.name}</h3>
          <div className="flex items-baseline gap-1">
            <h2 className="text-sm font-semibold">R$ {product.totalPrice}</h2>
            <h4 className="text-xs font-light line-through opacity-70">
              R$ {Number(product.basePrice)}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => {}}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {product.quantity}
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => {}}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <Button size="icon" variant="outline" className="h-8 w-8">
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
