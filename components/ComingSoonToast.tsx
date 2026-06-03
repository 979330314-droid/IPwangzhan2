"use client";

import { useEffect, useState } from "react";

export function showComingSoon() {
  window.dispatchEvent(new CustomEvent("coming-soon"));
}

export function ComingSoonToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    const show = () => {
      setVisible(true);
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setVisible(false), 1800);
    };

    window.addEventListener("coming-soon", show);
    return () => {
      window.removeEventListener("coming-soon", show);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`coming-soon-toast${visible ? " is-visible" : ""}`} role="status" aria-live="polite">
      敬请期待
    </div>
  );
}
