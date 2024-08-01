import { useEffect, useState } from "react";
import { themechanger } from "../utils/themechanger.ts";

function ThemeToggler() {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    themechanger(theme);
  }, [theme]);

  return (
    <div className=" flex items-center justify-center mb-5">
        {/* <p className="font-bold text-xl text-center dark:text-white ">Change theme section</p> */}
      <button
      className="dark:text-white p-1 rounded-xl w-14 bg-white border-2 border-black "
        onClick={():void =>
          setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
      >
        <div className="bg-blue-700 w-4 h-4 rounded-full translate-x-0 dark:translate-x-7 transition-all duration-500">
        </div>
      </button>
      {/* <div className="text-blue-500 dark:text-gray-100">Hi</div> */}
    </div>
  );
}

export default ThemeToggler;
