"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaRegSun } from "react-icons/fa6";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center size-11 rounded-full border-2 border-border
       bg-secondary hover:bg-secondary-accent border-primary-accent hover:border-secondary hover:border-2 text-primary-accent hover:text-secondary"
    >
      {isDark ? <FaRegSun className="size-7"/> : <FaMoon className="size-7"/>}
    </button>
  );
}