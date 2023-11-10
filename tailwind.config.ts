import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "text-main": "rgb(98, 98, 98)",
        "background-top": "rgb(238, 245, 248, 0.8)",
        "background-bottom": "rgb(255, 255, 255, 0.4)",
        "background-container-middle": "rgb(222, 243, 253, 0.6)",
        "background-white-transparent": "rgb(255, 255, 255, 0.6)",
      },
      borderRadius: {
        custom: "8px",
      },
      boxShadow: {
        custom: "0px 4px 60px -10px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
