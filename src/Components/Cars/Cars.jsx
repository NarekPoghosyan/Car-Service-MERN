import React, { useState, useEffect, useMemo } from "react";
import Cards from "./Cards/Cards";
import Input from "../Header/Search/Search";

function Cars() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const filtCars = useMemo(() =>
    data.filter((elem) => {
      return elem.title.toLowerCase().includes(inputValue);
    })
  );

  async function getCars() {
    const query = await fetch("http://localhost:3030/", {
      method: "GET",
    });
    const data = await query.json();
    const sortData = data.sort(
      (a, b) => Number(a.price.slice(0, -1)) - Number(b.price.slice(0, -1))
    );
    setData(sortData);
  }

  useEffect(() => {
    getCars();
  }, []);

  function cleanInputValue() {
    setInputValue("");
  }

  function inputChangeHandler(event) {
    setInputValue(event.target.value.toLowerCase());
  }

  return (
    <div className="cars_service">
      <Input
        changeHandler={inputChangeHandler}
        clean={cleanInputValue}
        inputValue={inputValue}
      />
      <Cards carsData={filtCars} getCars={getCars} />
    </div>
  );
}

export default Cars;
