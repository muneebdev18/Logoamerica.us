"use client";

import { openLeadModal } from "@/lib/leadModal";

export default function LeadCta({
  service,
  className = "",
  children,
}: {
  service?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => openLeadModal(service)}
    >
      {children}
    </button>
  );
}
