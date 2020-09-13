import React from "react";
import "./Cards.scss";
import { useHistory } from "react-router-dom";

function Cards({ carsData, getCars }) {
  const history = useHistory();

  function update(elem) {
    history.push("/update", { elem });
  }

  async function remove(id) {
    try {
      const response = await fetch(`http://localhost:3030/cars/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Good:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
    getCars();
  }

  return (
    <div className="cars">
      {carsData.map((elem, index) => {
        return (
          <div key={index} className="cars_cards" onClick={() => update(elem)}>
            <div className="cars_title_delete">
              <h1 className="cars_title">{elem.title}</h1>
              <button
                className="cars_delete"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(elem._id);
                }}
              ></button>
            </div>
            <img src={elem.img} alt="car" className="cars_img" />
            <p className="cars_year">Year {elem.year}</p>
            <p className="cars_price">Price {elem.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
