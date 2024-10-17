"use client";

import Image from "next/image";
import styles from "./search.module.scss";
import logoSVG from "../../assets/brand/logo.svg";
import Searchbar from "./components/searchbar/Searchbar";
import Footer from "./components/results/Results";
import Results from "./components/results/Results";
import useSearchData from "./hooks/useSearchData";

export default function Search() {
  const searchData = useSearchData();
  const { hasSearchedInitial } = searchData;

  return (
    <div className={styles.search}>
      {hasSearchedInitial ? (
        <>
          <div className={styles.centered}>
            <Image
              className={styles.logo}
              src={logoSVG}
              alt="Argon AI logo"
              priority
            />
            <span className={styles.heading}>Clinical Trial Search</span>
            <Searchbar {...searchData} />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <div className={styles.header}>
            <Image
              className={styles.logo}
              src={logoSVG}
              alt="Argon AI logo"
              priority
            />
            <Searchbar {...searchData} />
          </div>
          <Results />
        </>
      )}
    </div>
  );
}
