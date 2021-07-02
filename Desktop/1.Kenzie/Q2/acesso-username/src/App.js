import { useState } from "react";
import "./App.css";

import GetUserComponent from "./components/GetUserComponent";
import WelcomePage from "./components/WelcomePage/index";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");

  return (
    <div className="App">
      <div className="App-header">
        {isLoggedIn ? (
          <div>
            <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
          </div>
        ) : (
          <div>
            <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
