export default function RouteShield({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Interstate-style shield */}
      <path
        d="M20 2.5c4.6 2.9 9.5 4.3 15.5 4.3.8 8.7-.3 21.6-4.6 28.1C27.6 39.8 23.6 41.9 20 43c-3.6-1.1-7.6-3.2-10.9-8.1C4.8 28.4 3.7 15.5 4.5 6.8 10.5 6.8 15.4 5.4 20 2.5Z"
        fill="currentColor"
        stroke="#EEF2F6"
        strokeWidth="2"
      />
      <path
        d="M11 16.5h18M11 22h18M13 27.5h14"
        stroke="#0A1220"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M14 11.5l3-3 3 3M26 32.5l-3 3-3-3"
        stroke="#F5B700"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
