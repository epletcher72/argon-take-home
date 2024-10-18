"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import logoSVG from "../assets/brand/logo.svg";
import Searchbar from "./components/searchbar/Searchbar";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  const onSubmit = () => router.push(`/search?q=${searchQuery}`);

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

        <Searchbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSubmit={onSubmit}
          isMainPage
        />
      </div>
      <Footer />
    </div>
  );
}
