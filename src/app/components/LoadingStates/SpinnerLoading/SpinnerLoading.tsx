import React from "react";
import styles from "./SpinnerLoading.module.css";

export const SpinnerLoading: React.FC = () => {
  return (
    <div>
      <div
        className={styles["spinner"]}
        aria-hidden="true"
        role="status"
        aria-live="polite"
      ></div>
    </div>
  );
};
