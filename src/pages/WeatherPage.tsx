import { useAuth0 } from "@auth0/auth0-react";

export const WeatherPage = () => {
  const { user, logout } = useAuth0();

  return <div className="mb-5">Weather Page</div>;
};

export default WeatherPage;
