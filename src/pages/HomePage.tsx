import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Input, Text, TextInput } from "@mantine/core";
import { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { capitalizeFirstLetter } from "../utils/capitatilzeFirsLetter";

export const HomePage = () => {
  const { user } = useAuth0();
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<any>();
  const navigate = useNavigate();
  const apikey = import.meta.env.VITE_API_KEY;

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  const handleClick = async () => {
    try {
      const weatherResponse = await api.get("weather", {
        params: {
          q: search,
          units: "imperial",
          lang: "en",
          appid: apikey,
        },
      });
      navigate("/app/weather", { state: weatherResponse.data });
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  const onEnter = async (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Box
      sx={() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "5px",
      })}
      mb="md"
    >
      <Box mb={"md"}>
        <Text>{user?.nickname}</Text>
        <Text>{`https://github.com/${user?.nickname}`}</Text>
      </Box>
      <TextInput
        sx={() => ({
          width: "30%",
          alignSelf: "center",
        })}
        size="md"
        mb={"md"}
        id="search"
        placeholder="Search"
        onChange={onSearch}
        onKeyDown={onEnter}
      />
      {error && <Text color={"red"}>{capitalizeFirstLetter(error)}</Text>}
      <Button disabled={!search} onClick={() => handleClick()}>
        Display Weather
      </Button>
    </Box>
  );
};

export default HomePage;
