"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBar() {
  const [selectedValue, setSelectedValue] = useState<string>("UA");

  useEffect(() => {
    setSelectedValue("UA");
  }, []);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleChange}>
      <SelectTrigger className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <SelectValue placeholder="UA" />
      </SelectTrigger>
      <SelectContent className="absolute mt-2 w-auto rounded-lg border border-gray-600 bg-white text-black shadow-lg">
        <SelectGroup>
          <SelectItem value="RU" className="p-2 hover:bg-gray-200">
            RU
          </SelectItem>
          <SelectItem value="UA" className="p-2 hover:bg-gray-200">
            UA
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
