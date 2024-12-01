import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, Route from react-router-dom
import Header from "../components/Header/Header"; // Assuming you have a Header component
import Sidebar from "../components/Sidebar/Sidebar"; // Assuming you have a Sidebar component
import Home from "../pages/HomePage/HomePage"; // Home page component
import MealDetails from "../pages/MealDetailsPage/MealDetailsPage"; // Meal details page
import Category from "../pages/CategoryPage/CategoryPage"; // Category page
import CalorieTracker from "./pages/CalorieTracker"; // CalorieTracker page
import ProfilePage from "./pages/ProfilePage"; // Import the ProfilePage component

function App() {
  return (
    <BrowserRouter>
      {/* Add the Header and Sidebar here */}
      <Header />
      <Sidebar />

      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="/calorie-tracker" element={<CalorieTracker />} />
        <Route path="/profile/*" element={<ProfilePage />} /> {/* ProfilePage route with nested routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
