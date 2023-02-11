import { Box, Button, SimpleGrid, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import CardComponent from "../components/Card";
import { capitalizeFirstLetter } from "../utils/capitatilzeFirsLetter";
import { useMediaQuery } from "@mantine/hooks";

export const WeatherPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { weather, main, name, sys } = location.state;
  const isMobile = useMediaQuery("(max-width: 600px)");

  const date = Date.now();
  const temperatue = main.temp;
  const description = capitalizeFirstLetter(weather[0].description);
  const weatherMain = capitalizeFirstLetter(weather[0].main);
  const pressure = main.pressure;
  const humidity = main.humidity;
  const country = sys.country;

  const goBack = () => {
    navigate(-1);
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
    >
      <Text size="xl" weight={700} mb="xl">
        {name}, {country}
      </Text>
      <SimpleGrid
        w={"100%"}
        cols={6}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 755, cols: 2, spacing: "sm" },
          { maxWidth: 600, cols: isMobile ? 2 : 1, spacing: "sm" },
        ]}
      >
        <CardComponent title={"Date"} isDate={true} date={date} />
        <CardComponent title={"Temp(F)"} content={temperatue} />
        {!isMobile && (
          <>
            <CardComponent title={"Description"} content={description} />
            <CardComponent title={"Main"} content={weatherMain} />
            <CardComponent title={"Pressure"} content={pressure} />
            <CardComponent title={"Humidity"} content={humidity} />
          </>
        )}
      </SimpleGrid>
      <Button
        onClick={goBack}
        mt="lg"
        sx={() => ({
          alignSelf: "flex-end",
        })}
      >
        Back
      </Button>
    </Box>
  );
};

export default WeatherPage;
