import React, { useCallback, useState } from "react";
import { Tab, TabItem } from "./Tab";
import styles from "./TabSelector.module.css";

type TabSelectorProps = {
  tabs: TabItem[];
  onTabChange?(tabId: string): void;
};
export const TabSelector: React.FC<TabSelectorProps> = ({
  tabs,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0].id);

  const handleClickTab = useCallback(
    (id: string) => {
      setActiveTab(id);
      onTabChange?.(id);
    },
    [onTabChange]
  );

  return (
    <div className={styles["tab-selector"]}>
      {tabs?.map((tab) => (
        <Tab
          key={tab.id}
          item={tab}
          isActive={activeTab === tab.id}
          onClick={handleClickTab}
        />
      ))}
    </div>
  );
};
