export const themechanger = function (theme: string): void {
    // Apply the theme based on the provided argument
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // Respect system preference if theme is not specified
      if (
        !("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      // Optionally remove the theme key from local storage to respect system preference
      localStorage.removeItem("theme");
    }
  };
  