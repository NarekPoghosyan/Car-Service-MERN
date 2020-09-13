import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Add.scss";

const Add = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  function back() {
    history.push("/");
  }

  function changeName(event) {
    setName(event.target.value);
  }

  function changeImage(event) {
    setImage(event.target.value);
  }

  function changeYear(event) {
    setYear(event.target.value);
  }

  function changePrice(event) {
    setPrice(event.target.value);
  }

  async function sendData() {
    if (name === "" || image === "" || year === "" || price === "") {
      alert("Inputs are required");
      return false;
    }
    try {
      const response = await fetch("http://localhost:3030/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: name,
          img: image,
          year: year,
          price: price,
        }),
      });
      const json = await response.json();
      console.log("Good:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
    history.push("/");
  }

  return (
    <div className="add_main">
      <h1>SEE HOW IT LOOKS</h1>
      <div className="cars_cards">
        <div className="cars_title_delete">
          <h1 className="cars_title">{name}</h1>
        </div>
        <img src={image} alt="car" className="cars_img" />
        <p className="cars_year">Year {year}</p>
        <p className="cars_price">Price {price}</p>
      </div>
      <h1>ADD CAR TO LIST</h1>
      <input
        type="text"
        placeholder="Add car name"
        onChange={changeName}
      ></input>
      <input
        type="text"
        placeholder="Add car image"
        onChange={changeImage}
      ></input>
      <input
        type="text"
        placeholder="Add car year"
        onChange={changeYear}
      ></input>
      <input
        type="text"
        placeholder="Add car price"
        onChange={changePrice}
      ></input>
      <div className="button">
        <button className="button_back" onClick={back}>
          Back
        </button>
        <button className="button_complete" onClick={sendData}>
          Complete
        </button>
      </div>
    </div>
  );
};

export default Add;
