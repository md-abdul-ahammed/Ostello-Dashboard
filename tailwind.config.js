module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    customForms: (theme) => ({
      default: {
        checkbox: {
          icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>',
        },
      },
    }),
    extends: {
      fontFamily: {
        dm: ["'DM Sans', sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
