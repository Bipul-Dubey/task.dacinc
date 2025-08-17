"use client";

import React from "react";

type GradientContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientContainer({
  children,
  className = "",
}: GradientContainerProps) {
  return (
    <section className={`relative ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute flex inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white"
      />
      {children}
    </section>
  );
}
