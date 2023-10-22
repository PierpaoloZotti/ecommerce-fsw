"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="flex flex-col">
      <Badge
        variant="outline"
        className="mb-7 flex w-fit items-center gap-2 border-2 border-primary"
      >
        <ShoppingCartIcon className="h-4 w-4" />
        <span>CART</span>
      </Badge>

      {products.map((product) => (
        <div key={product.id} className="mb-4 flex flex-col">
          <CartItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
