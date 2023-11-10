import WeatherDashboard from "../src/components/WeatherDashboard";
import BackgroundVideo from "../src/components/BackgroundVideo";

const Home = () => {
  return (
    <main className="relative w-screen h-screen flex justify-center items-center px-4">
      <WeatherDashboard />
      <BackgroundVideo />
    </main>
  );
};

export default Home;
