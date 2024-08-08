import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "475px",
        md: "768px",
        lg: "1024px",
      },
    },
    extend: {
      colors: {
        border: "",
        input: "",
        ring: "",
        background: "",
        foreground: "",
        primary: {
          DEFAULT: "",
          foreground: "",
        },
        secondary: {
          DEFAULT: "",
          foreground: "",
        },
        destructive: {
          DEFAULT: "",
          foreground: "",
        },
        accent: {
          DEFAULT: "",
          foreground: "",
        },
        card: {
          DEFAULT: "",
          foreground: "",
        },
      },
      borderRadius: {
        lg: "",
        md: "",
        sm: "",
      },
    },
  },
} satisfies Config;

export default config;
