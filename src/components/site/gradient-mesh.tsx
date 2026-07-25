import { cn } from "@/lib/utils";

export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="animate-drift-a absolute -left-[10%] top-[-10%] h-[38rem] w-[38rem] rounded-full opacity-60 blur-[110px]"
        style={{ background: "var(--grad-violet)" }}
      />
      <div
        className="animate-drift-b absolute right-[-15%] top-[5%] h-[34rem] w-[34rem] rounded-full opacity-50 blur-[110px]"
        style={{ background: "var(--grad-fuchsia)" }}
      />
      <div
        className="animate-drift-c absolute bottom-[-20%] left-[20%] h-[30rem] w-[30rem] rounded-full opacity-40 blur-[110px]"
        style={{ background: "var(--grad-orange)" }}
      />
    </div>
  );
}
