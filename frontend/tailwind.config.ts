import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "425px",
      tablet: "600px",
      laptop: "1024px",
    },
    extend: {
      backgroundImage: {
        textGradient: "radial-gradient(circle, #d8ecf8 0%, #98c0ef 100%)",
        mainGradient: `radial-gradient(circle, rgba(186,207,247,0.02) 0%, rgba(186,207,247,0.00) 100%);`,
        secondaryGradient: `radial-gradient(50% 38.81% at 50% 61.19%, rgba(75, 113, 250, 0.08) 0%, rgba(5, 5, 11, 0) 100%),
                          radial-gradient(50% 36.46% at 50% 36.46%, rgba(75, 113, 250, 0.08) 0%, rgba(5, 5, 11, 0) 100%)`,
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        dividerWeight: "1px",
        disabledOpacity: 0.5,
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "8px",
          medium: "12px",
          large: "14px",
        },
      },
      defaultTheme: "dark",
      themes: {
        dark: {
          layout: {
            borderWidth: {
              small: "1px",
            },
            hoverOpacity: 0.9,
            boxShadow: {
              large:
                "inset 0 0 0 1px rgba(216,236,248,.2), inset 0 0 20px 2px rgba(168,216,245,.2), 0 0 0 0 rgba(0,0,0,.3)",
              medium:
                "inset 0 1px 1px 0 rgba(216,236,248,.2), inset 0 0 48px 0 rgba(168,216,245,.06), 0 16px 32px rgba(0,0,0,.3)",
              small:
                "inset 0 1px 1px 0 rgba(199,211,234,.12), inset 0 24px 48px 0 rgba(199,211,234,.05)",
            },
          },
          colors: {
            background: "#05060f",
            foreground: { primary: "#c7d3ea", secondary: "#d1e4fa" },
            divider: "#bacff71f",
            content1: "#bad6f703",
            content2: "#bad6f70f",
          },
        },
      },
    }),
  ],
};

export default config;
