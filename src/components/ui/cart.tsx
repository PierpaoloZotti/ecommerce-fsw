"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col">
      <Badge
        variant="outline"
        className="mb-7 flex w-fit items-center gap-2 border-2 border-primary"
      >
        <ShoppingCartIcon className="h-4 w-4" />
        <span>CART</span>
      </Badge>
      <Separator className="my-1" />
      <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="mb-4 flex flex-col">
                  <CartItem product={product} />
                </div>
              ))
            ) : (
              <div className="flex h-full flex-1 flex-col items-center justify-center">
                <h1>Ops! Nothing Here!</h1>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
      {products.length > 0 && (
        <>
          <Separator className="my-1" />
          <div className="flex justify-between text-sm opacity-70">
            <p>Subtotal</p>
            <p>R${subTotal.toFixed(2)}</p>
          </div>
          <Separator className="my-1" />
          <div className="flex justify-between text-sm opacity-70">
            <p>Discount</p>
            <p>- R${totalDiscount.toFixed(2)}</p>
          </div>
          <Separator className="my-1" />
          <div className="flex justify-between text-sm opacity-70">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <Separator className="my-1" />
          <div className="flex justify-between text-sm font-semibold">
            <p>Total Price</p>
            <p>R${total.toFixed(2)}</p>
          </div>{" "}
          <Button color="primary" className="mt-4 w-full">
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
