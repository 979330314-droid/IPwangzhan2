import type { IndustrySolution } from "@/lib/types";

type IndustryGridProps = {
  items: IndustrySolution[];
};

export function IndustryGrid({ items }: IndustryGridProps) {
  return (
    <div className="industry-grid">
      {items.map((item) => (
        <article key={`${item.industry}-${item.scale}`}>
          <span>{item.industry}</span>
          <h3>{item.scale}</h3>
          <p>{item.result}</p>
          <strong>{item.artifact}</strong>
        </article>
      ))}
    </div>
  );
}
