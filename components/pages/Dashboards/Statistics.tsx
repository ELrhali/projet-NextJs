import React from "react";
import { Line } from "react-chartjs-2";
const options = {
  plugins: {
    legend: {
      display: false,
    },
    width: 850,
    height: 300,
    axes: {
      x: {
        0: { side: "top" },
      },
    },
  },
};
const graph: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "Drivers tardness",
        backgroundColor: "rgba(174, 182, 191,0.4)",
        borderColor: "rgba(78, 78, 78  ,1)",
        borderCapStyle: "butt",
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(0,0,0)",
        pointBackgroundColor: "#FF8600",
        data: [50, 51, 31, 61, 50, 0],

        borderWidth: 1,
        pointBorderWidth: 4,
        pointHoverRadius: 10,
      },
      {
        lineTension: 0.5,
        backgroundColor: "rgba(168, 239, 255,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 4,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        data: [50, 76, 10, 12, 79, 80, 12],
        label: "Passengers tardness",

        borderWidth: 1,
      },
    ],
  };
  return (
    <div className=" bg-white px-8 ">
      <h2 className="text-xl text-gray-700 p-5">Statistics</h2>
      <main>
        <Line data={data} options={options} />
      </main>
    </div>
  );
};
export default graph;
