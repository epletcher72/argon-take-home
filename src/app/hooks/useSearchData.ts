"use client";
import { Dispatch, SetStateAction, useState } from "react";

export type SearchData = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

export default function useSearchData() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return {
    searchQuery,
    setSearchQuery,
  } as SearchData;
}
