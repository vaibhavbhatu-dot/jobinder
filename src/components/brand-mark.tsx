import { cn } from "@/lib/cn";

/** Jobinder's "J" mark, as in src/app/icon.svg, in the primary colours, so it turns light in the dark scheme. Decorative: put the name next to it. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect width="64" height="64" rx="14.08" className="fill-primary" />
      <path
        className="fill-on-primary"
        transform="matrix(0.02844 0 0 -0.02844 16.415 51.200)"
        d="M549 1350H966V420Q966 190 838 85Q710 -20 500 -20Q330 -20 230 40Q130 100 130 210Q130 290 180 335Q230 380 300 380Q370 380 412 338Q455 296 455 230Q455 170 425 125Q450 95 500 95Q610 95 655 175Q700 255 700 420V1254.2L549 1308.9Z"
      />
    </svg>
  );
}
