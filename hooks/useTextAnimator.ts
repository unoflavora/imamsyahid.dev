import { useEffect, useState } from "react";

export default function useTextAnimator(text: string) {
  if (text == null) return;

  const [currentText, setCurrentText] = useState(text);

  const randomIndexPicker = (indexer: string[] | string) =>
    Math.floor(Math.random() * indexer.length);

  useEffect(() => {
    var timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < 15; i++) {
      var timeout = setTimeout(() => {
        let randomChar = ["*", "_", "@", "^", "#"];
        let replacedIndex = randomIndexPicker(text);
        let randomIndex = randomIndexPicker(randomChar);
        let prevChar = text.charAt(replacedIndex);

        setCurrentText(text.replace(prevChar, randomChar[randomIndex]));

        let timeout = setTimeout(() => {
          setCurrentText(text.replace(randomChar[randomIndex], prevChar));
        }, 50 * i);
        timeouts.push(timeout);
      }, 50 * i);
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return currentText;
}
