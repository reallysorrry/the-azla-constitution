import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";
import { ProgressRail } from "@/components/azla/ui";
import {
  ScreenApology,
  ScreenConstitution,
  ScreenExhibitA,
  ScreenFinal,
  ScreenGame,
  ScreenIncident,
  ScreenOrder,
  ScreenSentence,
  ScreenTrial,
} from "@/components/azla/screens";

const TITLE = "The Azla Constitution — Supreme Law Governing the Conduct of Fasih";
const DESCRIPTION =
  "An interactive courtroom apology: one order, one bag of chips, and a full trial of Fasih. Nine screens, no scrolling.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TOTAL = 9;

function Index() {
  const [screen, setScreen] = useState(0);
  const next = useCallback(() => setScreen((s) => Math.min(s + 1, TOTAL - 1)), []);
  const jump = useCallback((i: number) => setScreen(i), []);

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        {screen === 0 && <ScreenConstitution key="s0" onNext={next} />}
        {screen === 1 && <ScreenOrder key="s1" onNext={next} />}
        {screen === 2 && <ScreenExhibitA key="s2" onNext={next} />}
        {screen === 3 && <ScreenTrial key="s3" onNext={next} />}
        {screen === 4 && <ScreenSentence key="s4" onNext={next} />}
        {screen === 5 && <ScreenGame key="s5" onNext={next} />}
        {screen === 6 && <ScreenIncident key="s6" onNext={next} />}
        {screen === 7 && <ScreenApology key="s7" onNext={next} />}
        {screen === 8 && <ScreenFinal key="s8" />}
      </AnimatePresence>

      {screen > 0 ? (
        <button
          type="button"
          onClick={() => setScreen((s) => Math.max(0, s - 1))}
          className="absolute left-3 top-3 z-30 rounded-sm border border-brass/30 bg-background/60 px-3 py-1.5 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-brass-dim backdrop-blur transition-colors hover:border-brass hover:text-brass"
        >
          Back
        </button>
      ) : null}

      <ProgressRail total={TOTAL} current={screen} onJump={jump} />
    </main>
  );
}
