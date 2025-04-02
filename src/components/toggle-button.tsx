"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className="w-6 h-6 bg-white dark:bg-black rounded-full flex items-center justify-center">
          {theme === "dark" ? (
            <Moon className="text-yellow-500" size={16} />
          ) : (
            <Sun className="text-yellow-500" size={16} />
          )}
        </div>
      </div>
    </div>
  );
}
