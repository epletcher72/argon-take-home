import { SearchData } from "@/hooks/useAlgoliaSearch";
import styles from "./results.module.scss";
import Loading from "@/app/components/loading/Loading";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@mui/material";

export type Props = SearchData;
export default function Results({
  trials,
  isLoading,
  selectedIndex,
  setSelectedIndex,
}: Props) {
  if (isLoading) return <Loading />;

  const selectedTrial = selectedIndex !== null ? trials[selectedIndex] : null;
  const { fullTitle, description, nctId } = selectedTrial ?? {};
  return (
    <div className={styles.results}>
      <div className={styles.list}>
        {trials.map((trial: Trial, index: number) => (
          <TrialCard
            {...trial}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            key={trial.nctId}
          />
        ))}
      </div>
      {selectedTrial && (
        <div className={styles.previewwrapper}>
          <div className={styles.preview}>
            <span className={styles.title}>{fullTitle}</span>
            <span className={styles.description}>{description}</span>
            <div className={styles.buttonbox}>
              <Button
                onClick={() =>
                  window.open(
                    `https://clinicaltrials.gov/study/${nctId}`,
                    "_blank"
                  )
                }
                variant="outlined"
              >
                See Details
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type TrialCardProps = Trial & {
  index: number;
  selectedIndex: number | null;
  setSelectedIndex: Dispatch<SetStateAction<number | null>>;
};

function TrialCard({
  briefTitle,
  summary,
  nctId,
  index,
  selectedIndex,
  setSelectedIndex,
}: TrialCardProps) {
  const isSelected = selectedIndex === index;
  return (
    <div
      onClick={() => setSelectedIndex(index)}
      className={`${styles.trialcard} ${isSelected ? styles.selected : ""}`}
    >
      <a
        className={styles.title}
        href={`https://clinicaltrials.gov/study/${nctId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {briefTitle}
      </a>
      <span className={styles.summary}>{summary}</span>
    </div>
  );
}
