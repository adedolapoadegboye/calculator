import React from "react";

const Buttons = ({onClicks}) => {

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 text-center px-1 py-1 font-mono">
        <button className=" border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-red-400" value={'clear'} onClick={onClicks}>clear</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-orange-400" value={'+/-'} onClick={onClicks}>+/-</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-amber-400" value={"%"} onClick={onClicks}>%</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-lime-400" value={"/"} onClick={onClicks}>/</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={7} onClick={onClicks}>7</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={8} onClick={onClicks}>8</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={9} onClick={onClicks}>9</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-sky-400" value={"x"} onClick={onClicks}>x</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={4} onClick={onClicks}>4</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={5} onClick={onClicks}>5</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={6} onClick={onClicks}>6</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-indigo-400" value={"-"} onClick={onClicks}>-</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={1} onClick={onClicks}>1</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={2} onClick={onClicks}>2</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={3} onClick={onClicks}>3</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-pink-400" value={"+"} onClick={onClicks}>+</button>
        <button className="col-span-2 border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-stone-400" value={0} onClick={onClicks}>0</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-cyan-400" value={"."} onClick={onClicks}>.</button>
        <button className="... border-2 border-black px-2 py-2 rounded-xl shadow-2xl bg-green-300" value={"="} onClick={onClicks}>=</button>
      </div>
    </div>
  );
};

export default Buttons;
