export const Fonts = {
    BodySmall: {
        weight: 400,
        size: 14
    },
    Body: {
        weight: 400,
        size: 16
    },
    BodyLarge: {
        weight: 500,
        size: 24
    },
    TitleSmall: {
        weight: 600,
        size: 24
    },
    Title: {
        weight: 600,
        size: 32
    },
    TitleLarge: {
        weight: 600,
        size: 40
    }
} as const

export type fontsKeyOfType = keyof typeof Fonts