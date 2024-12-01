import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./CalorieTracker.scss";
import logo from '../assets/images/man.png';

// Register the chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CalorieTracker = () => {
  // Sample data for nutrient intake and calorie intake
  const dataLine = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: "Protein Intake (g)",
        data: [50, 60, 55, 70, 65, 75, 80],
        fill: false,
        borderColor: "#e16120", // Orange for protein
        tension: 0.1,
      },
      {
        label: "Carbs Intake (g)",
        data: [100, 120, 110, 130, 125, 140, 150],
        fill: false,
        borderColor: "#1E90FF", // Blue for carbs
        tension: 0.1,
      },
      {
        label: "Fats Intake (g)",
        data: [30, 35, 32, 40, 38, 45, 50],
        fill: false,
        borderColor: "#000000", // Black for fats
        tension: 0.1,
      },
      {
        label: "Sugar Intake (g)",
        data: [40, 45, 42, 50, 48, 55, 60],
        fill: false,
        borderColor: "#32CD32", // Green for sugar
        tension: 0.1,
      },
    ],
  };

  // Bar chart data for calorie intake over a week
  const dataBar = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: "Calorie Intake (kcal)",
        data: [1800, 2000, 1900, 2100, 2200, 2300, 2400], // Example calorie intake for each day
        backgroundColor: "#FFD700", // Gold color for the bars
        borderColor: "#FFA500", // Orange border for the bars
        borderWidth: 1,
      },
    ],
  };

  // Nutrient table data
  const nutrients = [
    { name: "Protein", amount: "50g", goal: "60g", left: "-10g" },
    { name: "Carbohydrates", amount: "200g", goal: "250g", left: "-50g" },
    { name: "Fats", amount: "70g", goal: "80g", left: "-10g" },
    { name: "Sugar", amount: "40g", goal: "50g", left: "-10g" },
    { name: "Saturated Fats", amount: "20g", goal: "22g", left: "-2g" },
    { name: "Cholesterol", amount: "200mg", goal: "300mg", left: "-100mg" },
    { name: "Fiber", amount: "25g", goal: "30g", left: "-5g" },
    { name: "Sodium", amount: "1800mg", goal: "2000mg", left: "-200mg" },
  ];

  // Chart options for aesthetic customization
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days of the Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Intake (g / kcal)',
        },
        min: 0, // Ensure the Y-axis starts from 0
      },
    },
  };

  // User Info (example data)
  const userInfo = {
    name: "Akshay",
    age: 28,
    sex: "Male",
    height: "5'9\"",
    weight: "75kg",
    bmi: "24.9",
    allergies: ["Peanuts", "Dust"],
    image: logo
  };

  return (
    <div className="calorie-tracker-container">
      {/* User Info Card */}
      <div className="card-container">
        <div className="user-info-card">
          <div className="user-details">
            <h2 className="title">User Information</h2>
            <div className="user-details">
              <p><strong>Name:</strong> {userInfo.name}</p>
              <p><strong>Age:</strong> {userInfo.age}</p>
              <p><strong>Sex:</strong> {userInfo.sex}</p>
              <p><strong>Height:</strong> {userInfo.height}</p>
              <p><strong>Weight:</strong> {userInfo.weight}</p>
              <p><strong>BMI:</strong> {userInfo.bmi}</p>
              <p><strong>Allergies:</strong> {userInfo.allergies.join(", ")}</p>
            </div>
          </div>
          {/* Display image on the right */}
          <img src={userInfo.image} alt="User Profile" />
        </div>
      </div>

      {/* Nutrient Table */}
      <div className="card-container">
        <div className="nutrient-card">
          <h2 className="title">Nutrient Intake</h2>
          <table className="nutrient-table">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Total</th>
                <th>Goal</th>
                <th>Left</th>
              </tr>
            </thead>
            <tbody>
              {nutrients.map((nutrient, index) => (
                <tr key={index}>
                  <td>{nutrient.name}</td>
                  <td>{nutrient.amount}</td>
                  <td>{nutrient.goal}</td>
                  <td>{nutrient.left}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Line Chart for Nutrient Intake */}
      <div className="card-container">
        <div className="chart-card">
          <h2 className="title">Nutrient Intake Over the Week</h2>
          <div className="chart-container">
            <Line data={dataLine} options={options} />
          </div>
        </div>
      </div>

      {/* Bar Chart for Calorie Intake */}
      <div className="card-container">
        <div className="chart-card">
          <h2 className="title">Calorie Intake Over the Week</h2>
          <div className="chart-container">
            <Bar data={dataBar} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieTracker;
