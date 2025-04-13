export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4F8EF7", // Custom primary color
          secondary: "#FBBF24", // Custom secondary color
        },
        scale: {
          105: '1.05',
        },
        transitionProperty: {
          'all': 'all 0.3s ease-in-out',
        },
      },
    },
    plugins: [],
  };
  