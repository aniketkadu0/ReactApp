import React, { BrowserRouter, Route, Routes, useState, useNavigate } from "react";
import "./index.css"
import Selection from "./new";

export default function Rooms() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate("/new");
  };
  
  const numbers = [0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0];

  const listItems = numbers.map((numbers,index) =>
  <div>
    <button
    className={numbers ? "green" : "red"}
    disabled={!numbers}
    key={index}
    onClick={navigateToContacts}
    >Room no. {(index+1)}
    <br/>{numbers ? " Available" : " Not Available"} </button>
    
    <BrowserRouter>
    <Routes>
    <Route path ="/new" element={<Selection value={numbers}/>} />
    </Routes>
    </BrowserRouter>
  </div>
  );

  return (
    <>
      <style>{`
        .red {color: red; background-color: silver; margin : 15px; font-size:30px}
        .green {color: green; background-color: white; margin : 15px; font-size:30px}
      `}</style>
      {listItems}
    </>
  );
}