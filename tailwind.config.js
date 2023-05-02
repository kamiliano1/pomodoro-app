/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      F87070: "hsl(0, 91%, 71%)",
      "70F3F8": "hsl(182, 91%, 71%)",
      D881F8: "hsl(284, 89%, 74%)",
      D7E0FF: "hsl(227, 100%, 92%)",
      "1E213F": "hsl(235, 35%, 18%)",
      FFFFFF: "hsl(0, 0%, 100%)",
      EFF1FA: "hsl(229, 52%, 96%)",
      161932: "hsl(234, 39%, 14%)",
      white: "hsl(0, 100%, 100%)",
    },
    extend: {
      fontFamily: {
        kumbhSans: [`var(--font-kumbh-sans)`],
        robotoSlab: ["var(--font-roboto-slab)"],
        spaceMono: ["var(--font-space-mono)"],
      },

      fontSize: {
        "900-desktop": [
          "6.25rem",
          {
            lineHeight: "7.5rem",
            letterSpacing: "-0.3125rem",
            fontWeight: "700",
          },
        ],
        "900-desktop-kumbh-sans": [
          "6.25rem",
          {
            lineHeight: "7.5rem",
            letterSpacing: "-0.3125rem",
            fontWeight: "700",
          },
        ],
        "900-desktop-roboto-slab": [
          "6.25rem",
          {
            lineHeight: "8.1875rem",
            fontWeight: "700",
          },
        ],
        "900-desktop-space-mono": [
          "6.25rem",
          {
            lineHeight: "9.25rem",
            letterSpacing: "-0.625rem",
            fontWeight: "400",
          },
        ],
        "900-mobile": [
          "5rem",
          {
            lineHeight: "6.1875rem",
            letterSpacing: "-0.25rem",
            // letterSpacing: "-10px",
            fontWeight: "400",
          },
        ],
        "900-mobile-kumbh-sans": [
          "5rem",
          {
            lineHeight: "6.1875rem",
            letterSpacing: "-0.25rem",
            // letterSpacing: "-10px",
            fontWeight: "700",
          },
        ],
        "900-mobile-roboto-slab": [
          "5rem",
          {
            lineHeight: "6.5625rem",
            fontWeight: "700",
          },
        ],
        "900-mobile-space-mono": [
          "5rem",
          {
            lineHeight: "7.375rem",
            letterSpacing: "-0.625rem",
            fontWeight: "400",
          },
        ],
        "800-desktop": [
          "1.75rem",
          {
            lineHeight: "2.125rem",
            // letterSpacing: "-0.25rem",
            fontWeight: "700",
          },
        ],
        "800-mobile": [
          "1.25rem",
          {
            lineHeight: "1.5625rem",
            // letterSpacing: "-0.25rem",
            fontWeight: "700",
          },
        ],
        "700-desktop": [
          "1rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: ".9375rem",
            fontWeight: "700",
          },
        ],
        "700-mobile": [
          ".875rem",
          {
            lineHeight: "1.0625rem",
            letterSpacing: ".82rem",
            fontWeight: "700",
          },
        ],
        "600-desktop": [
          ".8125rem",
          {
            lineHeight: "1rem",
            letterSpacing: ".3125rem",
            fontWeight: "700",
          },
        ],
        "600-mobile": [
          ".6875rem",
          {
            lineHeight: ".875rem",
            letterSpacing: ".2625rem",
            fontWeight: "700",
          },
        ],
        "500-desktop": [
          ".875rem",
          {
            lineHeight: "1.125rem",
            // letterSpacing: ".3125rem",
            fontWeight: "700",
          },
        ],
        "500-mobile": [
          ".75rem",
          {
            lineHeight: ".9375rem",
            // letterSpacing: ".2625rem",
            fontWeight: "700",
          },
        ],
        400: [
          ".75rem",
          {
            lineHeight: ".875rem",
            // letterSpacing: ".3125rem",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
