"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import logoSVG from "../../assets/brand/logo.svg";
import Results from "../search/components/results/Results";
import Searchbar from "../components/searchbar/Searchbar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "../components/loading/Loading";
import useAlgoliaSearch from "@/hooks/useAlgoliaSearch";

function SearchContents() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") ?? "";
  const searchData = useAlgoliaSearch(query);

  // const onSubmitWithRoute = () => {
  //   router.push(`/search?q=${searchQuery}`);
  //   onSubmit();
  // };

  console.log(searchData.trials);

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.search}>
        <div className={styles.header}>
          <div>
            <Image
              className={styles.logo}
              src={logoSVG}
              alt="Argon AI logo"
              priority
            />
            <span className={styles.heading}>Clinical Trial Search</span>
          </div>
          <Searchbar {...searchData} />
        </div>
        <Results {...searchData} />
      </div>
    </Suspense>
  );
}

export default function Search() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchContents />
    </Suspense>
  );
}
