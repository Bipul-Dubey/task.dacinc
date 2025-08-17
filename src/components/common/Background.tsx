"use client";

import React from "react";

type GradientContainerProps = {
  children: React.ReactNode;
  className?: string; // optional extra classes for padding/layout overrides
};

export function GradientContainer({
  children,
  className = "",
}: GradientContainerProps) {
  return (
    <section className={`relative ${className}`}>
      {/* Background layer (matches hero feel) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white"
      />
      {children}
    </section>
  );
}
