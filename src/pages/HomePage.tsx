import { useAuth0 } from "@auth0/auth0-react";

export const HomePage = () => {
  const { user, logout } = useAuth0();

  return <div className="mb-5">Home Page</div>;
};

export default HomePage;
