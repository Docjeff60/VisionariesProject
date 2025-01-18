// Line Chart: Daily Sales Trends
const lineCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineCtx, {
  type: "line",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Daily Sales (₦)",
        data: [300, 450, 320, 540, 480, 600, 750],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 24, // Removes the box
          padding: 0, // Removes extra padding
          font: {
            size: 14, // Adjusts text size
          },
          color: "black", // Legend text color
        },
      },
    },
  },
});

// Bar Chart: Revenue by Product Category
const barCtx = document.getElementById("barChart").getContext("2d");
new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Electronics", "Computers", "Phones", "Home Appliances"],
    datasets: [
      {
        label: "Revenue (₦)",
        data: [1500, 2000, 800, 1700],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 0, // Removes the box
          padding: 0, // Removes extra padding
          font: {
            size: 14, // Adjusts text size
          },
          color: "black", // Legend text color
        },
      },
    },
  },
});

// Pie Chart: Sales by Payment Method
const pieCtx = document.getElementById("pieChart").getContext("2d");
new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["Credit Card", "Debit Card", "Bank Transfer", "Cash on Delivery"],
    datasets: [
      {
        label: "Sales Distribution (%)",
        data: [40, 25, 20, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true, // Keeps aspect ratio
    aspectRatio: 1.5, // Scales the size of the chart (default is 2)
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 24, // Removes the box
          padding: 24, // Removes extra padding
          font: {
            size: 14, // Adjusts text size
          },
          color: "black", // Legend text color
        },
      },
    },
  },
});
