const i18n = {
    es: {
        "app.test": "hola"
    },
    en: {
        "app.test": "hola"
    }
}

export default {
    t: (label: string): string => {
     //@ts-ignore
     return i18n?.es?.[label] ?? label
    }
}