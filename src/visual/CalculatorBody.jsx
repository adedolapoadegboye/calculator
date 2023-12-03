/* Import required components and libraries */
import { React, useState} from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import Signature from './Signature';


let keypadValue = "";

const CalculatorBody = () => {
  const [display, setDisplay] = useState("");
  const [dumbRender, setDumbRender] = useState(true)
  const handleClick = (e) => {
    if (e.target.value) {
      keypadValue = e.target.value;
      setDumbRender(!dumbRender)
      console.log(keypadValue);
      if (keypadValue === "clear"){
        setDisplay("clear")
      }
      else if (keypadValue === "."){
        setDisplay(".")
      }
      else if (keypadValue === "x"){
        setDisplay("*")
      }
      else if (keypadValue === "+/-"){
        setDisplay("+/-")
      }
      else if (keypadValue === "="){
        setDisplay("=")
      }
      else if (keypadValue === "%"){
        setDisplay("%")
      }
      else {
        setDisplay(keypadValue)
      }
    } else {
      console.log("Error");
      setDisplay("Error")
    }
  };

  /* setDisplay(keypadValue) */
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-200">
      <div className="border-[10px] border-zinc-500 px-5 lg:px-10 pt-5 lg:pt-10 pb-2 rounded-2xl shadow-2xl shadow-black">
        <Display forDisplay={display} />
        <Buttons onClicks={handleClick} />
      </div>
      <br/>
      <Signature />
    </div>
  );
};

export default CalculatorBody;
