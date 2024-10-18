import { searchClient } from "@algolia/client-search";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const client = searchClient(
  "UN5YRM02LE",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!
);

const getTrials = async (query: string, pageSize: number) => {
  const response = await client.search({
    requests: [
      {
        indexName: "trials",
        query: query,
        hitsPerPage: pageSize,
      },
    ],
  });
  return response;
};

export type SearchData = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
  trials: Trial[];
  isLoading: boolean;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number | null>>;
};

export type Props = {
  initialQuery: string;
};

type Results = {
  hits?: [];
};

export default function useAlgoliaSearch(initialQuery: string) {
  const hasSearchedInitialRef = useRef<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [trials, setTrials] = useState<Trial[]>([]);

  useEffect(() => {
    if (!hasSearchedInitialRef.current) {
      hasSearchedInitialRef.current = true;
      onSubmit();
    }
  }, [initialQuery]);

  const onSubmit = async () => {
    setLoading(true);
    setSelectedIndex(null);
    const trials: Trial[] = await getTrials(searchQuery, 50).then((res) => {
      const results: TrialSearchResultSimplified[] =
        (res.results?.[0] as Results).hits ?? [];
      console.log("results", results);
      return results.reduce(
        (acc: Trial[], { objectID, hasResults, protocolSection }) => {
          const { descriptionModule, identificationModule } =
            protocolSection ?? {};
          const { briefSummary, detailedDescription } = descriptionModule ?? {};
          const { briefTitle, officialTitle, nctId } =
            identificationModule ?? {};
          if (!briefTitle || !nctId || !objectID) return acc;
          acc.push({
            briefTitle,
            summary:
              briefSummary ?? detailedDescription ?? "No summary provided",
            fullTitle: officialTitle ?? briefTitle,
            description:
              detailedDescription ?? briefSummary ?? "No description provided",
            nctId,
            dbId: objectID,
            hasResults: hasResults ?? false,
          } as Trial);
          return acc;
        },
        []
      );
    });
    setTrials(trials);
    setLoading(false);
  };

  return {
    searchQuery,
    setSearchQuery,
    onSubmit,
    trials,
    isLoading,
    selectedIndex,
    setSelectedIndex,
  } as SearchData;
}
