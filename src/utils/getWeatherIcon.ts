export const getWeatherIcons = (weatherCode: number) => {
  const sun = [0].some((currentItem) => currentItem === weatherCode);
  const clouds = [1, 2, 3].some((currentItem) => currentItem === weatherCode);
  const fog = [45, 48].some((currentItem) => currentItem === weatherCode);
  const rain = [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].some(
    (currentItem) => currentItem === weatherCode
  );
  const snow = [71, 73, 75, 77, 85, 86].some(
    (currentItem) => currentItem === weatherCode
  );
  const thunder = [95, 96, 99].some(
    (currentItem) => currentItem === weatherCode
  );

  if (sun) {
    return "Sun";
  } else if (clouds) {
    return "Clouds";
  } else if (fog) {
    return "Fog";
  } else if (rain) {
    return "Rain";
  } else if (snow) {
    return "Snow";
  } else if (thunder) {
    return "Thunder";
  }
};
