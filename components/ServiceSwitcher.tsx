"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import type { ServiceLine } from "@/lib/types";

type ServiceSwitcherProps = {
  services: ServiceLine[];
};

export function ServiceSwitcher({ services }: ServiceSwitcherProps) {
  const [selectedId, setSelectedId] = useState(services[0]?.id ?? "");
  const selected = services.find((service) => service.id === selectedId) ?? services[0];

  return (
    <div className="service-switcher">
      <div className="segmented-control" role="tablist" aria-label="服务线切换">
        {services.map((service) => (
          <button
            aria-selected={service.id === selected.id}
            key={service.id}
            onClick={() => setSelectedId(service.id)}
            role="tab"
            type="button"
          >
            {service.title}
          </button>
        ))}
      </div>
      <div className="service-detail">
        <div>
          <p className="eyebrow">SERVICE</p>
          <h3>{selected.title}</h3>
          <p>{selected.subtitle}</p>
          <div className="service-audience">{selected.audience}</div>
        </div>
        <div className="service-detail-card">
          <p>{selected.promise}</p>
          <div className="detail-list">
            {selected.deliverables.map((item) => (
              <span key={item}>
                <Check aria-hidden="true" size={17} />
                {item}
              </span>
            ))}
          </div>
          <div className="outcome-strip">
            {selected.outcomes.map((item) => (
              <strong key={item}>
                {item}
                <ChevronRight aria-hidden="true" size={15} />
              </strong>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
