const dataDoughnut = {
  labels: ["possitive", "negetive", "unsure"],
  datasets: [
    {
      label: "# of Votes",
      data: [23, 20, 6],

      backgroundColor: ["#9791FF", "#FF5959", "lightgray"],
      borderColor: ["#9791FF", "#FF5959", "lightgray"],
      cutout: "35",
    },
  ],
};
// config
const doughnutConfig = {
  type: "doughnut",
  data: dataDoughnut,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        id: "legendMargin",
        position: "left",
        align: "start",
        fontSize: "14",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          padding: 14,
        },
      },
    },
  },
};

// data redering
const missionDoughnut = new Chart(
  document.getElementById("doughnut"),
  doughnutConfig
);

const vissionDoughnut = new Chart(
  document.getElementById("vissionDoughnut"),
  doughnutConfig
);
