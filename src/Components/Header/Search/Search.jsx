import React from "react";
import { useHistory } from "react-router-dom";
import "./Search.scss";

function Input({ changeHandler, clean, inputValue }) {
  const history = useHistory();

  function addCar() {
    history.push("/add");
  }

  return (
    <div className="search">
      <button className="add_car" onClick={addCar}>
        Add Car
      </button>
      <input
        value={inputValue}
        type="text"
        className="search_input"
        placeholder="search cars by name"
        onChange={changeHandler}
      />
      <button className="search_clean" onClick={clean}></button>
    </div>
  );
}

export default Input;
