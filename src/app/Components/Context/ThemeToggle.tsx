// temp file for now to test light//dark mode
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // Reserve the space so the navbar doesn't shift
  if (!mounted) return <div className="size-9" aria-hidden />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="size-9 rounded-md border border-border hover:bg-muted"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}