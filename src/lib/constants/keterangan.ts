export const keterangan = ["Krimsus", "Krimum", "Narkoba", "PPNS", "Jambi"];

export const EnumKeterangan = [...keterangan] as unknown as readonly [
    string,
    ...string[]
];
