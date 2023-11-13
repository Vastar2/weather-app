import { FC } from "react";
import { TCitiesList } from "../types";
import WeatherIcon from "./WeatherIcon";

interface DashboardWeatherDataProps {
  currentCity: TCitiesList | null;
  currentWeatherData: any;
  dailyWeatherData: any;
  chosenDay: string | null;
}

const DashboardWeatherData: FC<DashboardWeatherDataProps> = ({
  currentCity,
  currentWeatherData,
  dailyWeatherData,
  chosenDay,
}) => {
  return (
    <div className="w-full p-4 background-main h-40">
      {currentCity ? (
        <>
          {currentWeatherData && (
            <>
              <div className="flex gap-2 items-center mb-2">
                <p className="text-xl font-bold">{currentCity.name}</p>
                <WeatherIcon
                  currentWeatherData={currentWeatherData}
                  dailyWeatherData={dailyWeatherData}
                  chosenDay={chosenDay}
                />
              </div>
              <p>
                Temperature: {currentWeatherData.currentWeather.temperature_2m}
                {currentWeatherData.currentWeatherUnits.temperature_2m}
              </p>
              <p>
                Humidity:{" "}
                {currentWeatherData.currentWeather.relative_humidity_2m}
                {currentWeatherData.currentWeatherUnits.relative_humidity_2m}
              </p>
              <p>
                Wind speed: {currentWeatherData.currentWeather.wind_speed_10m}
                {currentWeatherData.currentWeatherUnits.wind_speed_10m}
              </p>
            </>
          )}
          {dailyWeatherData && (
            <>
              <div className="flex gap-2 items-center mb-2  ">
                <p className="text-xl font-bold">{currentCity.name}</p>
                <div className="bg-white w-8 h-8 rounded-custom flex justify-center items-center">
                  <WeatherIcon
                    currentWeatherData={currentWeatherData}
                    dailyWeatherData={dailyWeatherData}
                    chosenDay={chosenDay}
                  />
                </div>
              </div>
              <p>
                Max temperature:{" "}
                {
                  dailyWeatherData.daily.temperature_2m_max[
                    dailyWeatherData.daily.time.indexOf(chosenDay)
                  ]
                }
                {dailyWeatherData.dailyUnits.temperature_2m_max}
              </p>
              <p>
                Min temperature:{" "}
                {
                  dailyWeatherData.daily.temperature_2m_min[
                    dailyWeatherData.daily.time.indexOf(chosenDay)
                  ]
                }
                {dailyWeatherData.dailyUnits.temperature_2m_min}
              </p>
            </>
          )}
        </>
      ) : (
        <p className="text-center mt-14">You have to chose city</p>
      )}
    </div>
  );
};

export default DashboardWeatherData;
