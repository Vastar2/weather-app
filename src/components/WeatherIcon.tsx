import { getWeatherIcons } from "../utils";
import { IoMdSunny } from "react-icons/io";
import {
  BsFillCloudRainFill,
  BsFillCloudFill,
  BsFillCloudLightningRainFill,
  BsFillCloudFogFill,
} from "react-icons/bs";
import { FaRegSnowflake } from "react-icons/fa";
import { FC } from "react";

interface WeatherIconProps {
  currentWeatherData: any;
  dailyWeatherData: any;
  chosenDay: string | null;
}

const WeatherIcon: FC<WeatherIconProps> = ({
  currentWeatherData,
  dailyWeatherData,
  chosenDay,
}) => {
  return (
    <div className="bg-white w-8 h-8 rounded-custom flex justify-center items-center">
      {getWeatherIcons(
        currentWeatherData?.currentWeather?.weather_code ||
          dailyWeatherData?.daily?.weather_code[
            dailyWeatherData?.daily.time.indexOf(chosenDay)
          ]
      ) === "Sun" && <IoMdSunny className="text-color-accent text-xl" />}
      {getWeatherIcons(
        currentWeatherData?.currentWeather?.weather_code ||
          dailyWeatherData?.daily?.weather_code[
            dailyWeatherData?.daily.time.indexOf(chosenDay)
          ]
      ) === "Clouds" && (
        <BsFillCloudFill className="text-color-accent text-xl" />
      )}
      {getWeatherIcons(
        currentWeatherData?.currentWeather?.weather_code ||
          dailyWeatherData?.daily?.weather_code[
            dailyWeatherData?.daily.time.indexOf(chosenDay)
          ]
      ) === "Fog" && (
        <BsFillCloudFogFill className="text-color-accent text-xl" />
      )}
      {getWeatherIcons(
        currentWeatherData?.currentWeather?.weather_code ||
          dailyWeatherData?.daily?.weather_code[
            dailyWeatherData?.daily.time.indexOf(chosenDay)
          ]
      ) === "Rain" && (
        <BsFillCloudRainFill className="text-color-accent text-xl" />
      )}
      {getWeatherIcons(
        currentWeatherData?.currentWeather?.weather_code ||
          dailyWeatherData?.daily?.weather_code[
            dailyWeatherData?.daily.time.indexOf(chosenDay)
          ]
      ) === "Snow" && <FaRegSnowflake className="text-color-accent text-xl" />}
      {getWeatherIcons(
        currentWeatherData?.currentWeather?.weather_code ||
          dailyWeatherData?.daily?.weather_code[
            dailyWeatherData?.daily.time.indexOf(chosenDay)
          ]
      ) === "Thunder" && (
        <BsFillCloudLightningRainFill className="text-color-accent text-xl" />
      )}
    </div>
  );
};

export default WeatherIcon;
