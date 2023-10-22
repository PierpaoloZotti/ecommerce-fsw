"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helper/product";
import { CartContext } from "@/providers/cart";
import { ArrowDown, ChevronLeft, ChevronRight, Truck } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addProductToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleAddToCart = () => {
    addProductToCart({
      ...product,
      quantity,
    });
  };
  return (
    <div className="flex flex-col gap-0.5 px-5">
      <span className="text-xs font-extralight text-primary-foreground/70">
        NEW | 100 selleds
      </span>
      <h2 className="text-lg">{product.name}</h2>
      <span className="text-xs text-primary">Avaiable in stock</span>
      {product.discountPercentage > 0 ? (
        <div className="mt-3 flex flex-col">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">R$ {product.totalPrice}</h2>
            <Badge className="ml-2" color="primary">
              <ArrowDown size={16} />
              {product.discountPercentage}%
            </Badge>
          </div>
          <h3 className="text-sm text-primary-foreground/70">
            from: R${" "}
            <span className="line-through">{Number(product.basePrice)}</span>
          </h3>
        </div>
      ) : (
        <h2 className="mt-3 text-xl font-bold">R$ {product.totalPrice}</h2>
      )}
      <div className="my-7 flex items-center gap-3">
        <Button variant="outline" size="icon" onClick={handleDecrement}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {quantity}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <h4 className="text-sm font-semibold">Description</h4>
      <p className="text-xs font-light text-primary-foreground/70">
        {product.description}
      </p>
      <Button
        onClick={handleAddToCart}
        className="mt-7 w-full rounded-lg bg-primary text-lg font-bold"
      >
        Add to cart
      </Button>
      <div className="mt-5 flex items-center justify-evenly rounded-lg bg-accent py-2.5">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Truck size={30} />
            <span className="absolute -left-1 top-2.5 h-0.5 w-3 bg-white" />
            <span className="absolute -left-0.5 top-3.5 h-0.5 w-2 bg-white" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-light">
              Delivery by <span className="font-semibold">FSPacket</span>&reg;
            </span>
            <span className="text-xs text-primary">Shipped to all Brazil</span>
          </div>
        </div>
        <span className="text-xs">Free Shipping</span>
      </div>
    </div>
  );
};

export default ProductInfo;
