/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,tsx}"], // scan all app files
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("nativewind/preset")], // ✅ add NativeWind preset
};
