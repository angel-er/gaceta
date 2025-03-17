import styled from "styled-components";

// Estilos con styled-components
export const WeatherWidget = styled.div`
  background: linear-gradient(135deg, rgb(180, 192, 233), rgb(69, 94, 195));
  color: rgb(255, 255, 255);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const Location = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

export const HeaderContainer = styled.div`
  /* display: flex;
  justify-content: space-around; */
`;

export const WeatherTemperature = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Temperature = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

export const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const WeatherWind = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.8rem;
  margin-bottom: 1em;
`;

export const WeatherDataMain = styled.p`
  width: 100%;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

export const Loading = styled.p`
  font-size: 1rem;
`;
export const WeekContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const DayContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  /* width: 100%; */
`;
export const Day = styled.div`
  text-align: center;
`;

export const DateText = styled.p`
  font-size: 0.7rem;
`;
export const DayTemperature = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
`;
