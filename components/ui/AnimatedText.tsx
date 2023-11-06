"use client";
import useTextAnimator from "@/hooks/useTextAnimator";
import React from "react";

export default function AnimatedText(
  props: { text: string } & React.HTMLAttributes<HTMLElement>
) {
  const animatedText = useTextAnimator(props.text);

  return <span className={props.className}>{animatedText} </span>;
}
