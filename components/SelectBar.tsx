import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBar() {
  return (
    <Select>
      <SelectTrigger className="bg-transparent text-white">
        <SelectValue placeholder="UA" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="RUS">RUS</SelectItem>
          <SelectItem value="UA">UA</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
