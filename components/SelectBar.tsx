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
import { useEffect, useState } from "react";

export function SelectBar() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<string>(i18n.language);

  useEffect(() => {
    // Ensure router is mounted before using it
    setLocale(i18n.language);
  }, [i18n.language]);

  const handleChange = (value: string) => {
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      { locale: value }
    );
    setLocale(value);
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="bg-transparent text-white">
        <SelectValue placeholder={locale.toUpperCase()} />
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
