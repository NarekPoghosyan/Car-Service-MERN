import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Update() {
  const history = useHistory();
  const [upName, setUpName] = useState(history.location.state.elem.title);
  const [upImage, setUpImage] = useState(history.location.state.elem.img);
  const [upYear, setUpYear] = useState(history.location.state.elem.year);
  const [upPrice, setUpPrice] = useState(history.location.state.elem.price);

  function back() {
    history.push("/");
  }

  function changeName(event) {
    setUpName(event.target.value);
  }

  function changeImage(event) {
    setUpImage(event.target.value);
  }

  function changeYear(event) {
    setUpYear(event.target.value);
  }

  function changePrice(event) {
    setUpPrice(event.target.value);
  }

  async function sendUpdateData() {
    try {
      const response = await fetch(
        `http://localhost:3030/update/${history.location.state.elem._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: upName,
            img: upImage,
            year: upYear,
            price: upPrice,
          }),
        }
      );
      const json = await response.json();
      console.log("Good:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
    history.push("/");
  }

  return (
    <div className="add_main">
      <div className="cars_cards">
        <div className="cars_title_delete">
          <h1 className="cars_title">{upName}</h1>
        </div>
        <img src={upImage} alt="car" className="cars_img" />
        <p className="cars_year">Year {upYear}</p>
        <p className="cars_price">Price {upPrice}</p>
      </div>
      <h1>UPDATE CAR DATA</h1>
      <input
        value={upName}
        type="text"
        placeholder="Update car name"
        onChange={changeName}
      ></input>
      <input
        value={upImage}
        type="text"
        placeholder="Update car image"
        onChange={changeImage}
      ></input>
      <input
        value={upYear}
        type="text"
        placeholder="Update car year"
        onChange={changeYear}
      ></input>
      <input
        value={upPrice}
        type="text"
        placeholder="Update car price"
        onChange={changePrice}
      ></input>
      <div className="button">
        <button className="button_back" onClick={back}>
          Back
        </button>
        <button className="button_complete" onClick={sendUpdateData}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Update;
