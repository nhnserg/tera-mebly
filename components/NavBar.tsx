"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import {
  Menu,
  Phone,
  User,
  Heart,
  ShoppingCart,
  LayoutDashboard,
} from "lucide-react";
import Icon from "./Icon";
import MenuModal from "./MenuModal";
// import { SelectBar } from "./SelectBar";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="bg-red-500 p-4 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Логотип и мобильное меню */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="pr-6">
              <Image
                src="/tera-mebly/logo.webp"
                width={141}
                height={39}
                alt="Тера Меблі"
              />
            </Link>
            <div className="flex md:hidden space-x-4">
              <Link href="/basket" className="text-white">
                <Icon icon={ShoppingCart} size={24} />
              </Link>
              <button onClick={openModal} className="text-white">
                <Icon icon={Menu} size={24} />
              </button>
            </div>
          </div>

          {/* Десктопное меню и поисковая строка */}
          <div className="hidden md:flex flex-grow items-center space-x-6">
            <div className="flex items-center space-x-6">
              {/* <SelectBar /> */}
              <Link
                href="/catalog"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={LayoutDashboard} size={24} color="white" />
                <span>Каталог</span>
              </Link>
              <Link
                href="/contacts"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={Phone} size={24} color="white" />
                <span>Контакти</span>
              </Link>
            </div>

            <div className="flex-grow max-w-sm">
              <SearchBar />
            </div>

            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={User} size={24} className="mb-1" />
                <span>Кабінет</span>
              </Link>
              <Link
                href="/favorites"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={Heart} size={24} />
                <span>Улюбленне</span>
              </Link>
              <Link
                href="/basket"
                className="flex flex-col items-center text-center group"
              >
                <Icon icon={ShoppingCart} size={24} className="mb-1" />
                <span>Кошик</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <MenuModal show={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default NavBar;
