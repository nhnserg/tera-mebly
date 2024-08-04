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
      <SelectTrigger className="bg-transparent text-white">
        <SelectValue placeholder="UA" />
      </SelectTrigger>
      <SelectContent className="rounded-none">
        <SelectGroup>
          <SelectItem value="RUS">RU</SelectItem>
          <SelectItem value="UA">UA</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
