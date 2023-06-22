/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "ask-1": "#ebf4fb",
        "ask-2": "#f7f7f8",
        "ask-3": "#f8f9f9",
        tag: "rgb(225, 236, 244)",
      },
      borderColor: {
        "ask-1": "rgb(166, 206, 237)",
      },
      textColor: {
        "a-color": "#0a95ff",
        check: "#2f6f44",
      },
      maxWidth: {
        "default-page": "1264px",
        "question-page": "727px",
      },
      flex: {
        "question-side": "0 1 300px",
      },
      gridTemplateColumns: {
        "question-grid": "max-content 1fr",
      },
    },
  },
  plugins: [],
};
