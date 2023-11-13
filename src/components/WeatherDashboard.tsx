"use client";
import DashboardHeader from "./DashboardHeader";
import DashboardDaysList from "./DashboardDaysList";
import DashboardWeatherData from "./DashboardWeatherData";
import { useEffect, useState } from "react";
import { getWeatherFromSearch } from "../api";
import { TCitiesList } from "../types";

const WeatherDashboard = () => {
  const [currentCity, setCurrentCity] = useState<TCitiesList | null>(null);
  const [chosenDay, setChosenDay] = useState<null | string>(
    `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`
  );
  const [currentWeatherData, setCurrentWeatherData] = useState<any>(null);
  const [dailyWeatherData, setDailyWeatherData] = useState<any>(null);

  useEffect(() => {
    if (currentCity) {
      const getWeatherData = async () => {
        const data = await getWeatherFromSearch(
          currentCity.latitude,
          currentCity.longitude
        );

        const today = `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`;

        if (chosenDay === today) {
          setDailyWeatherData(null);
          setCurrentWeatherData({
            currentWeather: data.current,
            currentWeatherUnits: data.current_units,
          });
        } else {
          setCurrentWeatherData(null);
          setDailyWeatherData({
            daily: data.daily,
            dailyUnits: data.daily_units,
          });
        }
      };
      getWeatherData();
    }
  }, [currentCity, chosenDay]);

  return (
    <div className="basis-[560px] ml-auto mr-auto relative z-10">
      <DashboardHeader onSetCurrentCity={(city) => setCurrentCity(city)} />
      <DashboardDaysList
        chosenDay={chosenDay}
        onsetChosenDay={(day) => setChosenDay(day)}
      />
      <DashboardWeatherData
        currentCity={currentCity}
        currentWeatherData={currentWeatherData}
        dailyWeatherData={dailyWeatherData}
        chosenDay={chosenDay}
      />
    </div>
  );
};

export default WeatherDashboard;
