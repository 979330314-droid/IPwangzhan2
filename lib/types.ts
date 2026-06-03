import type { LucideIcon } from "lucide-react";

export type ServiceLine = {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  promise: string;
  deliverables: string[];
  outcomes: string[];
};

export type PackageTier = {
  name: string;
  price: string;
  cycle: string;
  fit: string;
  included: string[];
  highlighted?: boolean;
};

export type CaseCategory = "企业内训" | "线下大课" | "智能体定制" | "行业覆盖";

export type CaseStudy = {
  title: string;
  category: CaseCategory;
  industry: string;
  clientType: string;
  context: string;
  work: string[];
  outcome: string;
  artifact: string;
  imageUrls: string[];
  tags: string[];
};

export type IndustrySolution = {
  industry: string;
  scale: string;
  result: string;
  artifact: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  body: string;
  signal: string;
};

export type Belief = {
  title: string;
  body: string;
};

export type LeadFormData = {
  name: string;
  company: string;
  contact: string;
  needType: string;
  budget: string;
  message: string;
};

export type NavItem = {
  href: string;
  label: string;
};

export type IconItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};
