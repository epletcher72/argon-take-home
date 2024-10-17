"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import logoSVG from "../../assets/brand/logo.svg";
import Results from "../search/components/results/Results";
import Searchbar from "../components/searchbar/Searchbar";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const [searchQuery, setSearchQuery] = useState<string>(query);

  const onSubmit = (value: string) => {};

  return (
    <div className={styles.search}>
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src={logoSVG}
          alt="Argon AI logo"
          priority
        />
        <Searchbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSubmit={onSubmit}
        />
      </div>
      <Results />
    </div>
  );
}
