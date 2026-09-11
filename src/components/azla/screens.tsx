import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import BlackHoleHeroSection from "@/components/ui/blackhole-hero-section";
import MusicHero from "@/components/ui/scroll-locked-video-hero";
import chipsEvidence from "@/assets/exhibit-a-chips.jpg";
import { CaseFrame, Kicker, Quote, Rule, SealButton, Stage, ease } from "./ui";

type NextProps = { onNext: () => void };

/* ── SCREEN 1 ─────────────────────────────────────────────── */
export function ScreenConstitution({ onNext }: NextProps) {
  return (
    <Stage className="p-0">
      <BlackHoleHeroSection
        className="absolute inset-0"
        distance={14}
        elevation={7}
        roll={-8}
        spinSpeed={0.12}
        diskDensity={0.85}
        brightness={1.05}
        doppler={0.75}
        hotColor="#ffd9a0"
        midColor="#f0b063"
        coolColor="#8a3a2a"
        starBrightness={0.5}
        glow={1.1}
        vignette={0.7}
        steps={190}
        resolution={0.75}
        maxDpr={1.5}
        focus={[0.5, 0.28]}
        scrim="bottom"
        scrimStrength={0.72}
      >
        <div className="flex h-full w-full flex-col items-center justify-end gap-5 px-5 pb-16 text-center sm:justify-center sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="flex flex-col items-center gap-4"
          >
            <Kicker>Est. by decree of Azla</Kicker>
            <h1
              className="text-engraved font-display font-semibold uppercase leading-[0.95] tracking-[0.12em] text-parchment"
              style={{ fontSize: "clamp(1.9rem, 7.5vw, 4.6rem)" }}
            >
              The Azla
              <br />
              Constitution
            </h1>
            <Rule className="max-w-xs" />
            <p
              className="max-w-xl font-serif italic text-brass"
              style={{ fontSize: "clamp(0.95rem, 2.4vw, 1.45rem)" }}
            >
              Supreme Law Governing the Conduct of Fasih
            </p>
            <p className="max-w-md font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground sm:text-[0.68rem]">
              Established long before Fasih apparently learned to follow basic instructions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
          >
            <SealButton onClick={onNext}>Enter the Courtroom</SealButton>
          </motion.div>
        </div>
      </BlackHoleHeroSection>
    </Stage>
  );
}

/* ── SCREEN 2 ─────────────────────────────────────────────── */
export function ScreenOrder({ onNext }: NextProps) {
  return (
    <Stage className="paper-grain">
      <div className="flex w-full max-w-3xl flex-col items-center gap-4 sm:gap-6">
        <Kicker>One order. One failure.</Kicker>
        <div className="flex w-full flex-col gap-3 text-left">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="border-l-2 border-brass/70 pl-4"
          >
            <h2 className="font-display text-sm uppercase tracking-[0.28em] text-brass sm:text-lg">
              Article I — The Order
            </h2>
            <p className="mt-1 font-serif text-parchment/80" style={{ fontSize: "clamp(0.9rem,2.1vw,1.2rem)" }}>
              When Azla gives an order, Fasih follows it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="my-1"
          >
            <CaseFrame label="The order, verbatim">
              <Quote delay={0.5} className="not-italic font-display uppercase tracking-[0.08em]">
                “Go straight home. Do not get me anything.”
              </Quote>
            </CaseFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.75 }}
            className="border-l-2 border-verdict/70 pl-4"
          >
            <h2 className="font-display text-sm uppercase tracking-[0.28em] text-verdict sm:text-lg">
              Article II — The Failure
            </h2>
            <p className="mt-1 font-serif text-parchment/80" style={{ fontSize: "clamp(0.9rem,2.1vw,1.2rem)" }}>
              Fasih acknowledged the order. Fasih then proceeded to commit an act of extraordinary
              stupidity.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <SealButton onClick={onNext}>View the Evidence</SealButton>
        </motion.div>
      </div>
    </Stage>
  );
}

/* ── SCREEN 3 ─────────────────────────────────────────────── */
export function ScreenExhibitA({ onNext }: NextProps) {
  return (
    <Stage className="paper-grain">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 38%, oklch(0.79 0.13 82 / 0.16), transparent 70%)",
        }}
      />
      <div className="flex w-full max-w-4xl flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <motion.div
          initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
          animate={{ opacity: 1, rotate: -2, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="relative w-[46vw] max-w-[240px] shrink-0 sm:w-[30vw] sm:max-w-[300px]"
        >
          <img
            src={chipsEvidence}
            alt="Evidence photograph of the bag of chips on an interrogation table"
            width={1024}
            height={1024}
            className="w-full rounded-sm border border-brass/40 object-cover"
            style={{ boxShadow: "var(--shadow-seal)" }}
          />
          <motion.span
            initial={{ opacity: 0, scale: 2.6, rotate: -24 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ delay: 0.9, duration: 0.6, ease }}
            className="absolute -bottom-3 -right-3 rounded-sm border-2 border-verdict px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-verdict"
          >
            Exhibit A
          </motion.span>
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
            <span
              className="absolute inset-x-0 h-10 bg-brass/10"
              style={{ animation: "scan-sweep 4.5s linear infinite" }}
            />
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <Kicker>Exhibit A — Admitted into record</Kicker>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease }}
            className="font-display uppercase tracking-[0.1em] text-parchment"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
          >
            🍟 The Chips
          </motion.h2>
          <div className="space-y-1 font-serif text-parchment/85" style={{ fontSize: "clamp(0.95rem,2.2vw,1.3rem)" }}>
            {["The order existed.", "The chips existed.", "Fasih somehow managed to make both exist at the same time."].map(
              (line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.35, duration: 0.5, ease }}
                >
                  {line}
                </motion.p>
              ),
            )}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <SealButton onClick={onNext}>Proceed to Trial</SealButton>
          </motion.div>
        </div>
      </div>
    </Stage>
  );
}

/* ── SCREEN 4 ─────────────────────────────────────────────── */
type PanelKey = "prosecution" | "defence" | "evidence" | "verdict";

const PANELS: { key: PanelKey; label: string }[] = [
  { key: "prosecution", label: "Prosecution" },
  { key: "defence", label: "Defence" },
  { key: "evidence", label: "Evidence" },
  { key: "verdict", label: "Verdict" },
];

const EVIDENCE_TRACKS = [
  { id: "e1", title: "12:14 — Order received", artist: "Azla, verbatim", colorA: "#f0b063", colorB: "#5c3410" },
  { id: "e2", title: "12:15 — Order acknowledged", artist: "Fasih, confidently", colorA: "#74b9f1", colorB: "#0b407d" },
  { id: "e3", title: "12:19 — Legs begin sprinting", artist: "Surveillance footage", colorA: "#5ce0c6", colorB: "#0e4a3c" },
  { id: "e4", title: "12:21 — Brain goes offline", artist: "Unexplained", colorA: "#ff8a5c", colorB: "#7a3418" },
  { id: "e5", title: "12:23 — Chips acquired", artist: "The incident", colorA: "#ff7a6c", colorB: "#5c1818" },
  { id: "e6", title: "12:27 — Regret arrives late", artist: "Fasih", colorA: "#8ab8ff", colorB: "#1a2a5c" },
  { id: "e7", title: "12:29 — Home, 1 minute spare", artist: "Deadline: 12:30", colorA: "#ffcc66", colorB: "#7a5410" },
  { id: "e8", title: "12:31 — Azla finds out", artist: "Case opened", colorA: "#ffb35c", colorB: "#7a4a10" },
];

export function ScreenTrial({ onNext }: NextProps) {
  const [open, setOpen] = useState<PanelKey | null>(null);
  const [seen, setSeen] = useState<PanelKey[]>([]);

  function openPanel(key: PanelKey) {
    setOpen(key);
    setSeen((s) => (s.includes(key) ? s : [...s, key]));
  }

  return (
    <Stage className="paper-grain">
      <div className="flex w-full max-w-3xl flex-col items-center gap-4 sm:gap-6">
        <Kicker>In session</Kicker>
        <h2
          className="text-engraved font-display uppercase tracking-[0.1em] text-parchment"
          style={{ fontSize: "clamp(1.4rem, 5.5vw, 3.2rem)" }}
        >
          The People vs. Fasih
        </h2>
        <Rule />
        <p className="max-w-lg font-serif italic text-brass" style={{ fontSize: "clamp(0.85rem,2vw,1.15rem)" }}>
          Charge: Failure to Follow One Extremely Simple Instruction.
        </p>

        <div className="grid w-full max-w-xl grid-cols-2 gap-2 sm:gap-3">
          {PANELS.map((p, i) => (
            <motion.button
              key={p.key}
              type="button"
              onClick={() => openPanel(p.key)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-sm border border-brass/30 bg-card/60 px-3 py-4 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-parchment/85 transition-colors hover:border-brass hover:text-brass sm:text-[0.7rem]"
            >
              {p.label}
              <span className="mt-1 block text-[0.5rem] tracking-[0.2em] text-muted-foreground">
                {seen.includes(p.key) ? "reviewed" : "sealed"}
              </span>
            </motion.button>
          ))}
        </div>

        <SealButton onClick={onNext} tone={seen.length === 4 ? "brass" : "quiet"}>
          Sentence
        </SealButton>
      </div>

      <AnimatePresence>
        {open ? <TrialPanel key={open} which={open} onClose={() => setOpen(null)} /> : null}
      </AnimatePresence>
    </Stage>
  );
}

function TrialPanel({ which, onClose }: { which: PanelKey; onClose: () => void }) {
  const isEvidence = which === "evidence";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 z-40 flex items-center justify-center bg-background/85 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease }}
        className={
          isEvidence
            ? "relative h-full w-full"
            : "relative mx-4 w-full max-w-2xl rounded-sm border border-brass/30 bg-card p-6 text-left sm:p-9"
        }
        style={{ boxShadow: isEvidence ? "none" : "var(--shadow-seal)" }}
      >
        {isEvidence ? (
          <div className="absolute inset-0 overflow-hidden">
            <MusicHero
              title="EXHIBIT B — THE 12:30 RUN"
              tracks={EVIDENCE_TRACKS}
              signature={false}
              sound={false}
              fullBleed
            />
          </div>
        ) : which === "prosecution" ? (
          <PanelBody
            kicker="For the prosecution"
            title="The State of Azla"
            tone="verdict"
            lines={[
              "Azla was explicit. Not vague. Not open to interpretation. Two sentences: go straight home, and do not get me anything.",
              "The defendant heard both. He agreed to both.",
              "He then walked into a shop and bought the exact thing they had already discussed — the one item that had been named out loud.",
              "This was not a misunderstanding of a complicated request. It was one order, and it was ignored.",
            ]}
          />
        ) : which === "defence" ? (
          <PanelBody
            kicker="For the defence"
            title="Counsel for Fasih"
            tone="brass"
            lines={[
              "The defence does not dispute a single fact. The chips were bought. The order was not followed.",
              "What the defence disputes is intent. Fasih was rushing — he had to be home before 12:30 and his head was entirely on the clock.",
              "In that rush, the order genuinely slipped his mind. He did not weigh it up and decide Azla's word didn't matter.",
              "This was forgetting, not defiance. That is not an excuse — it is simply what happened.",
            ]}
          />
        ) : (
          <PanelBody
            kicker="The verdict of this court"
            title="GUILTY."
            tone="verdict"
            stamp
            lines={[
              "Guilty of forgetting.",
              "Guilty of being stupid.",
              "Guilty of buying the chips.",
              "NOT GUILTY of intentionally ignoring Azla.",
            ]}
          />
        )}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-50 rounded-sm border border-brass/40 bg-background/70 px-3 py-1.5 font-mono text-[0.55rem] uppercase tracking-[0.28em] text-brass backdrop-blur transition-colors hover:bg-brass hover:text-primary-foreground"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

function PanelBody({
  kicker,
  title,
  lines,
  tone,
  stamp,
}: {
  kicker: string;
  title: string;
  lines: string[];
  tone: "brass" | "verdict";
  stamp?: boolean;
}) {
  return (
    <div className="relative">
      <Kicker>{kicker}</Kicker>
      <h3
        className={`mt-2 font-display uppercase tracking-[0.12em] ${
          tone === "verdict" ? "text-verdict" : "text-brass"
        }`}
        style={{ fontSize: "clamp(1.2rem, 4vw, 2.1rem)" }}
      >
        {title}
      </h3>
      <div className="mt-3 space-y-2">
        {lines.map((l, i) => (
          <motion.p
            key={l}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.45, ease }}
            className="font-serif text-parchment/85"
            style={{ fontSize: "clamp(0.85rem, 1.9vw, 1.15rem)" }}
          >
            {l}
          </motion.p>
        ))}
      </div>
      {stamp ? (
        <span className="animate-stamp pointer-events-none absolute -top-2 right-2 rounded-sm border-4 border-verdict/70 px-4 py-2 font-display text-lg uppercase tracking-[0.2em] text-verdict/70 sm:text-3xl">
          Guilty
        </span>
      ) : null}
    </div>
  );
}

/* ── SCREEN 5 ─────────────────────────────────────────────── */
const SENTENCE = [
  "Apologising properly.",
  "Learning from this.",
  "Never repeating this particular stupidity.",
  "Accepting that Azla has every right to be angry.",
  "Activating his brain before receiving important instructions.",
];

export function ScreenSentence({ onNext }: NextProps) {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAccepted(true), 2600);
    return () => clearTimeout(t);
  }, []);
  return (
    <Stage className="paper-grain">
      <CaseFrame label="Order of sentencing" className="max-w-2xl">
        <h2
          className="font-display uppercase tracking-[0.14em] text-brass"
          style={{ fontSize: "clamp(0.95rem, 2.8vw, 1.6rem)" }}
        >
          The defendant is hereby sentenced to:
        </h2>
        <ol className="mt-4 space-y-2 text-left">
          {SENTENCE.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.28, duration: 0.5, ease }}
              className="flex items-baseline gap-3 border-b border-border/60 pb-2 font-serif text-parchment/90"
              style={{ fontSize: "clamp(0.85rem, 2vw, 1.15rem)" }}
            >
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-brass-dim">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </motion.li>
          ))}
        </ol>
        <AnimatePresence>
          {accepted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
              className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.35em] text-brass"
            >
              Sentence accepted.
            </motion.p>
          ) : null}
        </AnimatePresence>
      </CaseFrame>
      <div className="mt-6">
        <SealButton onClick={onNext}>Test my Obedience</SealButton>
      </div>
    </Stage>
  );
}

/* ── SCREEN 6 ─────────────────────────────────────────────── */
type Q = {
  prompt: string;
  said?: string;
  options: { label: string; correct?: boolean; reply: string }[];
};

const QUESTIONS: Q[] = [
  {
    prompt: "Azla says:",
    said: "“Go straight home.”",
    options: [
      { label: "Go home", correct: true, reply: "Correct. Somehow, you already have a higher score than Fasih." },
      { label: "Buy chips", reply: "INCORRECT. Congratulations. You have successfully become Fasih." },
      {
        label: "Buy burger",
        reply:
          "INCORRECT. The court would like to remind you that we are discussing ONE order, not opening a restaurant.",
      },
    ],
  },
  {
    prompt: "Azla says:",
    said: "“Don't get me anything.”",
    options: [
      { label: "Get nothing", correct: true, reply: "Correct. Revolutionary technique: doing exactly what was asked." },
      {
        label: "Get chips",
        reply: "INCORRECT. The chips again? The court is starting to see a pattern, and it is named Fasih.",
      },
      {
        label: "Get the entire supermarket",
        reply:
          "INCORRECT. “Nothing” and “an entire supermarket” are, legally speaking, quite far apart. Please try again.",
      },
    ],
  },
  {
    prompt: "What did Fasih actually do?",
    options: [
      { label: "A) Followed instructions", reply: "WRONG. Even Fasih knows this one." },
      { label: "B) Forgot his own existence", reply: "WRONG. Honestly, close enough." },
      {
        label: "C) Bought the chips",
        correct: true,
        reply:
          "CORRECT. You have successfully demonstrated a higher level of intelligence than Fasih displayed that day.",
      },
    ],
  },
];

export function ScreenGame({ onNext }: NextProps) {
  const [qi, setQi] = useState(0);
  const [reply, setReply] = useState<{ text: string; ok: boolean } | null>(null);
  const [score, setScore] = useState(0);
  const [shake, setShake] = useState(0);
  const q = QUESTIONS[qi];
  const done = qi >= QUESTIONS.length;

  function answer(opt: { label: string; correct?: boolean; reply: string }) {
    setReply({ text: opt.reply, ok: Boolean(opt.correct) });
    if (opt.correct) {
      setScore((s) => s + 1);
    } else {
      setShake((s) => s + 1);
    }
  }

  function advance() {
    if (reply?.ok) setQi((i) => i + 1);
    setReply(null);
  }

  return (
    <Stage className="paper-grain">
      <div className="flex w-full max-w-2xl flex-col items-center gap-4">
        <Kicker>The Azla Obedience Test 🎮</Kicker>
        <div className="flex gap-1.5">
          {QUESTIONS.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-8 rounded-full ${i < score ? "bg-brass" : "bg-foreground/15"}`}
            />
          ))}
        </div>

        {!done && q ? (
          <motion.div
            key={qi}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="w-full"
          >
            <CaseFrame label={`Question ${qi + 1} of 3`}>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-brass-dim">
                {q.prompt}
              </p>
              {q.said ? (
                <Quote className="mt-2 not-italic font-display uppercase tracking-[0.06em]">
                  {q.said}
                </Quote>
              ) : null}
              <motion.div
                key={shake}
                animate={shake ? { x: [0, -8, 7, -5, 3, 0] } : {}}
                transition={{ duration: 0.45 }}
                className="mt-5 flex flex-col gap-2"
              >
                {q.options.map((o) => (
                  <SealButton
                    key={o.label}
                    tone="quiet"
                    onClick={() => answer(o)}
                    className="w-full"
                  >
                    {o.label}
                  </SealButton>
                ))}
              </motion.div>
            </CaseFrame>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col items-center gap-3"
          >
            <CaseFrame label="Final tally">
              <p className="font-display text-2xl uppercase tracking-[0.2em] text-brass sm:text-4xl">
                Score: 3/3
              </p>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-verdict">
                Fasih&apos;s score: 0/3
              </p>
            </CaseFrame>
            <SealButton onClick={onNext}>View the Incident Report</SealButton>
          </motion.div>
        )}

        <AnimatePresence>
          {reply ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease }}
              className="absolute inset-x-4 bottom-10 z-30 mx-auto max-w-lg rounded-sm border bg-card/95 p-4 backdrop-blur"
              style={{
                borderColor: reply.ok ? "var(--brass)" : "var(--verdict)",
                boxShadow: "var(--shadow-seal)",
              }}
            >
              <p
                className="font-serif text-parchment"
                style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
              >
                {reply.text}
              </p>
              <div className="mt-3 flex justify-center">
                <SealButton tone={reply.ok ? "brass" : "blood"} onClick={advance}>
                  {reply.ok ? (qi === QUESTIONS.length - 1 ? "See the tally" : "Next question") : "Try again"}
                </SealButton>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Stage>
  );
}

/* ── SCREEN 7 ─────────────────────────────────────────────── */
const BOOT = [
  "Loading...",
  "Loading...",
  "Critical memory failure.",
  "🍟 Chips acquired.",
];

export function ScreenIncident({ onNext }: NextProps) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= BOOT.length + 1) return;
    const t = setTimeout(() => setStep((s) => s + 1), step < BOOT.length ? 750 : 500);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <Stage className="paper-grain">
      <div className="w-full max-w-2xl text-left font-mono">
        <Kicker>Incident report — Fasih&apos;s brain</Kicker>
        <div className="mt-3 rounded-sm border border-brass/25 bg-black/50 p-4 sm:p-6" style={{ boxShadow: "var(--shadow-seal)" }}>
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-brass-dim">What Azla said:</p>
          <p className="mt-1 font-serif italic text-parchment" style={{ fontSize: "clamp(0.9rem,2.2vw,1.3rem)" }}>
            “Go straight home. Don&apos;t get me anything.”
          </p>
          <div className="my-4 h-px w-full bg-border" />
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-brass-dim">
            What Fasih&apos;s brain did:
          </p>
          <div className="mt-2 space-y-1 text-[0.75rem] text-parchment/85 sm:text-sm">
            {BOOT.slice(0, step).map((line, i) => (
              <motion.p
                key={`${line}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === 2 ? "text-verdict" : i === 3 ? "text-brass" : ""}
              >
                <span className="text-brass-dim">&gt; </span>
                {line}
              </motion.p>
            ))}
          </div>
          <AnimatePresence>
            {step > BOOT.length ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease }}
                className="animate-flicker mt-5 border-2 border-verdict/70 bg-verdict/10 p-3 text-center"
              >
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-verdict sm:text-base">
                  Error 404: Obedience not found
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center">
          <SealButton onClick={onNext}>Enough jokes</SealButton>
        </div>
      </div>
    </Stage>
  );
}

/* ── SCREEN 8 ─────────────────────────────────────────────── */
const APOLOGY = [
  "Azla, I'm sorry. Genuinely.",
  "You told me to go straight home and not get you anything. That was your order, and I didn't follow it. There's no version of this where that isn't on me.",
  "I wasn't trying to go against you. I was rushing to get home before 12:30 and in that moment it just left my head completely. That's the truth, not a defence — forgetting something you said isn't much better than ignoring it.",
  "I understand why you're angry. You have every right to be, and I'm not going to argue with it or try to talk you out of it.",
  "I swear by Allah, and Allah is my witness: I will never intentionally disobey one of your orders. Not once.",
  "You matter to me, and this friendship matters more than I usually manage to say out loud. I'm not expecting you to stop being angry, and I'm not expecting to be forgiven today.",
  "I just needed you to know that I'm sorry, properly.",
];

export function ScreenApology({ onNext }: NextProps) {
  return (
    <Stage className="!justify-start pt-[8vh]" >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-warm)" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative flex w-full max-w-2xl flex-col items-center gap-3"
      >
        <h2
          className="font-serif italic text-parchment"
          style={{ fontSize: "clamp(1.3rem, 4.2vw, 2.4rem)" }}
        >
          Okay. Enough jokes.
        </h2>
        <Rule className="max-w-[10rem]" />
        <div className="space-y-2 text-left sm:space-y-3">
          {APOLOGY.map((p, i) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.35, duration: 0.7, ease }}
              className="font-serif leading-snug text-parchment/90"
              style={{ fontSize: "clamp(0.8rem, 1.9vw, 1.15rem)" }}
            >
              {p}
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <SealButton onClick={onNext} tone="quiet">
            The Final Amendment
          </SealButton>
        </motion.div>
      </motion.div>
    </Stage>
  );
}

/* ── SCREEN 9 ─────────────────────────────────────────────── */
const AMENDMENTS = [
  ["Amendment I", "Fasih will remember the order."],
  ["Amendment II", "“No” means no."],
  ["Amendment III", "Chips are not worth breaking the Constitution."],
  ["Amendment IV", "Allah is my witness: I will do my best to never repeat this mistake."],
];

export function ScreenFinal() {
  return (
    <Stage>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="relative flex w-full max-w-2xl flex-col items-center gap-4">
        <Kicker>Ratified</Kicker>
        <h2
          className="text-engraved font-display uppercase tracking-[0.14em] text-parchment"
          style={{ fontSize: "clamp(1.3rem, 5vw, 2.8rem)" }}
        >
          The Final Amendment
        </h2>
        <Rule className="max-w-xs" />
        <div className="grid w-full gap-2 text-left sm:grid-cols-2">
          {AMENDMENTS.map(([title, body], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.25, duration: 0.6, ease }}
              className="rounded-sm border border-brass/25 bg-card/50 p-3 backdrop-blur-sm"
            >
              <p className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-brass-dim">
                {title}
              </p>
              <p
                className="mt-1 font-serif text-parchment/90"
                style={{ fontSize: "clamp(0.85rem, 1.9vw, 1.1rem)" }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.18em" }}
          transition={{ delay: 1.4, duration: 1.4, ease }}
          className="mt-3 font-display uppercase text-brass"
          style={{ fontSize: "clamp(1.1rem, 4.4vw, 2.4rem)" }}
        >
          I&apos;m sorry, Azla.
        </motion.p>
      </div>
    </Stage>
  );
}
