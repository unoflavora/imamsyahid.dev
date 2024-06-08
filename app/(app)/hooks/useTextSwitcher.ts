import { useEffect, useState } from "react";

export default function useTextSwitcher(skills: string[]) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [transitionOut, setTransitionOut] = useState(false);

  useEffect(() => {
    const delay = window.setTimeout(() => {
      setTransitionOut(false);
      setCurrentIndex((currentIndex + 1) % skills.length);
    }, 2000);

    const out = window.setTimeout(() => {
      setTransitionOut(true);
    }, 1500);

    return () => {
      clearTimeout(delay);
      clearTimeout(out);
    };
  }, [currentIndex, skills]);

  return { currentIndex, transitionOut };
}
