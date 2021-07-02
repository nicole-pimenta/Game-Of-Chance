import { useState } from "react";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState(" ");

  const HandleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </form>
    </div>
  );
};

export default GetUserComponent;
