import Game from "./game"
import ReactDOM from 'react-dom/client';
import Myfun from "./myclass";
import Toggle from "./toggle";
import Login from "./login";
import LoginControl from "./logincontrol";
import Rooms from "./Rooms";
import { BrowserRouter, Switch, Routes, Route} from "react-router-dom";
import Selection from "./new";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
  {/* <Game />
  <Myfun name = "Pravin Yadav" />
  <Toggle />
  <Login isLoggedIn = {true} />
  <LoginControl /> */}
  <Routes>
      <Route path="/" element={<Rooms />} />
      <Route exact path="/new" element={<Selection />}/>
  </Routes>
  </BrowserRouter>
  </div>
);

