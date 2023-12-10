export const jenisKelamin = ["Laki-laki", "Perempuan"];

export const EnumJenisKelamin = jenisKelamin as unknown as readonly [
    string,
    ...string[]
];
