import { useState, useRef } from "react";
import { useRouter } from "next/router";
export default function Tab({
  title,
  color,
  darkColor,
  isActive = false,
  children,
}) {
  let [active, setActive] = useState(isActive);
  useState(() => {
    if (
      globalThis?.location?.pathname?.includes(
        title.toLowerCase().replace(" ", "-")
      )
    ) {
      setActive(true);
    }
  }, [globalThis?.location?.pathname]);
  let tab = useRef(null);
  let router = useRouter();
  return (
    <button
      ref={tab}
      className={`transition-all duration-300 flex-none items-center snap-center px-3 py-1 ml-auto rounded-full border-1 border-slate-300 bg-slate-300/70 dark:border-slate-900 dark:bg-slate-900/70 font-medium text-sm text-${darkColor} dark:text-${color} hover:bg-${color}/70 hover:border-${color} dark:hover:bg-${darkColor}/50 dark:hover:border-${darkColor}${
        active
          ? ` border-${color} bg-${color}/50 dark:border-{darkColor} dark:bg-${darkColor}/50`
          : ""
      }`}
      onClick={() => {
        setActive(true);
        //router.push(`/tags/${title.toLowerCase().replace(" ", "-")}`);
      }}
    >
      <span className="flex items-center">
        {children}
        {title}
      </span>
    </button>
  );
}
