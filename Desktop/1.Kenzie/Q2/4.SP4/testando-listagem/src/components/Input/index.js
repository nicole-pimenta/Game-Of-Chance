import { useState } from "react";
import Display from "../Display";

const Input = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleList = () => {
    setList([...list, input]);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button disabled={!input} onClick={handleList}>
        Enviar
      </button>

      {list.map((input, index) => (
        <Display key={index} list={input} />
      ))}
    </div>
  );
};

export default Input;
