import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import { createThemes } from "tw-colors";

const config: Config = {
    darkMode: ["class", "[data-theme='dark']"],
    content: ["./app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
    plugins: [
        createThemes({
            light: {
                white: colors.white,
                black: colors.black,
                slate: colors.slate
            },
            dark: {
                white: colors.black,
                black: colors.white,
                slate: reverseObjectValues(colors.slate)
            }
        })
    ],
    theme: {
        extend: {
            fontFamily: {
                text: ["var(--font-inter)", "Open Sans", ...defaultTheme.fontFamily.sans]
            },
            transitionDuration: {
                DEFAULT: "100ms",
                fast: "650ms",
                medium: "800ms",
                slow: "950ms"
            },
            animation: {
                enter: "fade-in 200ms ease-out, scale-up 200ms ease-out",
                leave: "fade-out 150ms ease-in forwards, scale-down 150ms ease-in forwards",
                fade: "fade-in 200ms cubic-bezier(.41,.73,.51,1.02)",
                "slide-in": "slide-in 400ms cubic-bezier(.41,.73,.51,1.02)",
                "fade-in": "fade-in 300ms ease-out",
                "fade-out": "fade-out 300ms ease-in",
                "enter-centered": "fade-in 300ms ease-out, scale-centered 300ms ease-out",
                "leave-centered": "fade-out 200ms ease-in, scale-centered-reverse 200ms ease-in"
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
                },
                "scale-centered": {
                    "0%": {
                        transform: "translate(-50%, -50%) scale(0.95)"
                    },
                    "100%": {
                        transform: "translate(-50%, -50%) scale(1)"
                    }
                },
                "scale-centered-reverse": {
                    "0%": {
                        transform: "translate(-50%, -50%) scale(1)"
                    },
                    "100%": {
                        transform: "translate(-50%, -50%) scale(0.95)"
                    }
                }
            }
        }
    }
};

function reverseObjectValues(inputObject: Record<string, any>): Record<string, any> {
    const reversedValues = Object.values(inputObject).reverse();
    const reversedObject: Record<string, any> = {};

    Object.keys(inputObject).forEach((key, index) => {
        reversedObject[key] = reversedValues[index];
    });

    return reversedObject;
}

export default config;
