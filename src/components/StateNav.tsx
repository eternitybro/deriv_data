import { Dispatch, FC, SetStateAction } from "react";

const StateNav: FC<{State: any, setState: Dispatch<SetStateAction<any>>, state: any}> = ({State, setState, state}) =>
{
  const states = Object.keys(State)
        .filter(value => isNaN(Number(value)) !== false)

  return (
    <nav className={`fixed w-full top-0 left-0 flex flex-wrap`}>
      { states.map( (key) =>
        (
          <button
            key={key}
            onClick={() => setState(State[key])}
            disabled={State[state] === key}
            className="disabled:opacity-50 hover:opacity-80 p-2 flex mr-2 mb-2 text-[10px] bg-white text-black font-mono"
          >{key}</button>)
        )
      }
    </nav>
)}
export default StateNav
