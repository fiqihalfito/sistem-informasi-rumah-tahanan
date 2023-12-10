import "dotenv/config";
import { client, db } from "@/db/connect";
import { penahanan, tahanan } from "@/db/schema";

const tahanans = [
    {
        // id: 80,
        nama: "Sophie Turner",
        tempatLahir: "Surabaya",
        tanggalLahir: "1992-10-15",
        pekerjaan: "Interior Designer",
        agama: "Hindu",
        alamat: "Jl. Contoh No. 222",
        jenisKelamin: "Perempuan",
        image: "https://example.com/sophieturner.jpg",
    },
    {
        // id: 81,
        nama: "Isaac Martinez",
        tempatLahir: "Yogyakarta",
        tanggalLahir: "1985-06-28",
        pekerjaan: "Software Developer",
        agama: "Protestan",
        alamat: "Jl. Contoh No. 333",
        jenisKelamin: "Laki-laki",
        image: "https://example.com/isaacmartinez.jpg",
    },
    {
        // id: 82,
        nama: "Aria Kim",
        tempatLahir: "Bandung",
        tanggalLahir: "1996-03-10",
        pekerjaan: "Photographer",
        agama: "Buddha",
        alamat: "Jl. Contoh No. 444",
        jenisKelamin: "Perempuan",
        image: "https://example.com/ariakim.jpg",
    },
    {
        // id: 83,
        nama: "Logan Davis",
        tempatLahir: "Medan",
        tanggalLahir: "1989-12-20",
        pekerjaan: "Marketing Specialist",
        agama: "Islam",
        alamat: "Jl. Contoh No. 555",
        jenisKelamin: "Laki-laki",
        image: "https://example.com/logandavis.jpg",
    },
    {
        // id: 84,
        nama: "Emma Lee",
        tempatLahir: "Jakarta",
        tanggalLahir: "1993-09-05",
        pekerjaan: "Graphic Artist",
        agama: "Katolik",
        alamat: "Jl. Contoh No. 666",
        jenisKelamin: "Perempuan",
        image: "https://example.com/emmalee.jpg",
    },
    {
        // id: 85,
        nama: "Nathan Hernandez",
        tempatLahir: "Semarang",
        tanggalLahir: "1987-05-18",
        pekerjaan: "Financial Planner",
        agama: "Sikh",
        alamat: "Jl. Contoh No. 777",
        jenisKelamin: "Laki-laki",
        image: "https://example.com/nathanhernandez.jpg",
    },
];

const penahanans = [
    {
        // id: 20,
        // idTahanan: 80,
        nomorSuratPenahanan: "6/VII/2023/ABC",
        tanggalMasuk: "2023-08-10",
        jamMasuk: "14:15:00",
        nomorSuratKeluar: "5432-z/VIII/2023/XYZ",
        tanggalKeluar: "2023-10-05",
        jamKeluar: "11:30:00",
        pasal: "Pasal 129 ayat 1 Jo Pasal 142 ayat 2, Pasal 124 ayat 4 Jo Pasal 149 UU RI No. 60 thn 2018 ttg Pemerkosaan",
        keterangan: "Narkoba",
    },
    {
        // id: 21,
        // idTahanan: 81,
        nomorSuratPenahanan: "7/VIII/2023/ABC",
        tanggalMasuk: "2023-09-05",
        jamMasuk: "11:30:00",
        nomorSuratKeluar: "7654-a/IX/2023/XYZ",
        tanggalKeluar: "2023-11-30",
        jamKeluar: "09:15:00",
        pasal: "Pasal 130 ayat 2, Pasal 119 ayat 3 Jo Pasal 138 UU RI No. 37 thn 2017 ttg Penculikan",
        keterangan: "Krimum",
    },
    {
        // id: 22,
        // idTahanan: 82,
        nomorSuratPenahanan: "8/IX/2023/ABC",
        tanggalMasuk: "2023-10-20",
        jamMasuk: "13:00:00",
        nomorSuratKeluar: "9876-b/X/2023/XYZ",
        tanggalKeluar: "2023-12-15",
        jamKeluar: "10:45:00",
        pasal: "Pasal 131 ayat 1 Jo Pasal 144 ayat 2, Pasal 121 ayat 4 Jo Pasal 146 UU RI No. 49 thn 2016 ttg Pemalsuan Dokumen",
        keterangan: "PPNS",
    },
    {
        // id: 23,
        // idTahanan: 83,
        nomorSuratPenahanan: "9/X/2023/ABC",
        tanggalMasuk: "2023-11-15",
        jamMasuk: "10:45:00",
        nomorSuratKeluar: "8765-c/XI/2023/XYZ",
        tanggalKeluar: "2023-12-31",
        jamKeluar: "15:30:00",
        pasal: "Pasal 132 ayat 2, Pasal 113 ayat 3 Jo Pasal 126 UU RI No. 32 thn 2015 ttg Kejahatan Terhadap Anak",
        keterangan: "Krimsus",
    },
    {
        // id: 24,
        // idTahanan: 84,
        nomorSuratPenahanan: "10/XII/2023/ABC",
        tanggalMasuk: "2023-12-01",
        jamMasuk: "09:00:00",
        nomorSuratKeluar: "7654-d/I/2024/XYZ",
        tanggalKeluar: "2023-12-20",
        jamKeluar: "14:00:00",
        pasal: "Pasal 133 ayat 1 Jo Pasal 114 ayat 2, Pasal 110 ayat 4 Jo Pasal 127 UU RI No. 25 thn 2014 ttg Tindak Pidana Kekerasan Dalam Rumah Tangga",
        keterangan: "Jambi",
    },
    {
        // id: 25,
        // idTahanan: 85,
        nomorSuratPenahanan: "11/I/2024/ABC",
        tanggalMasuk: "2024-01-10",
        jamMasuk: "08:15:00",
        nomorSuratKeluar: "5432-e/II/2024/XYZ",
        tanggalKeluar: "2024-02-28",
        jamKeluar: "12:45:00",
        pasal: "Pasal 134 ayat 2, Pasal 115 ayat 3 Jo Pasal 128 UU RI No. 20 thn 2013 ttg Korupsi",
        keterangan: "Narkoba",
    },
];

async function seed() {
    const newTahanans = await db
        .insert(tahanan)
        .values(tahanans)
        .returning({ idTahanan: tahanan.id });

    const penahanansWithIdTahanan = penahanans.map((item, i) => {
        const newItem = {
            ...item,
            idTahanan: newTahanans[i].idTahanan,
        };

        return newItem;
    });

    await db.insert(penahanan).values(penahanansWithIdTahanan);
}

(async () => {
    await seed();

    await client.end();
})();
