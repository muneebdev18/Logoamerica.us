"use client";

export const LEAD_MODAL_EVENT = "wa:open-lead-modal";

export function openLeadModal(service?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(LEAD_MODAL_EVENT, { detail: { service: service ?? "" } })
  );
}
