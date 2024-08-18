import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "rgb(73, 187, 189, 30%)",
        primary2: "rgb(91, 91, 91)",
        primary3: "rgb(73, 187, 189, 100%)",
        primary4: "rgb(101, 218, 225, 100%)",
        primary5: "rgb(73, 187, 189, 30%)",
        primary6: "rgb(19, 108, 181)",
        primary7: "rgb(47, 50, 125)",
        primary8: "rgb(91, 114, 238)",
        primary9: "rgb(0, 201, 184)",
        primary10: "rgb(41, 185, 231)",
        primary11: "rgb(35, 189, 238, 90%)",
        primary12: "rgb(51, 239, 160)",
        primary13: "rgb(0, 203, 184)",
        primary14: "rgb(35, 189, 238)",
        button1: "rgb(255, 255, 255, 30%)",
        footer: "rgb(37, 38, 65)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
