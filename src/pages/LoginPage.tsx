import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "@mantine/core";

const LoginPage = () => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  return (
    <div>
      <Text fz="sm">Welcome to the weather forecast web application.</Text>
      <Text fz="sm" mb="md">
        Please login with your Github user to use the application and view the
        weather in your city.
      </Text>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    </div>
  );
};

export default LoginPage;
