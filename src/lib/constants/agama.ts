export const agama = [
    "Islam",
    "Katolik",
    "Protestan",
    "Hindu",
    "Buddha",
    "Yahudi",
    "Sikh",
];

export const EnumAgama = [...agama] as unknown as readonly [
    string,
    ...string[]
];
