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
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="flex items-center">
          <Link href="/" className="pr-6">
            <Image
              src="/assets/images/logo.webp"
              width={196}
              height={50}
              alt="logo"
            />
          </Link>
          <div className="ml-4 text-xs text-black p-1">
            <SelectBar />
          </div>
        </div>
        <nav className="flex space-x-4">
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
          <SearchBar />
        </nav>
        <div className="flex space-x-10">
          <Link
            href="/"
            className="flex flex-col items-center text-center group"
          >
            <Icon icon={User} size={24} className=" mb-1" />
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
