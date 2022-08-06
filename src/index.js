import ReactDOM from 'react-dom/client';
import Rooms from "./Rooms";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Selection from "./new";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route path="/ReactApp" element={<Rooms />} />
      <Route exact path="/new" element={<Selection />}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
  </div>
);

