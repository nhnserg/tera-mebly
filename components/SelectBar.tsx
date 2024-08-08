"use client";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectBar() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const { pathname, asPath, query } = router;

  const handleChange = (value: string) => {
    router.push({ pathname, query }, asPath, { locale: value });
  };

  return (
    <Select value={i18n.language} onValueChange={handleChange}>
      <SelectTrigger className="bg-transparent text-white">
        <SelectValue placeholder={i18n.language.toUpperCase()} />
      </SelectTrigger>
      <SelectContent className="rounded-none">
        <SelectGroup>
          <SelectItem value="ua">UA</SelectItem>
          <SelectItem value="ru">RU</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
