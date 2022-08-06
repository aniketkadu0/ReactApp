import React, { useNavigate } from "react-router-dom";
import "./index.css"

export default function Rooms() {
  const navigate = useNavigate();
  const numbers1 = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1 , 1 , 0, 1 , 1, 1];
  const numbers2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1 , 1 , 0, 1 , 1, 1];

  const listItems1 = numbers1.map((numbers,index) =>
    <button
    className={numbers ? "green" : "red"}
    disabled={!numbers}
    key={index}
    onClick= {() => {
      navigate('/new', {
        state : index+1
      });
    }}
    >Room no. {(index+1)}
    <br/>
    {numbers ? " is Available" : " is not Available"} 
    </button>
  );

  const listItems2 = numbers2.map((numbers,index) =>
    <button
    className={numbers ? "green" : "red"}
    disabled={!numbers}
    key={index}
    onClick= {() => {
      navigate('/new', {
        state : index+19
      });
    }}
    >Room no. {(index+19)}
    <br/>
    {numbers ? " is Available" : " is not Available"} 
    </button>
  );

  return (
    <>
      <style>{`
        .red {color: red; background-color: silver; margin : 15px; font-size:18px}
        .green {color: green; background-color: white; margin : 15px; font-size:18px}
      `}</style>
      {listItems1}
      <hr style={{padding:"80px"}}></hr>
      <hr></hr>
      {listItems2}
    </>
  );
}