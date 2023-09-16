import { useEffect, useState } from "react";

export default function useTextAnimator (text : string)
{
    const [currentText, setCurrentText] = useState(text)

    const randomIndexPicker = (indexer: string[] | string) => Math.floor(Math.random() * indexer.length)

    useEffect(() => {
        for(let i = 0; i < 10; i++)
        {
            setTimeout(() => {
                let randomChar = ["*", "_", "@", "^", "#"]
                let replacedIndex = randomIndexPicker(text);
                let randomIndex = randomIndexPicker(randomChar);
                let prevChar = text.charAt(replacedIndex);
        
                setCurrentText(text.replace(prevChar, randomChar[randomIndex]))
        
                setTimeout(() => {
                    setCurrentText(text.replace(randomChar[randomIndex], prevChar))
                }, 30 * i)
            }, 50 * i)
        }
    }, [])
    
    return currentText;
}