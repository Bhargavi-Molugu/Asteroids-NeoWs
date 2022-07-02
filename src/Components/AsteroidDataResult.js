import React, { useState, useEffect } from "react";
import Table from "./Table";
import Charts from "./Charts";

export default function AsteroidDataResult({ asteroidData }) {
  let [view, setView] = useState("chart");
  let [data, setData] = useState([]);

  function onChangeHandler(selected) {
    setView(selected);
  }
  useEffect(() => {
    let dt = [];
    let ast = asteroidData.near_earth_objects;
    //Merging all dates of asteroid in to single array
    for (const key in ast) {
      dt = [...dt, ...ast[key]];
    }
    setData(dt);
  }, []);
  return (
    <>
      <h5 className="mt-5 mb-1">Displaying last 7 days Neo's(Near Earth Objects)</h5>
      <div className="mb-2">
        <a
          className={`d-inline-block me-2 ${view === "chart" ? "border" : ""}`}
          onClick={() => onChangeHandler("chart")}>
          <img src="/chart.PNG" alt="chart icon"/>
        </a>
        <a
          className={`d-inline-block me-2 ${view === "table" ? "border" : ""}`}
          onClick={() => onChangeHandler("table")}>
          <img src="/list.PNG" alt="list icon"/>
        </a>
      </div>
      {view === "table" && <Table asteroidData={data} />}
      {view === "chart" && <Charts asteroidData={data} />}
    </>
  );
}
