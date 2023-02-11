import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  const links = [
    {
      link: "/app",
      label: "Home",
    },
  ];

  return (
    <div>
      <Navbar links={links} />
      <Routes>
        <Route path="/app/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/app" element={<HomePage />} />
          <Route path="/app/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
