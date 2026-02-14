"use client";

import React, { createContext, useState } from "react";

interface ThemeContextType {
  mode: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
        <div className={`theme ${mode}`}> 
            {children}
        </div>
    </ThemeContext.Provider>
  );
};
