import Image from "next/image";
import styles from "./searchbar.module.scss";
import searchSVG from "../../../assets/icons/search.svg";
import { useRef } from "react";
import { SearchData } from "../../hooks/useSearchData";

export type Props = SearchData & {};

export default function Searchbar({
  searchQuery,
  setSearchQuery,
  hasSearchedInitial,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={focusInput}
      className={`${styles.searchbar} ${
        hasSearchedInitial ? styles.initial : ""
      }`}
    >
      <Image className={styles.icon} src={searchSVG} alt="" priority />
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        autoComplete="off"
        spellCheck="false"
        aria-live="polite"
        placeholder="Search for a clinical record"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
