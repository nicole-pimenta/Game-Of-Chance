const WelcomePage = ({ user, setIsLoggedIn }) => {
  function HandleLogout() {
    setIsLoggedIn(false);
    //chamar a prop transformando a em false
  }

  return (
    <div>
      <h1> Bem-vindo(a) , {user}!</h1>
      <button onClick={HandleLogout}> Sair </button>
    </div>
  );
};

export default WelcomePage;
