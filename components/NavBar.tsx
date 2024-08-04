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
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="">
            <Image
              src="/assets/images/tera-mebly.png"
              width={50}
              height={197}
              alt="logo"
            />
          </Link>
          <div className="ml-4 text-xs text-black p-1">
            <SelectBar />
          </div>
        </div>
        <nav className="flex space-x-4">
          <div>
            <Link
              href="/catolog"
              className="flex flex-col items-center text-center"
            >
              <BsLayoutWtf className="w-5 h-5 mb-1" />
            </Link>
            Каталог
          </div>
          <div>
            <Link
              href="/contacts"
              className="flex flex-col items-center text-center"
            >
              <FiPhone className="w-5 h-5 mb-1" />
            </Link>
            Контакти
          </div>
          <SearchBar />
        </nav>
        <div className="flex space-x-4  ">
          <Link href="/" className="flex flex-col items-center text-center">
            <FaRegUser className="w-5 h-5 mb-1" />
            Кабінет
          </Link>
          <Link
            href="/favorites"
            className="flex flex-col items-center text-center"
          >
            <CiHeart className="w-6 h-6" />
            Улюбленне
          </Link>
          <Link
            href="/basket"
            className="flex flex-col items-center text-center"
          >
            <SlBasket className="w-5 h-5 mb-1" />
            Кошик
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
