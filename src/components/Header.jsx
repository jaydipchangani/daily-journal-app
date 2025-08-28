import React from "react";
import { TbNotes } from "react-icons/tb";
import { useTheme } from "./ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`flex justify-between items-center px-6 py-4 shadow-md ${
        theme === "light" ? "bg-blue-300 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="flex items-center space-x-2">
        <TbNotes className="text-3xl" />
        <h1 className="text-2xl font-bold">Daily Journal</h1>
      </div>

      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          theme === "light"
            ? "bg-gray-200 text-black hover:bg-gray-300"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </header>
  );
}
