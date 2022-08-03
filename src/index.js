import Game from "./game"
import ReactDOM from 'react-dom/client';
import Myfun from "./myclass";
import Toggle from "./toggle";
import Login from "./login";
import LoginControl from "./logincontrol";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  {/* <Game />
  <Myfun name = "Pravin Yadav" />
  <Toggle /> */}
  <Login isLoggedIn = {true} />
  <LoginControl />
  </div>
);

