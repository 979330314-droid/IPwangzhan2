import { ChevronRight } from "lucide-react";
import { ComingSoonLink } from "@/components/ComingSoonLink";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <ComingSoonLink className={`button button-${variant}`} href={href}>
      <span>{children}</span>
      <ChevronRight aria-hidden="true" size={17} strokeWidth={2} />
    </ComingSoonLink>
  );
}
