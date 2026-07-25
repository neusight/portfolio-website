"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";
import { GradientMesh } from "@/components/site/gradient-mesh";
import { Reveal } from "@/components/site/reveal";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/lib/data";

const PASSWORD = "blacktile9";
const STORAGE_KEY = "portfolio-work-unlocked";
const REVEAL_FLASH_MS = 500;
const REVEAL_TOTAL_MS = 1300;

type Status = "checking" | "locked" | "revealing" | "unlocked";

export function WorkGate() {
  const [status, setStatus] = useState<Status>("checking");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showGatePanel, setShowGatePanel] = useState(true);
  const [origin, setOrigin] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const isUnlocked = window.localStorage.getItem(STORAGE_KEY) === "true";
    // One-time read of localStorage after mount — required to stay in sync
    // with server-rendered markup (window is unavailable during static export).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStatus(isUnlocked ? "unlocked" : "locked");
  }, []);

  useEffect(() => {
    if (status !== "revealing") return;

    const hideGate = setTimeout(
      () => setShowGatePanel(false),
      REVEAL_FLASH_MS,
    );
    const finish = setTimeout(() => setStatus("unlocked"), REVEAL_TOTAL_MS);

    return () => {
      clearTimeout(hideGate);
      clearTimeout(finish);
    };
  }, [status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (value !== PASSWORD) {
      setError(true);
      setValue("");
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, "true");

    const container = event.currentTarget.closest("[data-work-gate]");
    const active = document.activeElement;
    if (container && active instanceof HTMLElement) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      setOrigin({
        x: `${activeRect.left + activeRect.width / 2 - containerRect.left}px`,
        y: `${activeRect.top + activeRect.height / 2 - containerRect.top}px`,
      });
    }

    setStatus("revealing");
  }

  if (status === "checking") {
    return <div className="mt-12 min-h-[26rem] rounded-[2.5rem]" />;
  }

  if (status === "unlocked") {
    return (
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {CASE_STUDIES.map((study, i) => (
          <Reveal
            key={study.slug}
            delay={i * 0.08}
            className={i === 0 ? "sm:col-span-2" : undefined}
          >
            <CaseStudyCard study={study} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    );
  }

  const revealing = status === "revealing";

  return (
    <div
      data-work-gate
      className="relative mt-12 min-h-[26rem] overflow-hidden rounded-[2.5rem] border border-border/70 bg-black sm:min-h-[28rem]"
    >
      <GradientMesh className="opacity-70" />

      <AnimatePresence>
        {showGatePanel && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex min-h-[26rem] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[28rem] sm:px-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full max-w-md flex-col items-center"
            >
              <motion.img
                src="/hero-header.png"
                alt="Sean K. Watkins"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mix-blend-screen w-full max-w-[18rem] sm:max-w-sm"
              />

              <span className="mt-2 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Private
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-balance">
                Ask for the password to view these case studies.
              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
              >
                <motion.div
                  animate={error ? { x: [0, -8, 8, -8, 8, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="relative flex-1"
                >
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={(event) => {
                      setValue(event.target.value);
                      setError(false);
                    }}
                    placeholder="Password"
                    disabled={revealing}
                    aria-invalid={error}
                    aria-label="Portfolio password"
                    className="h-11 rounded-full bg-card/60 px-5 pr-11 text-center backdrop-blur sm:text-left"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((show) => !show)}
                    tabIndex={-1}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute inset-y-0 right-3.5 flex items-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </button>
                </motion.div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={revealing}
                  className="h-11 shrink-0 gap-1.5 rounded-full px-6"
                >
                  {revealing ? (
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check className="size-4" />
                      Unlocked
                    </motion.span>
                  ) : (
                    <>
                      Enter
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </Button>
              </form>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 text-sm text-destructive"
                  >
                    Incorrect password — try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {revealing && (
        <motion.div
          aria-hidden
          className="absolute inset-0 z-10"
          style={{ background: "var(--gradient-signature)" }}
          initial={{ clipPath: `circle(0% at ${origin.x} ${origin.y})` }}
          animate={{
            clipPath: [
              `circle(0% at ${origin.x} ${origin.y})`,
              `circle(150% at ${origin.x} ${origin.y})`,
              `circle(0% at ${origin.x} ${origin.y})`,
            ],
          }}
          transition={{
            duration: REVEAL_TOTAL_MS / 1000,
            times: [0, REVEAL_FLASH_MS / REVEAL_TOTAL_MS, 1],
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      )}
    </div>
  );
}
