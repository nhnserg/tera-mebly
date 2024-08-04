"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import {
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
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="pr-6">
            <Image
              src="/assets/images/logo.webp"
              width={196}
              height={50}
              alt="logo"
            />
          </Link>
          <div className="block md:hidden">
            <Icon icon={LayoutDashboard} size={24} color="white" />
          </div>
        </div>
        <div className="hidden md:flex items-center ml-4 text-xs text-black p-1">
          <SelectBar />
        </div>
        <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <div className="flex flex-col items-center text-center pr-5 group">
            <Icon icon={LayoutDashboard} size={24} color="white" />
            Каталог
          </div>
          <div className="pr-10 group">
            <Link
              href="/contacts"
              className="flex flex-col items-center text-center"
            >
              <Icon icon={Phone} size={24} color="white" className="mb-1" />
            </Link>
            Контакти
          </div>
          <div className="w-full md:w-auto">
            <SearchBar />
          </div>
        </nav>
        <div className="flex space-x-4 md:space-x-10 mt-4 md:mt-0">
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
