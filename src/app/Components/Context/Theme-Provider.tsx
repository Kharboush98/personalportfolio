"use client"

import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export default function ThemeProvider(props : ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />;
}
