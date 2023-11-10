import DashboardHeader from "./DashboardHeader";
import DashboardDaysList from "./DashboardDaysList";
import DashboardWeatherData from "./DashboardWeatherData";

const WeatherDashboard = () => {
  return (
    <div className="basis-[560px] ml-auto mr-auto relative z-10">
      <DashboardHeader />
      <DashboardDaysList />
      <DashboardWeatherData />
    </div>
  );
};

export default WeatherDashboard;
