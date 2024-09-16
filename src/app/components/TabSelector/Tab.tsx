import React from "react";
import styles from "./Tab.module.css";

export interface TabItem {
  id: string;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

type TabProps = {
  item: TabItem;
  isActive: boolean;
  onClick(id: string): void;
};

export const Tab: React.FC<TabProps> = React.memo(
  ({ item, isActive, onClick }) => (
    <button
      onClick={() => onClick(item.id)}
      className={`${styles.tab} ${
        isActive ? styles["active-tab"] : styles["inactive-tab"]
      }`}
    >
      {item?.leftIcon}
      <span className={styles["tab-label"]}>{item.label}</span>
      {item?.rightIcon}
    </button>
  )
);
Tab.displayName = "Tab";
