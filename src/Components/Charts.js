import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Charts = ({ asteroidData }) => {
  // let [chartData, setChartData] = useState({
  //   labels: [],
  //   datasets: [],
  // });

  // useEffect(() => {
  //   let copyData = JSON.parse(JSON.stringify(chartData));
  //   copyData.datasets = [];
  //   asteroidData.forEach((data) => {
  //     let estDiameter = data.estimated_diameter.kilometers;
  //     let averageDiameter =
  //       (estDiameter.estimated_diameter_max +
  //         estDiameter.estimated_diameter_min) /
  //       2;
  //     let datasetObj = {
  //       label: "Miss Distance",
  //       backgroundColor: ["#50AF95"],
  //       data: [],
  //     };
  //     copyData.labels.push(averageDiameter.toFixed(2));
  //     datasetObj.data.push(
  //       data.close_approach_data[0].miss_distance.kilometers
  //     );
  //     copyData.datasets.push(datasetObj);
  //   });
  //   setChartData(copyData);
  //   console.log(copyData);
  // }, []);
  let dataChart = {
    labels: [],
    datasets: [
      {
        label: "Miss Distance",
        backgroundColor: ["#50AF95"],
        data: [],
      },
    ],
  };
  asteroidData.forEach((data) => {
    let estDiameter = data.estimated_diameter.kilometers;
    let averageDiameter =
      (estDiameter.estimated_diameter_max +
        estDiameter.estimated_diameter_min) /
      2;
    dataChart.labels.push(averageDiameter.toFixed(2));
    dataChart.datasets[0].data.push(
      data.close_approach_data[0].miss_distance.kilometers
    );
  });
  return (
    <div>
      <Bar data={dataChart} />
    </div>
  );
};

export default Charts;
