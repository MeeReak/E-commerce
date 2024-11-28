"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CircleXIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { shoppingCart as mockupShoppingCart } from "@/utils/mockup";
import { Button } from "./ui/button";
import Link from "next/link";

interface IShoppingCartItem {
  id: number;
  src: string;
  name: string;
  qty: string;
  price: string;
}

export const ShoppingCart: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shoppingCart, setShoppingCart] =
    useState<IShoppingCartItem[]>(mockupShoppingCart);

  const handleToggleCart = (): void => setIsOpen(!isOpen);

  const handleRemoveItem = (id: number): void => {
    setShoppingCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = (): string => {
    return shoppingCart
      .reduce(
        (total, item) => total + parseFloat(item.price) * parseFloat(item.qty),
        0
      )
      .toFixed(2);
  };

  return (
    <div className="flex items-center relative">
      <CartIcon
        onClick={handleToggleCart}
        itemCount={shoppingCart.length}
        totalPrice={calculateTotalPrice()}
      />

      {/* Overlay with animation */}
      {isOpen && <AnimatedOverlay onClick={handleToggleCart} />}

      {/* Sliding Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-[450px] h-screen bg-white z-50 shadow-lg flex flex-col justify-between"
      >
        <CartHeader
          itemCount={shoppingCart.length}
          onClose={handleToggleCart}
        />

        {/* Cart Items */}
        <div className="overflow-y-auto flex-1">
          {shoppingCart.length > 0 ? (
            shoppingCart.map((item) => (
              <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
            ))
          ) : (
            <EmptyCartMessage />
          )}
        </div>

        <CartFooter
          itemCount={shoppingCart.length}
          totalPrice={calculateTotalPrice()}
          setIsOpen={setIsOpen}
        />
      </motion.div>
    </div>
  );
};

// Individual Components
interface CartIconProps {
  onClick: () => void;
  itemCount: number;
  totalPrice: string;
}

const CartIcon: React.FC<CartIconProps> = ({
  onClick,
  itemCount,
  totalPrice,
}) => (
  <div onClick={onClick} className="flex gap-3 cursor-pointer">
    <div className="relative">
      <ShoppingCartSVG />
      <span className="absolute -top-1 left-[19px] border-white border-2 px-[5px] text-[10px] text-white py-0 bg-[#2C742F] rounded-full">
        {itemCount}
      </span>
    </div>
    <div className="space-y-1">
      <p className="text-gray-600 text-[11px] font-normal leading-[1.2]">
        Shopping cart:
      </p>
      <p className="text-gray-800 text-sm font-medium leading-[1]">
        ${totalPrice}
      </p>
    </div>
  </div>
);

const ShoppingCartSVG: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

interface OverlayProps {
  onClick: () => void;
}

// Animated Overlay component
const AnimatedOverlay: React.FC<OverlayProps> = ({ onClick }) => (
  <motion.div
    className="fixed inset-0 bg-black z-40"
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  />
);

interface CartHeaderProps {
  itemCount: number;
  onClose: () => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({ itemCount, onClose }) => (
  <div className="pt-10 flex justify-around items-center">
    <p className="pr-20 text-[#1A1A1A] text-xl font-medium leading-[1.5]">
      Shopping Cart ({itemCount})
    </p>
    <motion.div
      className="ml-10 cursor-pointer"
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <XIcon className="size-10 stroke-[1.5px]" onClick={onClose} />
    </motion.div>
  </div>
);

interface CartItemProps {
  item: IShoppingCartItem;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => (
  <div className="pt-5 flex gap-x-5 items-center justify-center pb-5 border-b-[1px] border-[#E6E6E6] shadow-sm">
    <Image src={item.src} width={100} height={100} alt="pic" />
    <div className="flex flex-col gap-y-1">
      <p>{item.name}</p>
      <div className="flex gap-x-1 w-[216px]">
        <p>{item.qty}kg</p>
        <p>x</p>
        <p>{item.price}</p>
      </div>
    </div>
    <CircleXIcon
      className="cursor-pointer text-[#CCCCCC] stroke-[1.5px] hover:text-gray-600"
      onClick={() => onRemove(item.id)}
    />
  </div>
);

const EmptyCartMessage: React.FC = () => (
  <div className="flex items-center justify-center pt-5">
    <p>Empty</p>
  </div>
);
interface CartFooterProps {
  itemCount: number;
  totalPrice: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartFooter: React.FC<CartFooterProps> = ({
  itemCount,
  totalPrice,
  setIsOpen,
}) => (
  <div className="pb-10 px-4">
    <div className="flex justify-between pb-5">
      <p className="text-[#1A1A1A] font-poppins font-medium text-[16px] leading-[1.2]">
        {itemCount} Product{itemCount > 1 && "s"}
      </p>
      <p className="text-[#1A1A1A] font-poppins font-semibold text-[16px] leading-[1.2]">
        ${totalPrice}
      </p>
    </div>
    <div className="flex flex-col gap-y-3">
      <Button className="border-none text-white rounded-full py-4 font-semibold text-[16px] leading-[1.2] bg-green-600">
        <Link
          onClick={() => {
            setIsOpen(false);
          }}
          href="/shopping-cart"
        >
          Checkout
        </Link>
      </Button>
      <Button
        className="border-none rounded-full py-4 font-semibold text-[16px] leading-[1.2]"
        variant="ghost"
      >
        <Link href="/product">View Cart</Link>
      </Button>
    </div>
  </div>
);
