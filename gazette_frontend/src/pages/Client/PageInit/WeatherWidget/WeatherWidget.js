import axios from "axios";
import {
  DateText,
  Day,
  DayContainer,
  DayTemperature,
  Description,
  HeaderContainer,
  Loading,
  Location,
  Temperature,
  WeatherDataMain,
  //   TemperatureContainer,
  WeatherIcon,
  WeatherTemperature,
  WeatherWidget,
  WeatherWind,
  WeekContainer,
} from "./WeatherWidget.styles";
import { useState, useEffect } from "react";

const Weather = () => {
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "572edb32d7e42bf8e5646bb59980c566"; // Reemplaza con tu API Key de OpenWeatherMap
  const CITY = "Comarapa, BO"; // Ciudad y país (puedes cambiarlo)

  useEffect(() => {
    console.log("WEATHER MAP");
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        console.log("RESPONSE CLIMA: ", response);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.log("ERROR CLIMA: ", err);
        setError("Error al cargar los datos del clima.");
        setLoading(false);
      }
    };
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setForecastData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los datos del pronóstico.");
        setLoading(false);
      }
    };

    fetchForecast();
    fetchWeather();
  }, [API_KEY, CITY]);

  // Agrupar los datos por día
  const groupForecastByDay = (data) => {
    const grouped = {};
    data?.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0]; // Obtener la fecha (YYYY-MM-DD)
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });

    console.log(grouped);
    return grouped;
  };

  if (loading) {
    return <Loading>Cargando el clima...</Loading>;
  }

  if (error) {
    return <Loading>{error}</Loading>;
  }

  const groupedForecast = groupForecastByDay(forecastData);

  return (
    <div>
      <WeatherWidget>
        <Location>
          {weatherData?.name}, {weatherData?.sys.country}
        </Location>
        <HeaderContainer>
          <WeatherTemperature>
            <WeatherIcon
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
            <Temperature>{Math.round(weatherData.main.temp)}°</Temperature>
          </WeatherTemperature>
          <WeatherWind>
            <WeatherDataMain>{weatherData.main.feels_like}º</WeatherDataMain>
            <WeatherDataMain>{weatherData.wind.speed}km/h</WeatherDataMain>
          </WeatherWind>
          <WeatherWind>
            <WeatherDataMain>{weatherData.main.pressure}hPa</WeatherDataMain>
            <WeatherDataMain>{weatherData.main.humidity}%</WeatherDataMain>
          </WeatherWind>
        </HeaderContainer>
        {/* <Description>{weatherData.weather[0].description}</Description> */}
        <WeekContainer>
          {Object.keys(groupedForecast).map((date) => {
            const dayData = groupedForecast[date];
            const maxTemp = Math.round(
              Math.max(...dayData.map((item) => item.main.temp_max))
            );
            const minTemp = Math.round(
              Math.min(...dayData.map((item) => item.main.temp_min))
            );
            const weather = dayData[0].weather[0]; // Tomamos el primer ícono del día

            return (
              <DayContainer key={date}>
                <Day>
                  <DateText>
                    {new Date(date).toLocaleDateString("es-BO", {
                      weekday: "long",
                      day: "numeric",
                      /*month: "long",*/
                    })}
                  </DateText>
                </Day>
                <Day>
                  <DayTemperature>
                    {maxTemp}° / {minTemp}°C
                  </DayTemperature>
                </Day>
                <Day>
                  <WeatherIcon
                    src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                    style={{ width: "40px", height: "40px" }}
                  />
                  {/* <Description>{weather.description}</Description> */}
                </Day>
                <DateText>{dayData[0].main.humidity}%</DateText>
                <DateText>{dayData[0].wind.speed}km/h</DateText>
              </DayContainer>
            );
          })}
        </WeekContainer>
        <a
          href="https://eltiempoen.com/bolivia/santa-cruz/mairana"
          target="_blank"
        >
          El tiempo en Comarapa
        </a>
      </WeatherWidget>
    </div>
  );
};

export default Weather;
