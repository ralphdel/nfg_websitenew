"use client";

import { useEffect } from "react";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  useEffect(() => {
    // Suppress known Sanity UI styled-components prop warnings
    const originalError = console.error;
    console.error = (...args) => {
      const message = typeof args[0] === "string" ? args[0] : "";
      if (message.includes("disableTransition") || message.includes("disabletransition")) return;
      originalError.apply(console, args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);

  return <NextStudio config={config} />;
}
