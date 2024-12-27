import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateRandomCharacter = (goal: string) => {
  const charactersLength = characters.length;

  const generate = () => {
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  let rand = generate();

  while (rand === goal) {
    rand = generate();
  }

  return rand;
}

const generateRandomCharArray = (length: number, goalArray: string[]) => {
    let result = [];
    for ( let i = 0; i < length; i++ ) {
      result.push(generateRandomCharacter(goalArray[i]));
    }

    return result;
}

const computeGoalTextArray = (length: number, text: string) => {
  const goal = []; 

  for (let i = 0; i < length; i++) {
    goal.push(text[i % text.length]);
  }

  return goal;

}

const copmuteRemainingIndices = (currentCharacters: string[], goalTextArray: string[]) => {
  const remainingIndices = [];

  for (let i = 0; i < currentCharacters.length; i++) {
    if (currentCharacters[i].normalize() !== goalTextArray[i].normalize()) {
      remainingIndices.push(i);
    }
  }
  
  return remainingIndices;
}

const updateText = (currentCharacters: string[], goalTextArray: string[], speed: number, glitchChance: number) => {
  const remainingIndices = copmuteRemainingIndices(currentCharacters, goalTextArray);


  const indicesToFix =  remainingIndices.sort(() => Math.random() - Math.random()).slice(0, Math.min(speed, remainingIndices.length))

  
  let chars = (currentCharacters.length !== 0 ? currentCharacters : generateRandomCharArray(goalTextArray.length, goalTextArray));

  const output = goalTextArray.map((goalChar, i) => {

    const glitch = Math.random() <= glitchChance;

    if (!glitch && (indicesToFix.includes(i) || chars[i].normalize() === goalChar.normalize())) {
      return goalTextArray[i];
    } else {
      return generateRandomCharacter(goalChar);
    }
  });

  return output;
}

export const MatrixText = ({
    text,
    speed = 1,
    glitchChance = 0.007,
    className,
    linkTo
}: {
    text: string,
    speed?: number,
    glitchChance?: number,
    className?: string,
    linkTo?: string
}) => {

  const length = text.length

  const goalTextArray: string[] = computeGoalTextArray(length, text);
  const [currentCharacters, setCurrentCharacters] = useState<string[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setCurrentCharacters(generateRandomCharArray(length, goalTextArray));
    setInitialized(true)
  }, [length, text])
  
  useEffect(() => {

      const interval = setInterval(() => {
        if (initialized) {
          setCurrentCharacters(updateText(currentCharacters, goalTextArray, speed, glitchChance));
        }
  
      }, 75);
  
    
      return () => clearInterval(interval);
  
  }, [initialized, text, length, currentCharacters, speed]);


  if (linkTo) {
    return <Link className={className} to={linkTo}>
        {currentCharacters?.join('')}
    </Link>
  }
  return <span className={className}>
        {currentCharacters?.join('')}
    </span>
}