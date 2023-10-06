import { useEffect, useState } from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function LoadLetters(props) {
  const [index, setIndex] = useState(0);

  const string = props.string;
  const stringArray = string.split("");

  useEffect(() => {
    if (index < stringArray.length) {
      if (index == 0) {
        setTimeout(() => {
          setIndex(index + 1);
        }, 600);
      } else {
        setTimeout(() => {
          setIndex(index + 1);
        }, 100);
      }
    }
  });

  return <>{stringArray.slice(0, index).join("")}</>;
}
