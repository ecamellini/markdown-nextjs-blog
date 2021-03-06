const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        yellow: colors.amber,
        indigo: colors.indigo,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              borderBottom: "2px solid",
              borderColor: theme("colors.indigo.600"),
              paddingBottom: "1px",
              "&:hover": {
                borderColor: theme("colors.indigo.400"),
              },
            },
            p: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
            li: {
              marginTop: "0.2em",
              marginBottom: "0.2em",
            },
            hr: {
              marginTop: "2em",
              marginBottom: "2em",
            },
            h3: {
              fontSize: "1.1em",
              fontWeight: "700",
              borderTopWidth: 2,
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              textDecoration: "none",
              color: theme("colors.gray.200"),
              borderBottom: "2px solid",
              borderColor: theme("colors.yellow.500"),
              paddingBottom: "1px",
              "&:hover": {
                borderColor: theme("colors.yellow.300"),
              },
            },
            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },
            hr: {
              borderColor: theme("colors.gray.700"),
            },
            strong: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
