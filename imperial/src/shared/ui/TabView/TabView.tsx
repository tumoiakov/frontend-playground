import { useMemo, useState } from "react";
import "./TabView.css";
import { TabViewProps } from "./TabView.types";
import clsx from "clsx";

const TabView = ({ tabs, className }: TabViewProps) => {
  const [currentTabIdx, setCurrentTabIdx] = useState<number>(0);
  const tabList = useMemo(
    () =>
      tabs.map((tab, index) => (
        <div
          className={clsx(
            "tabview__tab",
            index === currentTabIdx && "tabview__tab--active"
          )}
          onClick={() => setCurrentTabIdx(index)}
        >
          {tab.name}
        </div>
      )),
    [currentTabIdx, tabs]
  );

  return (
    <div className={clsx("tabview", className)}>
      <div className="tabview__tabs">{tabList}</div>
      <div className="tabview__content">{tabs[currentTabIdx].content}</div>
    </div>
  );
};

export default TabView;
