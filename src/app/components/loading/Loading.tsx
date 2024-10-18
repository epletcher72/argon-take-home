import LoadingSpinner from "@/assets/lottie/loadingSpinner/LoadingSpinner";
import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <LoadingSpinner />
    </div>
  );
}
