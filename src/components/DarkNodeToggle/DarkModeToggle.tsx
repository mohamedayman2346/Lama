"use client";
import { ThemeContext } from "@/src/context/ThemeContext";
import React, { useContext } from "react";

export default function DarkModeToggle() {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { toggle, mode } = context;

  return (
    <div
      onClick={toggle}
      className="w-11 h-6 relative cursor-pointer border border-green rounded-4xl flex justify-between p-0.5! items-center"
    >
      <div className="moon text-[12px]">🌙</div>
      <div className="sun text-[12px]">☀️</div>
      <span
        className="ball w-4 h-4 bg-green rounded-full absolute "
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></span>
    </div>
  );
}
