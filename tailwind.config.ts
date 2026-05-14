import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Official brand colors from Throneway brand guidelines
        void: "#1F1F22",          // No Raisin Black — official bg
        obsidian: "#2A2A2E",      // slightly lighter surface
        charcoal: "#323236",      // elevated surface, cards
        "purple-deep": "#2D0148", // darkest purple
        "purple-rich": "#470170", // Indigo — official primary purple
        "purple-vivid": "#B537F2",// Electric Purple — vivid accent
        "maya-blue": "#67C8FC",   // Maya Blue — brand accent
        "iris": "#5753C2",        // Iris — secondary purple
        gold: "#C4973A",          // warm gold
        "gold-light": "#DEB96A",  // highlight gold
        cream: "#F5F0E8",         // off-white body text
        "white-soft": "#FAFAF8",  // max contrast headlines
        muted: "#8A8A9A",         // secondary text
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "Georgia", "serif"],
        lora: ["Lora", "Georgia", "serif"],
        instrument: ["Instrument Sans", "system-ui", "sans-serif"],
        nunito: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 12px rgba(181,55,242,0.5))" },
          "50%": {
            filter:
              "drop-shadow(0 0 28px rgba(181,55,242,0.9)) drop-shadow(0 0 56px rgba(71,1,112,0.4))",
          },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
