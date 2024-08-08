import { Search } from "lucide-react";
import React from "react";
import Icon from "./Icon";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative max-w-sm mx-auto">
      <Input
        type="text"
        className="pl-2 pr-12 py-2 border text-black border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Icon icon={Search} size={24} className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
