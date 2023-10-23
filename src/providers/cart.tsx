"use client";
import { ProductWithTotalPrice } from "@/helper/product";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  subTotal: number;
  total: number;
  totalDiscount: number;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  removeProduct: (id: string) => void;
  addProductToCart: (product: CartProduct) => void;
}
export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  subTotal: 0,
  total: 0,
  totalDiscount: 0,
  decreaseQuantity: () => {},
  removeProduct: () => {},
  increaseQuantity: () => {},
  addProductToCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem("cart") || "[]"),
  );

  //creating persistent cart
  useEffect(() => {
    const cart = localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  const addProductToCart = (product: CartProduct) => {
    //check if product is already in cart
    const isProductInCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );
    if (isProductInCart) {
      setProducts((prev) =>
        prev.map((cartProduct) =>
          cartProduct.id === product.id
            ? {
                ...cartProduct,
                quantity: cartProduct.quantity + product.quantity,
              }
            : cartProduct,
        ),
      );
    } else {
      setProducts((prev) => [...prev, product]); //if product is not in cart, add it
    }
  };

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.totalPrice) * product.quantity;
    }, 0);
  }, [products]);

  const totalDiscount = subTotal - total;

  const increaseQuantity = (id: string) => {
    setProducts((prev) =>
      prev
        .map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product,
        )
        .filter((product) => product.quantity > 0),
    );
  };

  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const decreaseQuantity = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        subTotal,
        total,
        totalDiscount,
        addProductToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
