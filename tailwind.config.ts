import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                text: ["var(--font-inter)", "Open Sans", ...defaultTheme.fontFamily.sans]
            },
            animation: {
                enter: "fade-in 200ms ease-out, scale-up 200ms ease-out",
                leave: "fade-out 150ms ease-in forwards, scale-down 150ms ease-in forwards",
                fade: "fade-in 200ms cubic-bezier(.41,.73,.51,1.02)",
                "slide-in": "slide-in 400ms cubic-bezier(.41,.73,.51,1.02)"
            },
            keyframes: {
                "fade-out": {
                    "0%": {
                        opacity: "1"
                    },
                    "100%": {
                        opacity: "0"
                    }
                },
                "scale-down": {
                    "0%": {
                        transform: "scale(1)"
                    },
                    "100%": {
                        transform: "scale(0.9)"
                    }
                },
                "scale-up": {
                    "0%": {
                        transform: "scale(0.9)"
                    },
                    "100%": {
                        transform: "scale(1)"
                    }
                },
                "fade-in": {
                    "0%": {
                        opacity: "0"
                    },
                    "100%": {
                        opacity: "1"
                    }
                },
                "slide-in": {
                    "0%": {
                        transform: "translateY(1rem)"
                    },
                    "100%": {
                        transform: "translateY(0)"
                    }
                }
            },
            transitionDuration: {
                DEFAULT: "100ms",
                fast: "650ms",
                medium: "800ms",
                slow: "950ms"
            }
        }
    }
} satisfies Config;
