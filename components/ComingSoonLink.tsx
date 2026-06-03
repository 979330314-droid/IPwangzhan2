"use client";

import type { MouseEvent, ReactNode } from "react";
import { showComingSoon } from "@/components/ComingSoonToast";

type ComingSoonLinkProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  ariaLabel?: string;
};

export function ComingSoonLink({ children, className, href = "#", ariaLabel }: ComingSoonLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    showComingSoon();
  };

  return (
    <a aria-label={ariaLabel} className={className} data-target={href} href="#" onClick={handleClick}>
      {children}
    </a>
  );
}
