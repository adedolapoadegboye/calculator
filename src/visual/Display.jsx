/* eslint-disable no-new-func */
import { React, useRef } from "react";

const Display = ( {forDisplay} ) => {
  const previousInputValue = useRef("");
  const result = useRef();
  const displayTrain = () => {
    if (forDisplay === "clear") {
      previousInputValue.current = "";
      return previousInputValue.current;
    }
    else if (forDisplay === "=") {
      result.current = previousInputValue.current;
      function evaluateMathExpression(expression) {
        // Using the Function constructor to create a function and then calling it
        const result = new Function("return " + expression)();

        // Converting the result to an integer
/*         const resultAsFloat = parseFloat(result).toFixed(10);
 */
        return result;
      }
      result.current = evaluateMathExpression(result.current);
      previousInputValue.current = result.current;
      return previousInputValue.current;
    }

      else if (forDisplay === "+/-"){
        previousInputValue.current = "-" + previousInputValue.current
        return previousInputValue.current
      }

      else {
      previousInputValue.current = previousInputValue.current + forDisplay;
      return previousInputValue.current;
    }
  };

  console.log({result, previousInputValue})

  return (
    <div className="pb-3">
      <h1 className="text-right font-mono text-3xl border-4 border-zinc-800 rounded-xl px-1 h-[96px] max-h-[96px] w-[304px] max-w-[304px] overflow-auto">
        {displayTrain()}
      </h1>
    </div>
  );
};

export default Display;
