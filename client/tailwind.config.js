/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "ask-1": "#ebf4fb",
        "ask-2": "#f7f7f8",
      },
      borderColor: {
        "ask-1": "rgb(166, 206, 237)",
      },
      textColor: {
        "a-color": "#0a95ff",
      },
      maxWidth: {
        "ask-page": "1264px",
      },
    },
  },
  plugins: [],
};
