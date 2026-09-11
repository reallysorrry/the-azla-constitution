import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ease = [0.16, 1, 0.3, 1] as const;

export function Stage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.985, filter: "blur(6px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.015, filter: "blur(8px)" }}
      transition={{ duration: 0.55, ease }}
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-5 py-6 text-center sm:px-10",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[0.6rem] uppercase tracking-[0.42em] text-brass-dim sm:text-[0.7rem]">
      {children}
    </span>
  );
}

export function Rule({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.9, ease, delay: 0.15 }}
      className={cn("rule-line w-full max-w-md", className)}
    />
  );
}

export function SealButton({
  children,
  onClick,
  tone = "brass",
  className,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  tone?: "brass" | "quiet" | "blood";
  className?: string;
  disabled?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ duration: 0.2, ease }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-sm border px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] transition-colors sm:px-8 sm:text-[0.72rem]",
        tone === "brass" &&
          "border-brass/60 bg-brass/10 text-brass hover:bg-brass hover:text-primary-foreground",
        tone === "quiet" &&
          "border-border bg-transparent text-muted-foreground hover:border-brass/50 hover:text-brass",
        tone === "blood" &&
          "border-verdict/60 bg-verdict/15 text-verdict hover:bg-verdict hover:text-foreground",
        disabled && "cursor-not-allowed opacity-40",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brass/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </motion.button>
  );
}

export function Quote({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay }}
      className={cn(
        "mx-auto max-w-2xl font-serif italic leading-snug text-parchment",
        className,
      )}
      style={{ fontSize: "clamp(1rem, 2.6vw, 1.6rem)" }}
    >
      {children}
    </motion.p>
  );
}

export function CaseFrame({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full max-w-3xl rounded-sm border border-brass/25 bg-card/70 p-5 backdrop-blur-sm sm:p-8",
        className,
      )}
      style={{ boxShadow: "var(--shadow-seal)" }}
    >
      <span className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-brass/60 to-transparent" />
      {label ? (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-background px-3 font-mono text-[0.55rem] uppercase tracking-[0.4em] text-brass-dim">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}

export function ProgressRail({
  total,
  current,
  onJump,
}: {
  total: number;
  current: number;
  onJump: (i: number) => void;
}) {
  return (
    <div className="pointer-events-auto absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to section ${i + 1}`}
          onClick={() => onJump(i)}
          className={cn(
            "h-1.5 rounded-full transition-all duration-500",
            i === current
              ? "w-7 bg-brass"
              : i < current
                ? "w-1.5 bg-brass/50 hover:bg-brass"
                : "w-1.5 bg-foreground/15 hover:bg-brass/60",
          )}
        />
      ))}
    </div>
  );
}
