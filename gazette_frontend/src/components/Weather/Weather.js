import { useState, useEffect } from "react";
import axios from "axios";
import {
  DateText,
  Day,
  DayContainer,
  DayTemperature,
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
} from "./Weather.styles";

const Weather = () => {
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_KEY_WEATHER_WIDGET;
  const CITY = process.env.REACT_APP_CITY_WEATHER_WIDGET;
  const API_WEATHER_DATA = process.env.REACT_APP_API_WEATHER_DATA;
  const API_WEATHER_IMG = process.env.REACT_APP_API_WEATHER_IMG;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `${API_WEATHER_DATA}/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los datos del clima.");
        setLoading(false);
      }
    };
    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `${API_WEATHER_DATA}/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
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
              src={`${API_WEATHER_IMG}/${weatherData.weather[0].icon}@2x.png`}
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
          <WeatherWind></WeatherWind>
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
                    src={`${API_WEATHER_IMG}/${weather.icon}@2x.png`}
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
          href="https://eltiempoen.com/bolivia/santa-cruz/comarapa"
          target="_blank"
        >
          El tiempo en Comarapa
        </a>
      </WeatherWidget>
    </div>
  );
};

export default Weather;
