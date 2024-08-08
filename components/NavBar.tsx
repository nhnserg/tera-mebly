"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import {
  Menu,
  Phone,
  User,
  Heart,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";
import { SelectBar } from "./SelectBar";
import Icon from "./Icon";

const NavBar = () => {
  return (
    <header className="bg-red-500 p-4 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-between w-full md:flex-grow">
          <Link href="/" className="pr-6">
            <Image
              src="/assets/images/logo.webp"
              width={141}
              height={39}
              alt="logo"
            />
          </Link>
          <div className="flex md:hidden space-x-4">
            <Link href="/basket" className="text-white">
              <Icon icon={ShoppingCart} size={24} />
            </Link>
            <Link href="/menu" className="text-white">
              <Icon icon={Menu} size={24} />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-4 text-xs text-black p-1 flex-grow">
          <SelectBar />
        </div>
        <nav className="hidden md:flex flex-col md:flex-row flex-grow items-center justify-between mt-4 md:mt-0 space-x-4">
          <Link
            href="/catalog"
            className="flex flex-col items-center text-center group flex-grow"
          >
            <Icon icon={LayoutDashboard} size={24} color="white" />
            Каталог
          </Link>
          <Link
            href="/contacts"
            className="flex flex-col items-center text-center group flex-grow"
          >
            <Icon icon={Phone} size={24} color="white" className="mb-1" />
            Контакти
          </Link>
          <div className="w-full md:w-auto flex-grow">
            <SearchBar />
          </div>
        </nav>
        <div className="hidden md:flex space-x-4 md:space-x-10 mt-4 md:mt-0">
          <Link
            href="/"
            className="flex flex-col items-center text-center group"
          >
            <Icon icon={User} size={24} className="mb-1" />
            Кабінет
          </Link>
          <Link
            href="/favorites"
            className="flex flex-col items-center text-center group"
          >
            <Icon icon={Heart} size={24} className="" />
            Улюбленне
          </Link>
          <Link
            href="/basket"
            className="flex flex-col items-center text-center group"
          >
            <Icon icon={ShoppingCart} size={24} className="mb-1" />
            Кошик
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
