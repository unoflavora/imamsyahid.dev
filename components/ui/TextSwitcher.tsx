"use client";
import useTextSwitcher from "@/hooks/useTextSwitcher";

export default function TextSwitcher(props: { texts: string[] }) {
  const { currentIndex, transitionOut } = useTextSwitcher(props.texts);

  return (
    <>
      {props.texts.map(
        (skill, i) =>
          skill === props.texts[currentIndex] && (
            <span
              key={"skill " + i}
              className={`font-semibold text-black dark:text-white dark:font-normal ${
                transitionOut ? "animate-text-out" : "animate-text-in"
              } ml-2 absolute`}
            >
              {" "}
              {skill}.
            </span>
          )
      )}
    </>
  );
}
