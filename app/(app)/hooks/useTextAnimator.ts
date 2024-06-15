import { useEffect, useState } from "react";

export default function useTextAnimator(text: string) {
  const [currentText, setCurrentText] = useState(text ?? "");

  const randomIndexPicker = (indexer: string[] | string) =>
    indexer ? Math.floor(Math.random() * indexer.length) : 0;

  useEffect(() => {
    var timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < 15; i++) {
      var timeout = setTimeout(() => {
        if (text == null) return;

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
