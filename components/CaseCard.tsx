import { CheckCircle2, FileStack } from "lucide-react";
import type { CaseStudy } from "@/lib/types";

type CaseCardProps = {
  study: CaseStudy;
  compact?: boolean;
};

export function CaseCard({ study, compact = false }: CaseCardProps) {
  return (
    <article className={`case-card ${compact ? "case-card-compact" : ""}`}>
      <div className="case-visual" aria-label={`${study.title} 案例证据`}>
        <div className="case-visual-fallback">
          <div className="case-visual-topline">
            <span>{study.category}</span>
            <FileStack aria-hidden="true" size={18} />
          </div>
          <strong>{study.artifact}</strong>
          <p>{study.clientType}</p>
          <div className="case-visual-tags">
            {study.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="case-content">
        <div className="case-meta">
          <span>{study.category}</span>
          <span>{study.industry}</span>
        </div>
        <h3>{study.title}</h3>
        <p className="case-context">{study.context}</p>
        <div className="case-work">
          {study.work.map((item) => (
            <span key={item}>
              <CheckCircle2 aria-hidden="true" size={16} />
              {item}
            </span>
          ))}
        </div>
        <p className="case-outcome">{study.outcome}</p>
        <div className="tag-row">
          {study.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
