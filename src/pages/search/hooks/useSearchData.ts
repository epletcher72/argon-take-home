import { Dispatch, SetStateAction, useState } from "react";

export type SearchData = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  hasSearchedInitial: boolean;
};

export default function useSearchData() {
  const [hasSearchedInitial, setSearchedInitial] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  return {
    searchQuery,
    setSearchQuery,
    hasSearchedInitial,
  } as SearchData;
}
