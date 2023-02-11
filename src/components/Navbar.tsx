import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Navbar() {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <div>
      <div>
        <h1>Weather App</h1>
        <Link to="/app">Home</Link>
        <Link to="/app/weather">Weather</Link>
      </div>
      {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
    </div>
  );
}

export default Navbar;
