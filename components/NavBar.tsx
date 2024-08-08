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
import { SelectBar } from "./SelectBar";
import Icon from "./Icon";
import Modal from "./Modal"; 

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="bg-red-500 p-4 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
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
              <button onClick={openModal} className="text-white">
                <Icon icon={Menu} size={24} />
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center ml-4 text-xs text-black p-1">
            <SelectBar />
          </div>
          <nav className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
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
      <Modal show={isModalOpen} onClose={closeModal}>
        <div>
          <h2 className="text-xl font-semibold">Меню</h2>
          <p>Содержимое вашего меню здесь...</p>
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
