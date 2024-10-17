"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import logoSVG from "../assets/brand/logo.svg";
import Footer from "./search/components/results/Results";
import useSearchData from "./hooks/useSearchData";
import Searchbar from "./components/searchbar/Searchbar";

export default function Home() {
  const searchData = useSearchData();

  return (
    <div className={styles.search}>
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
    </div>
  );
}
