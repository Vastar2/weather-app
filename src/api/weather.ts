export const getWeatherFromSearch = async (lat: number, lon: number) => {
  try {
    const data = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=GMT`
    );
    const parsedData = await data.json();
    return parsedData;
  } catch (e) {
    console.log(e);
  }
};
