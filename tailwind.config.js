/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "var(--kd-red)",
        "kd-red": "var(--kd-red)",
        "background": "#0e141a",
        "surface-container-lowest": "#090f15",
        "on-background": "#dde3ec",
        "secondary-container": "#39485a",
        "surface": "#0e141a",
        "tertiary": "#91cdff",
        "on-tertiary-container": "#002c46",
        "on-error": "#690005",
        "outline": "#ad8883",
        "surface-container": "#1a2027",
        "on-secondary-fixed-variant": "#39485a",
        "on-surface-variant": "#e6bdb7",
        "surface-bright": "#343a41",
        "surface-container-high": "#252b31",
        "surface-dim": "#0e141a",
        "on-primary": "#ffffff",
        "on-tertiary": "#003350",
        "tertiary-container": "var(--kd-red)",
        "inverse-primary": "#D91315",
        "secondary-fixed": "#d4e4fa",
        "tertiary-fixed": "#cce5ff",
        "tertiary-fixed-dim": "#91cdff",
        "on-tertiary-fixed-variant": "#004b72",
        "on-secondary": "#233143",
        "inverse-on-surface": "#2b3138",
        "on-tertiary-fixed": "#001e31",
        "primary-fixed-dim": "#ffb4aa",
        "surface-tint": "#ffb4aa",
        "inverse-surface": "#dde3ec",
        "surface-variant": "#2f353c",
        "outline-variant": "#5d3f3c",
        "on-primary-fixed-variant": "#930007",
        "error-container": "#93000a",
        "surface-container-low": "#161c22",
        "on-primary-container": "#5c0002",
        "primary": "#ffb4aa",
        "secondary": "#b9c8de",
        "on-error-container": "#ffdad6",
        "on-surface": "#dde3ec",
        "secondary-fixed-dim": "#b9c8de",
        "surface-container-highest": "#2f353c",
        "on-secondary-container": "#a7b6cc",
        "primary-fixed": "#ffdad5",
        "error": "#ffb4ab",
        "on-secondary-fixed": "#0d1c2d",
        "on-primary-fixed": "#410001"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        kenburns: 'kenburns 5.5s ease-out forwards'
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        gutter: "1.5rem",
        "space-sm": "0.5rem",
        "space-xs": "0.25rem",
        "space-xl": "2.5rem",
        "gutter-mobile": "0.75rem",
        "margin-mobile": "1rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
        margin: "2rem"
      },
      fontFamily: {
        "headline-lg": ["Space Grotesk"],
        "label-sm": ["JetBrains Mono"],
        "headline-md": ["Space Grotesk"],
        "body-sm": ["Inter"],
        "label-md": ["JetBrains Mono"],
        "headline-xl-mobile": ["Space Grotesk"],
        "label-lg": ["JetBrains Mono"],
        "headline-xl": ["Space Grotesk"],
        "body-lg": ["Inter"],
        "display-lg": ["Space Grotesk"],
        "headline-sm": ["Space Grotesk"],
        "body-md": ["Inter"],
        "display-lg-mobile": ["Space Grotesk"]
      },
      fontSize: {
        "headline-lg": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "600" }],
        "headline-md": ["20px", { lineHeight: "28px", letterSpacing: "0", fontWeight: "500" }],
        "body-sm": ["12px", { lineHeight: "18px", letterSpacing: "0.01em", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],
        "headline-xl-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
        "headline-xl": ["32px", { lineHeight: "40px", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-sm": ["16px", { lineHeight: "24px", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-md": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "400" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }]
      }
    },
  },
  plugins: [],
}
