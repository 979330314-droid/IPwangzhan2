"use client";

import { useMemo, useState } from "react";
import type { CaseCategory, CaseStudy } from "@/lib/types";
import { CaseCard } from "@/components/CaseCard";

const categories: Array<CaseCategory | "全部"> = ["全部", "企业内训", "线下大课", "智能体定制"];

type CaseExplorerProps = {
  cases: CaseStudy[];
};

export function CaseExplorer({ cases }: CaseExplorerProps) {
  const [category, setCategory] = useState<CaseCategory | "全部">("全部");
  const filtered = useMemo(
    () => (category === "全部" ? cases : cases.filter((study) => study.category === category)),
    [cases, category]
  );

  return (
    <div className="case-explorer">
      <div className="segmented-control case-filter" role="tablist" aria-label="案例分类筛选">
        {categories.map((item) => (
          <button
            aria-selected={category === item}
            key={item}
            onClick={() => setCategory(item)}
            role="tab"
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="case-grid">
        {filtered.map((study, index) => (
          <CaseCard compact={index > 1} key={study.title} study={study} />
        ))}
      </div>
    </div>
  );
}
