import { Check, Sparkles } from "lucide-react";
import type { ServiceLine } from "@/lib/types";

type ServicePanelProps = {
  service: ServiceLine;
  index: number;
};

export function ServicePanel({ service, index }: ServicePanelProps) {
  return (
    <article className="service-panel">
      <div className="panel-top">
        <span className="panel-index">{String(index + 1).padStart(2, "0")}</span>
        <Sparkles aria-hidden="true" size={20} />
      </div>
      <div className="panel-main">
        <h3>{service.title}</h3>
        <p className="panel-subtitle">{service.subtitle}</p>
        <p className="muted">{service.promise}</p>
        <p className="audience">{service.audience}</p>
      </div>
      <div className="check-list">
        {service.deliverables.map((item) => (
          <span key={item}>
            <Check aria-hidden="true" size={16} />
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
