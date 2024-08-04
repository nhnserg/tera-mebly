"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { BsLayoutWtf } from "react-icons/bs";
import { SelectBar } from "./SelectBar";

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
            <BsLayoutWtf className="w-5 h-5 mb-1 group-hover:text-white group-focus:text-white" />
            Каталог
          </div>
          <div className="pr-10 group">
            <Link href="/contacts" className="flex flex-col items-center text-center">
              <FiPhone className="w-5 h-5 mb-1 group-hover:text-white group-focus:text-white" />
            </Link>
            Контакти
          </div>
          <SearchBar />
        </nav>
        <div className="flex space-x-10">
          <Link href="/" className="flex flex-col items-center text-center group">
            <FaRegUser className="w-5 h-5 mb-1 group-hover:text-white group-focus:text-white" />
            Кабінет
          </Link>
          <Link href="/favorites" className="flex flex-col items-center text-center group">
            <CiHeart className="w-6 h-6 group-hover:text-white group-focus:text-white" />
            Улюбленне
          </Link>
          <Link href="/basket" className="flex flex-col items-center text-center group">
            <SlBasket className="w-5 h-5 mb-1 group-hover:text-white group-focus:text-white" />
            Кошик
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
