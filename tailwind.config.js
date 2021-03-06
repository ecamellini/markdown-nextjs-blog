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
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue,
        green: colors.emerald,
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        purple: colors.violet,
        indigo: colors.indigo,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: "none",
              borderBottom: "2px solid black",
              borderColor: theme("colors.blue.500"),
              paddingBottom: "1px",
              "&:hover": {
                borderColor: theme("colors.blue.300"),
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
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              textDecoration: "none",
              color: theme("colors.gray.200"),
              borderBottom: "2px solid black",
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
