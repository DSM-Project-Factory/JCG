export const Colors = {
    P100: "#CEFFC9",
    P200: "#B8FFB2",
    P300: "#93F88A",
    P400: "#69F95C",
    P500: "#3BEA2C",
    P600: "#27BB1A",
    P700: "#248C1B",
    P800: "#185B12",
    P900: "#153712",
    G100: "#FFFFFF",
    G200: "#A9B2B6",
    G300: "#7F8A8F",
    G400: "#4F5558",
    G500: "#383D40",
    G600: "#25282A",
    G700: "#27292C",
    G800: "#1C1E20",
    G900: "#000000"
} as const

export type colorsKeyOfType = keyof typeof Colors