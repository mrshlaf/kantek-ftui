/**
 * KANTEK.JS - Enhanced Version
 * JavaScript untuk website Kantin Teknik FTUI
 * Fitur: Dark mode, Render booth otomatis, Filter menu, Search harga, Filter kategori, dll
 */

document.addEventListener('DOMContentLoaded', function() {
    // ==================== DATA BOOTH (ENHANCED) ====================
    const booths = [
    {
        "nama": "Sate Madura Bang Udi",
        "foto": "photos/booth1.jpg",
        "whatsapp": "6287887722899",
        "menu": [
            { "nama": "Sate Ayam", "harga": 18000, "kalori": 300, "favorit": true, "kategori": "makanan" },
            { "nama": "Sate Ayam + Nasi/Lontong", "harga": 21000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Sate Ayam Full Daging", "harga": 20000, "kalori": 400, "favorit": false, "kategori": "makanan" },
            { "nama": "Sate Ayam Full Daging + Nasi/Lontong", "harga": 23000, "kalori": 700, "favorit": false, "kategori": "makanan" },
            { "nama": "Sate Kambing", "harga": 29000, "kalori": 400, "favorit": true, "kategori": "makanan" },
            { "nama": "Sate Kambing + Nasi/Lontong", "harga": 32000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            // Menambahkan Es Teh Manis dari data awal jika diperlukan, tapi tidak ada di input terakhir untuk booth ini
            { "nama": "Tambahan Kotak", "harga": 1000, "kalori": 0, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Nasi Bakar Mei Nurhayati", // Nama booth ini sama dengan Gado-gado & Nasi Bakar (booth17), menu sedikit berbeda
        "foto": "photos/booth2.jpg",
        "whatsapp": "6281311025189",
        "menu": [
            { "nama": "Gado-gado + Telur", "harga": 17000, "kalori": 450, "favorit": true, "kategori": "makanan" },
            { "nama": "Gado-gado Nasi + Telur", "harga": 18000, "kalori": 700, "favorit": false, "kategori": "makanan" },
            { "nama": "Gado-gado Lontong + Telur", "harga": 18000, "kalori": 600, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Bakar Isi Tuna", "harga": 16000, "kalori": 400, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Bakar Isi Ayam", "harga": 17000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Bakar Isi Cumi", "harga": 18000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            // Menambahkan Es Jeruk dan Kerupuk dari data awal jika diperlukan
            { "nama": "Es Jeruk", "harga": 6000, "kalori": 60, "favorit": false, "kategori": "minuman" }, // Ditambahkan dari data awal
            { "nama": "Kerupuk", "harga": 2000, "kalori": 50, "favorit": false, "kategori": "snack" }      // Ditambahkan dari data awal
        ]
    },
    {
        "nama": "Japanese Food",
        "foto": "photos/booth3.jpg",
        "whatsapp": "6285711382879",
        "menu": [
            { "nama": "Chicken Katsu + Nasi", "harga": 20000, "kalori": 750, "favorit": true, "kategori": "makanan" },
            { "nama": "Chicken Katsu Spicy + Nasi", "harga": 22000, "kalori": 780, "favorit": false, "kategori": "makanan" },
            { "nama": "Chicken Katsu Blackpepper + Nasi", "harga": 22000, "kalori": 775, "favorit": false, "kategori": "makanan" },
            { "nama": "Chicken Teriyaki + Nasi", "harga": 20000, "kalori": 700, "favorit": true, "kategori": "makanan" },
            { "nama": "Chicken Teriyaki Spicy + Nasi", "harga": 22000, "kalori": 725, "favorit": false, "kategori": "makanan" },
            { "nama": "Chicken Teriyaki Blackpepper + Nasi", "harga": 22000, "kalori": 720, "favorit": false, "kategori": "makanan" },
            { "nama": "Ocha", "harga": 4000, "kalori": 0, "favorit": false, "kategori": "minuman" }, // Ditambahkan dari data awal
            { "nama": "Tambahan Bungkus", "harga": 1000, "kalori": 0, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Pecel Ayam Penyet",
        "foto": "photos/booth4.jpg",
        "whatsapp": "6287785864698",
        "menu": [
            { "nama": "Pecel Ayam", "harga": 19000, "kalori": 650, "favorit": true, "kategori": "makanan" },
            { "nama": "Pecel Ayam + Tahu/Tempe", "harga": 22000, "kalori": 750, "favorit": false, "kategori": "makanan" },
            { "nama": "Ayam Penyet + Tahu/Tempe", "harga": 22000, "kalori": 850, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Gorengan Mantul",
        "foto": "photos/booth5.jpg",
        "whatsapp": "6285718861539",
        "menu": [
            { "nama": "Gorengan Komplit (Lontong, Bakwan, Martabak Tahu, Risol Bihun, Risol Mayo, Omelet, Pisang Goreng, Tempe)", "harga": 2000, "kalori": 120, "favorit": true, "kategori": "snack" },
            { "nama": "Gorengan Premium", "harga": 4000, "kalori": 180, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Kantin Mama Icut",
        "foto": "photos/booth6.jpg",
        "whatsapp": "628778330213",
        "menu": [
            { "nama": "Sate Taichan", "harga": 15000, "kalori": 350, "favorit": false, "kategori": "makanan" },
            { "nama": "Donburi Sambal Matah", "harga": 19000, "kalori": 650, "favorit": true, "kategori": "makanan" },
            { "nama": "Sayap Pedas", "harga": 12000, "kalori": 550, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Kantin Nasi Ulam",
        "foto": "photos/booth7.jpg",
        "whatsapp": "6285892230543", // atau bisa juga "62816821329"
        "menu": [
            { "nama": "Ayam Remuk", "harga": 21000, "kalori": 650, "favorit": true, "kategori": "makanan" },
            { "nama": "Ayam Kebet", "harga": 21000, "kalori": 550, "favorit": false, "kategori": "makanan" },
            { "nama": "Ayam Sabet / Ayam Sabuk", "harga": 16000, "kalori": 700, "favorit": true, "kategori": "makanan" }
        ],
        "opsiTambahan": [
            { "nama": "Dibungkus", "tambahanHarga": 1000 }
        ]
    },
    {
        "nama": "Nasi Padang",
        "foto": "photos/booth8.jpg",
        "whatsapp": "6285810289428", // belum ada nomor, bisa ditambah nanti
        "menu": [
            { "nama": "Nasi Padang", "harga": 15000, "kalori": 700, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Gila Keju", "harga": 18000, "kalori": 800, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Gila", "harga": 15000, "kalori": 750, "favorit": true, "kategori": "makanan" }
        ],
        "opsiTambahan": [
            { "nama": "Dibungkus", "tambahanHarga": 1000 }
        ]
    },
    {
        "nama": "Batagor & Siomay Ikan",
        "foto": "photos/booth9.jpg",
        "whatsapp": "6285810289428", // nomor belum ada
        "menu": [
            { "nama": "Batagor / Siomay Ikan", "harga": 10000, "kalori": 300, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Ketoprak Telur Dadar",
        "foto": "photos/booth10.jpg",
        "whatsapp": "6287878566776",
        "menu": [
            { "nama": "Ketoprak", "harga": 13000, "kalori": 550, "favorit": true, "kategori": "makanan" },
            { "nama": "Ketoprak Keju", "harga": 18000, "kalori": 650, "favorit": false, "kategori": "makanan" },
            { "nama": "Ketoprak Telur", "harga": 16000, "kalori": 600, "favorit": false, "kategori": "makanan" },
            { "nama": "Ketoprak Keju + Telur", "harga": 20000, "kalori": 700, "favorit": true, "kategori": "makanan" },
            { "nama": "Kentang Goreng", "harga": 5000, "kalori": 350, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Nasi Uduk Maknyus",
        "foto": "photos/booth11.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Nasi Uduk (Tempe, Orek, Mie)", "harga": 11000, "kalori": 750, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Uduk (Telur, Sayur)", "harga": 13000, "kalori": 600, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Uduk (Kikil, Tempe Orek)", "harga": 14000, "kalori": 800, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Uduk (Ati Ampela, Bihun)", "harga": 15000, "kalori": 850, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Uduk (Ayam Goreng, Kentang Balado)", "harga": 17000, "kalori": 950, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Soto Ayam Lamongan",
        "foto": "photos/booth12.jpg",
        "whatsapp": "6285810289428", // belum ada nomor
        "menu": [
            { "nama": "Soto Ayam + Nasi", "harga": 17000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Ayam Kremes + Nasi", "harga": 22000, "kalori": 800, "favorit": false, "kategori": "makanan" },
            { "nama": "Pecel Lele + Nasi", "harga": 17000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Lele Kremes + Nasi", "harga": 18000, "kalori": 650, "favorit": false, "kategori": "makanan" }
        ],
        "opsiTambahan": [
            { "nama": "Dibungkus", "tambahanHarga": 1000 }
        ]
    },
    {
        "nama": "Bebek Juara",
        "foto": "photos/booth13.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Nasi + Bebek Goreng + Tempe + Timun + Sambal", "harga": 20000, "kalori": 750, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi + Bebek Bakar + Tempe + Timun + Sambal", "harga": 20000, "kalori": 800, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi + Telor + Sambal + Tempe + Timun", "harga": 10000, "kalori": 550, "favorit": false, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Beef Patty Steak",
        "foto": "photos/booth14.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Beef Patty Steak - Barbeque", "harga": 25000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Beef Patty Steak - Mushroom", "harga": 25000, "kalori": 650, "favorit": false, "kategori": "makanan" },
            { "nama": "Beef Patty Steak - Blackpepper", "harga": 25000, "kalori": 600, "favorit": true, "kategori": "makanan" }
        ],
        "opsiTambahan": [
            { "nama": "Tambah Nasi", "tambahanHarga": 5000 }
        ]
    },
    {
        "nama": "Kantin Soto", // Ada booth "Soto Ayam Lamongan" (booth12) dan "Kantin Soto" (booth15)
        "foto": "photos/booth15.jpg",
        "whatsapp": "628551262341",
        "menu": [
            { "nama": "Soto Daging + Nasi", "harga": 19000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Soto Mie + Nasi", "harga": 17000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Soto Babat + Nasi", "harga": 17000, "kalori": 550, "favorit": false, "kategori": "makanan" },
            { "nama": "Soto Campur (Daging + Babat) + Nasi", "harga": 20000, "kalori": 650, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Nasi Campur & Sop Bandeng Presto",
        "foto": "photos/booth16.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Nasi + Tahu + Tempe + Sayur", "harga": 13000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi + Telor + Sayur", "harga": 14000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi + Ikan Cue + Sayur", "harga": 15000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi + Bandeng + Sayur", "harga": 16000, "kalori": 550, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi + Ayam + Sayur", "harga": 17000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi + Sop Kimlo Ayam", "harga": 17000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi + Sop Kimlo + Bandeng Presto", "harga": 21000, "kalori": 600, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Gado-gado & Nasi Bakar", // Nama booth ini sama dengan Nasi Bakar Mei Nurhayati (booth2), menu sedikit berbeda
        "foto": "photos/booth17.jpg",
        "whatsapp": "6281311025189",
        "menu": [
            { "nama": "Gado-gado + Telur", "harga": 17000, "kalori": 450, "favorit": false, "kategori": "makanan" },
            { "nama": "Gado-gado Nasi + Telur", "harga": 18000, "kalori": 550, "favorit": false, "kategori": "makanan" },
            { "nama": "Gado-gado Lontong + Telur", "harga": 18000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Bakar Isi Tumis", "harga": 16000, "kalori": 600, "favorit": false, "kategori": "makanan" }, // Mungkin Tuna? Di booth2 "Nasi Bakar Isi Tuna"
            { "nama": "Nasi Bakar Isi Ayam", "harga": 17000, "kalori": 700, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Bakar Isi Cumi", "harga": 18000, "kalori": 700, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Fried Chicken & Bubur Ayam",
        "foto": "photos/booth18.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Fried Chicken + Saus Sambal", "harga": 15000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Fried Chicken + Sambal Geprek", "harga": 18000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Bubur Ayam + Usus", "harga": 14000, "kalori": 400, "favorit": true, "kategori": "makanan" },
            { "nama": "Bubur Ayam + Ati Ampela", "harga": 14000, "kalori": 450, "favorit": true, "kategori": "makanan" },
            { "nama": "Bubur Ayam + Telor Puyuh", "harga": 15000, "kalori": 450, "favorit": false, "kategori": "makanan" },
            { "nama": "Bubur Ayam", "harga": 12000, "kalori": 350, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Batagor & Siomay Ayam", // Ada "Batagor & Siomay Ikan" (booth9)
        "foto": "photos/booth19.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Batagor / Siomay Ayam", "harga": 10000, "kalori": 300, "favorit": true, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Cream Soup & Macaroni",
        "foto": "photos/booth20.jpg",
        "whatsapp": "081384269033",
        "menu": [
            { "nama": "Makaroni Schotel Ayam", "harga": 20000, "kalori": 400, "favorit": true, "kategori": "makanan" },
            { "nama": "Makaroni Schotel Daging", "harga": 20000, "kalori": 450, "favorit": true, "kategori": "makanan" },
            { "nama": "Lasagna", "harga": 20000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Zuppa Soup", "harga": 17000, "kalori": 250, "favorit": false, "kategori": "makanan" } // Kategori: makanan (sup kental)
        ]
    },
    {
        "nama": "Fu Yung Hai & Tahu Telor",
        "foto": "photos/booth21.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Fu Yung Hai", "harga": 12000, "kalori": 350, "favorit": true, "kategori": "makanan" },
            { "nama": "Fu Yung Hai + Nasi", "harga": 17000, "kalori": 550, "favorit": false, "kategori": "makanan" },
            { "nama": "Tahu Telor + Lontong", "harga": 16000, "kalori": 450, "favorit": true, "kategori": "makanan" },
            { "nama": "Tahu Telor + Nasi", "harga": 16000, "kalori": 550, "favorit": false, "kategori": "makanan" },
            { "nama": "Tahu Telor", "harga": 11000, "kalori": 350, "favorit": true, "kategori": "makanan" },
            { "nama": "Tambahan Bungkus", "harga": 1000, "kalori": 0, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Toko Salad",
        "foto": "photos/booth22.jpg",
        "whatsapp": "089626181633",
        "menu": [
            { "nama": "Puding Pink", "harga": 8000, "kalori": 150, "favorit": false, "kategori": "snack" },
            { "nama": "Salad Buah", "harga": 10000, "kalori": 250, "favorit": true, "kategori": "snack" },
            { "nama": "Salad Sayur", "harga": 10000, "kalori": 100, "favorit": false, "kategori": "snack" },
            { "nama": "Sandwich", "harga": 10000, "kalori": 300, "favorit": true, "kategori": "makanan" },
            { "nama": "Sandwich Daging", "harga": 15000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Buah Potong", "harga": 6000, "kalori": 120, "favorit": true, "kategori": "snack" },
            { "nama": "Jasuke (Small)", "harga": 7000, "kalori": 300, "favorit": true, "kategori": "snack" },
            { "nama": "Jasuke (Large)", "harga": 10000, "kalori": 600, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Roti - Kebab - Dimsum",
        "foto": "photos/booth23.jpg",
        "whatsapp": "089507366643",
        "menu": [
            { "nama": "Kebab", "harga": 15000, "kalori": 300, "favorit": true, "kategori": "makanan" },
            { "nama": "Kebab + Telur", "harga": 19000, "kalori": 350, "favorit": false, "kategori": "makanan" },
            { "nama": "Kebab + Keju", "harga": 19000, "kalori": 350, "favorit": false, "kategori": "makanan" },
            { "nama": "Kebab + Telur + Keju", "harga": 22000, "kalori": 400, "favorit": true, "kategori": "makanan" },
            { "nama": "Roti John", "harga": 10000, "kalori": 350, "favorit": true, "kategori": "makanan" },
            { "nama": "Roti John + Keju", "harga": 22000, "kalori": 400, "favorit": false, "kategori": "makanan" },
            { "nama": "Burger", "harga": 15000, "kalori": 400, "favorit": true, "kategori": "makanan" },
            { "nama": "Burger + Keju", "harga": 18000, "kalori": 450, "favorit": false, "kategori": "makanan" },
            { "nama": "Dimsum", "harga": 16000, "kalori": 150, "favorit": true, "kategori": "snack" },
            { "nama": "Dimsum + Keju", "harga": 18000, "kalori": 200, "favorit": false, "kategori": "snack" },
            { "nama": "Roti Toast", "harga": 18000, "kalori": 200, "favorit": true, "kategori": "snack" },
            { "nama": "Roti Toast + Keju", "harga": 22000, "kalori": 300, "favorit": false, "kategori": "snack" },
            { "nama": "Taco", "harga": 15000, "kalori": 200, "favorit": true, "kategori": "makanan" },
            { "nama": "Taco + Keju", "harga": 20000, "kalori": 250, "favorit": false, "kategori": "makanan" },
            { "nama": "Hotdog", "harga": 18000, "kalori": 200, "favorit": true, "kategori": "makanan" },
            { "nama": "Hotdog + Keju", "harga": 20000, "kalori": 250, "favorit": false, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Pempek Cek Ani",
        "foto": "photos/booth24.jpg",
        "whatsapp": "082311351569",
        "menu": [
            { "nama": "Kapal Selam", "harga": 16000, "kalori": 350, "favorit": true, "kategori": "makanan" },
            { "nama": "Pempek Telor", "harga": 10000, "kalori": 350, "favorit": true, "kategori": "makanan" },
            { "nama": "Pempek Adaan", "harga": 5000, "kalori": 300, "favorit": true, "kategori": "makanan" },
            { "nama": "Tekwan", "harga": 16000, "kalori": 250, "favorit": false, "kategori": "makanan" },
            { "nama": "Lenggang", "harga": 17000, "kalori": 300, "favorit": false, "kategori": "makanan" },
            { "nama": "Pempek Kulit", "harga": 5000, "kalori": 350, "favorit": true, "kategori": "makanan" },
            { "nama": "Pempek Keriting", "harga": 5000, "kalori": 350, "favorit": true, "kategori": "makanan" },
            { "nama": "Lenjer Besar", "harga": 12000, "kalori": 400, "favorit": false, "kategori": "makanan" },
            { "nama": "Lenjer Kecil", "harga": 5000, "kalori": 250, "favorit": false, "kategori": "makanan" },
            { "nama": "Tambahan Bungkus", "harga": 1000, "kalori": 0, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Warung Dekat Kantas",
        "foto": "photos/booth25.jpg",
        "whatsapp": "085788829553",
        "menu": [
            { "nama": "Air Mineral", "harga": 6000, "kalori": 0, "favorit": true, "kategori": "minuman" },
            { "nama": "Soda", "harga": 4500, "kalori": 150, "favorit": false, "kategori": "minuman" },
            { "nama": "Yogurt", "harga": 7000, "kalori": 100, "favorit": true, "kategori": "minuman" },
            { "nama": "Minuman Kemasan", "harga": 6500, "kalori": 120, "favorit": true, "kategori": "minuman" },
            { "nama": "Teh Kemasan", "harga": 6000, "kalori": 90, "favorit": false, "kategori": "minuman" },
            { "nama": "Susu", "harga": 7000, "kalori": 150, "favorit": true, "kategori": "minuman" },
            { "nama": "Kopi Kemasan", "harga": 8500, "kalori": 100, "favorit": true, "kategori": "minuman" },
            { "nama": "Minuman Isotonik", "harga": 6000, "kalori": 80, "favorit": false, "kategori": "minuman" },
            { "nama": "Biskuit", "harga": 4500, "kalori": 200, "favorit": false, "kategori": "snack" },
            { "nama": "Permen", "harga": 4500, "kalori": 50, "favorit": false, "kategori": "snack" },
            { "nama": "Yupi", "harga": 2500, "kalori": 70, "favorit": false, "kategori": "snack" },
            { "nama": "Roti", "harga": 3500, "kalori": 150, "favorit": true, "kategori": "snack" },
            { "nama": "Ciki", "harga": 4500, "kalori": 150, "favorit": true, "kategori": "snack" },
            { "nama": "Waffer", "harga": 6000, "kalori": 200, "favorit": true, "kategori": "snack" },
            { "nama": "Coklat", "harga": 8500, "kalori": 250, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Masakan Sunda",
        "foto": "photos/booth26.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Nasi", "harga": 4000, "kalori": 135, "favorit": true, "kategori": "makanan" },
            { "nama": "Tumisan", "harga": 3000, "kalori": 120, "favorit": false, "kategori": "makanan" }, // Lauk
            { "nama": "Gorengan", "harga": 2000, "kalori": 137, "favorit": true, "kategori": "snack" },
            { "nama": "Tahu", "harga": 3000, "kalori": 35, "favorit": true, "kategori": "makanan" },      // Lauk
            { "nama": "Telor", "harga": 4000, "kalori": 77, "favorit": true, "kategori": "makanan" },     // Lauk
            { "nama": "Telor Dadar", "harga": 6000, "kalori": 93, "favorit": true, "kategori": "makanan" }, // Lauk
            { "nama": "Telor Kecap", "harga": 6000, "kalori": 398, "favorit": false, "kategori": "makanan" },// Lauk
            { "nama": "Telor Santen", "harga": 6000, "kalori": 250, "favorit": false, "kategori": "makanan" },// Lauk
            { "nama": "Ati Ampela", "harga": 8000, "kalori": 145, "favorit": true, "kategori": "makanan" }, // Lauk
            { "nama": "Ikan Tongkol", "harga": 8000, "kalori": 121, "favorit": true, "kategori": "makanan" },// Lauk
            { "nama": "Ikan Mujair", "harga": 15000, "kalori": 107, "favorit": true, "kategori": "makanan" },// Lauk
            { "nama": "Terong", "harga": 3000, "kalori": 148, "favorit": false, "kategori": "makanan" },  // Sayur/Lauk
            { "nama": "Kentang", "harga": 3000, "kalori": 192, "favorit": false, "kategori": "makanan" }, // Sayur/Lauk
            { "nama": "Tempe Orek", "harga": 3000, "kalori": 175, "favorit": true, "kategori": "makanan" },// Lauk
            { "nama": "Pare", "harga": 3000, "kalori": 82, "favorit": false, "kategori": "makanan" }      // Sayur/Lauk
        ]
    },
    {
        "nama": "Warung Aliyanto",
        "foto": "photos/booth27.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Susu Kemasan", "harga": 8500, "kalori": 150, "favorit": true, "kategori": "minuman" },
            { "nama": "Air Mineral", "harga": 4000, "kalori": 0, "favorit": true, "kategori": "minuman" },
            { "nama": "Soda", "harga": 4500, "kalori": 150, "favorit": false, "kategori": "minuman" },
            { "nama": "Teh Kemasan", "harga": 6000, "kalori": 90, "favorit": false, "kategori": "minuman" },
            { "nama": "Kopi Kemasan", "harga": 8500, "kalori": 100, "favorit": true, "kategori": "minuman" },
            { "nama": "Minuman Kemasan", "harga": 6500, "kalori": 120, "favorit": true, "kategori": "minuman" },
            { "nama": "Minuman Isotonik", "harga": 6000, "kalori": 80, "favorit": false, "kategori": "minuman" },
            { "nama": "Yogurt", "harga": 5000, "kalori": 100, "favorit": false, "kategori": "minuman" },
            { "nama": "Coklat", "harga": 2000, "kalori": 250, "favorit": false, "kategori": "snack" }, // Harga lebih murah dari booth25
            { "nama": "Roti", "harga": 3500, "kalori": 150, "favorit": true, "kategori": "snack" },
            { "nama": "Snack Ringan", "harga": 8000, "kalori": 200, "favorit": true, "kategori": "snack" },
            { "nama": "Onigiri", "harga": 10000, "kalori": 200, "favorit": true, "kategori": "snack" } // Bisa juga makanan ringan
        ]
    },
    {
        "nama": "Aneka Juice & Milk Shake",
        "foto": "photos/booth28.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Pisang Strawberry Juice", "harga": 10000, "kalori": 200, "favorit": true, "kategori": "minuman" },
            { "nama": "Mangga Juice", "harga": 10000, "kalori": 200, "favorit": true, "kategori": "minuman" },
            { "nama": "Alpukat Juice", "harga": 10000, "kalori": 300, "favorit": true, "kategori": "minuman" },
            { "nama": "Jambu Juice", "harga": 8000, "kalori": 150, "favorit": false, "kategori": "minuman" },
            { "nama": "Strawberry Juice", "harga": 8000, "kalori": 80, "favorit": false, "kategori": "minuman" },
            { "nama": "Buah Naga Juice", "harga": 8000, "kalori": 80, "favorit": true, "kategori": "minuman" },
            { "nama": "Jeruk Juice", "harga": 8000, "kalori": 120, "favorit": false, "kategori": "minuman" },
            { "nama": "Wortel Juice", "harga": 8000, "kalori": 70, "favorit": false, "kategori": "minuman" },
            { "nama": "Tomat Juice", "harga": 8000, "kalori": 40, "favorit": false, "kategori": "minuman" },
            { "nama": "Pisang Juice", "harga": 8000, "kalori": 150, "favorit": true, "kategori": "minuman" },
            { "nama": "Melon Juice", "harga": 8000, "kalori": 70, "favorit": false, "kategori": "minuman" },
            { "nama": "Strawberry Milk Shake", "harga": 8000, "kalori": 350, "favorit": true, "kategori": "minuman" },
            { "nama": "Orange Milk Shake", "harga": 8000, "kalori": 300, "favorit": false, "kategori": "minuman" },
            { "nama": "Cappucino Milk Shake", "harga": 8000, "kalori": 350, "favorit": true, "kategori": "minuman" },
            { "nama": "Vanilla Latte Milk Shake", "harga": 8000, "kalori": 350, "favorit": false, "kategori": "minuman" },
            { "nama": "Vanilla Milk Shake", "harga": 8000, "kalori": 350, "favorit": true, "kategori": "minuman" },
            { "nama": "Coklat Milk Shake", "harga": 8000, "kalori": 400, "favorit": false, "kategori": "minuman" },
            { "nama": "Mocachino Milk Shake", "harga": 8000, "kalori": 400, "favorit": false, "kategori": "minuman" }
        ]
    },
    {
        "nama": "Tongseng Solo",
        "foto": "photos/booth29.jpg",
        "whatsapp": "081218925023",
        "menu": [
            { "nama": "Tongseng Daging", "harga": 19000, "kalori": 650, "favorit": true, "kategori": "makanan" },
            { "nama": "Tongseng Ayam", "harga": 17000, "kalori": 550, "favorit": true, "kategori": "makanan" },
            { "nama": "Tongseng Campur", "harga": 21000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Tongseng Iga", "harga": 22000, "kalori": 750, "favorit": false, "kategori": "makanan" },
            { "nama": "Tongseng Kikil/Bakso", "harga": 15000, "kalori": 650, "favorit": false, "kategori": "makanan" },
            { "nama": "Kare Daging", "harga": 19000, "kalori": 700, "favorit": true, "kategori": "makanan" },
            { "nama": "Kare Ayam", "harga": 17000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Kare Campur", "harga": 21000, "kalori": 650, "favorit": true, "kategori": "makanan" },
            { "nama": "Kare Iga", "harga": 22000, "kalori": 800, "favorit": false, "kategori": "makanan" },
            { "nama": "Kare Kikil/Bakso", "harga": 15000, "kalori": 700, "favorit": false, "kategori": "makanan" },
            { "nama": "Sop Daging", "harga": 18000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Sop Ayam", "harga": 16000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Sop Campur", "harga": 20000, "kalori": 550, "favorit": true, "kategori": "makanan" },
            { "nama": "Sop Iga", "harga": 22000, "kalori": 700, "favorit": false, "kategori": "makanan" },
            { "nama": "Sop Kikil/Bakso", "harga": 15000, "kalori": 600, "favorit": false, "kategori": "makanan" }
        ]
    },
    {
        "nama": "Warung Dekat Kandal",
        "foto": "photos/booth30.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Air Mineral", "harga": 6000, "kalori": 0, "favorit": true, "kategori": "minuman" },
            { "nama": "Soda", "harga": 4500, "kalori": 150, "favorit": false, "kategori": "minuman" },
            { "nama": "Yogurt", "harga": 7000, "kalori": 100, "favorit": true, "kategori": "minuman" },
            { "nama": "Minuman Kemasan", "harga": 6500, "kalori": 120, "favorit": true, "kategori": "minuman" },
            { "nama": "Teh Kemasan", "harga": 6000, "kalori": 90, "favorit": true, "kategori": "minuman" },
            { "nama": "Susu", "harga": 8500, "kalori": 150, "favorit": true, "kategori": "minuman" },
            { "nama": "Kopi Kemasan", "harga": 8500, "kalori": 100, "favorit": true, "kategori": "minuman" },
            { "nama": "Minuman Isotonik", "harga": 6000, "kalori": 80, "favorit": false, "kategori": "minuman" },
            { "nama": "Coklat", "harga": 8500, "kalori": 250, "favorit": true, "kategori": "snack" },
            { "nama": "Waffer", "harga": 6000, "kalori": 200, "favorit": false, "kategori": "snack" },
            { "nama": "Roti Kemasan", "harga": 3500, "kalori": 150, "favorit": true, "kategori": "snack" },
            { "nama": "Roti Goreng", "harga": 10000, "kalori": 250, "favorit": true, "kategori": "snack" },
            { "nama": "Risol Mayo", "harga": 3000, "kalori": 150, "favorit": true, "kategori": "snack" },
            { "nama": "Onigiri", "harga": 10000, "kalori": 200, "favorit": false, "kategori": "snack" }, // Bisa juga makanan ringan
            { "nama": "Ciki", "harga": 4500, "kalori": 150, "favorit": false, "kategori": "snack" },
            { "nama": "Biskuit", "harga": 4500, "kalori": 200, "favorit": false, "kategori": "snack" },
            { "nama": "Snack Ringan", "harga": 8500, "kalori": 200, "favorit": true, "kategori": "snack" },
            { "nama": "Permen", "harga": 4500, "kalori": 50, "favorit": false, "kategori": "snack" }
        ]
    },
    {
        "nama": "Thai Tea & Ice Cream",
        "foto": "photos/booth31.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Lemon Tea Medium", "harga": 7000, "kalori": 150, "favorit": true, "kategori": "minuman" },
            { "nama": "Lemon Tea Large", "harga": 9000, "kalori": 250, "favorit": true, "kategori": "minuman" },
            { "nama": "Ice Cream Cone", "harga": 5000, "kalori": 250, "favorit": true, "kategori": "snack" },
            { "nama": "Ice Cream Roti", "harga": 8000, "kalori": 300, "favorit": true, "kategori": "snack" },
            { "nama": "Ice Cream Cup", "harga": 10000, "kalori": 300, "favorit": true, "kategori": "snack" },
            { "nama": "Strawberry Topping", "harga": 3000, "kalori": 50, "favorit": false, "kategori": "snack" },
            { "nama": "Kiwi Topping", "harga": 3000, "kalori": 50, "favorit": false, "kategori": "snack" },
            { "nama": "Anggur Topping", "harga": 3000, "kalori": 50, "favorit": false, "kategori": "snack" },
            { "nama": "Cappucino Medium", "harga": 8000, "kalori": 150, "favorit": false, "kategori": "minuman" },
            { "nama": "Cappucino Large", "harga": 10000, "kalori": 200, "favorit": false, "kategori": "minuman" },
            { "nama": "Vanilla Latte", "harga": 10000, "kalori": 200, "favorit": false, "kategori": "minuman" },
            { "nama": "Bubble Gum", "harga": 10000, "kalori": 200, "favorit": false, "kategori": "minuman" },
            { "nama": "Thai Tea", "harga": 10000, "kalori": 250, "favorit": true, "kategori": "minuman" },
            { "nama": "Red Velvet", "harga": 10000, "kalori": 300, "favorit": false, "kategori": "minuman" },
            { "nama": "Hazelnut", "harga": 10000, "kalori": 250, "favorit": false, "kategori": "minuman" },
            { "nama": "Milo Coffee", "harga": 10000, "kalori": 250, "favorit": false, "kategori": "minuman" },
            { "nama": "Mango", "harga": 10000, "kalori": 250, "favorit": false, "kategori": "minuman" }, // Rasa minuman
            { "nama": "Taro", "harga": 10000, "kalori": 250, "favorit": false, "kategori": "minuman" },
            { "nama": "Green Tea", "harga": 8000, "kalori": 30, "favorit": false, "kategori": "minuman" },
            { "nama": "Original Choco", "harga": 10000, "kalori": 300, "favorit": false, "kategori": "minuman" },
            { "nama": "Boba Topping", "harga": 3000, "kalori": 100, "favorit": false, "kategori": "snack" },
            { "nama": "Ice Cream Topping", "harga": 3000, "kalori": 150, "favorit": true, "kategori": "snack" }
        ]
    },
    {
        "nama": "Kantin Sumarso",
        "foto": "photos/booth32.jpg",
        "whatsapp": "6285810289428",
        "menu": [
            { "nama": "Nasi Goreng Ayam", "harga": 15000, "kalori": 450, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Goreng Bakso", "harga": 15000, "kalori": 500, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Goreng Sosis", "harga": 15000, "kalori": 480, "favorit": true, "kategori": "makanan" },
            { "nama": "Nasi Goreng Ati Ampela", "harga": 17000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Goreng Kornet", "harga": 17000, "kalori": 430, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Goreng Teri", "harga": 17000, "kalori": 400, "favorit": false, "kategori": "makanan" },
            { "nama": "Nasi Goreng Spesial", "harga": 17000, "kalori": 800, "favorit": true, "kategori": "makanan" },
            { "nama": "Kwetiau Goreng/Rebus Ayam", "harga": 15000, "kalori": 525, "favorit": true, "kategori": "makanan" },
            { "nama": "Kwetiau Goreng/Rebus Bakso", "harga": 15000, "kalori": 575, "favorit": true, "kategori": "makanan" },
            { "nama": "Kwetiau Goreng/Rebus Sosis", "harga": 15000, "kalori": 555, "favorit": true, "kategori": "makanan" },
            { "nama": "Kwetiau Goreng/Rebus Ati Ampela", "harga": 17000, "kalori": 575, "favorit": false, "kategori": "makanan" },
            { "nama": "Kwetiau Goreng/Rebus Kornet", "harga": 17000, "kalori": 505, "favorit": false, "kategori": "makanan" },
            { "nama": "Kwetiau Goreng/Rebus Teri", "harga": 17000, "kalori": 475, "favorit": false, "kategori": "makanan" },
            { "nama": "Kwetiau Goreng/Rebus Spesial", "harga": 17000, "kalori": 875, "favorit": true, "kategori": "makanan" },
            { "nama": "Mie Goreng/Rebus Ayam", "harga": 15000, "kalori": 550, "favorit": true, "kategori": "makanan" },
            { "nama": "Mie Goreng/Rebus Bakso", "harga": 15000, "kalori": 600, "favorit": true, "kategori": "makanan" },
            { "nama": "Mie Goreng/Rebus Sosis", "harga": 15000, "kalori": 580, "favorit": true, "kategori": "makanan" },
            { "nama": "Mie Goreng/Rebus Ati Ampela", "harga": 17000, "kalori": 600, "favorit": false, "kategori": "makanan" },
            { "nama": "Mie Goreng/Rebus Kornet", "harga": 17000, "kalori": 530, "favorit": false, "kategori": "makanan" },
            { "nama": "Mie Goreng/Rebus Teri", "harga": 17000, "kalori": 500, "favorit": false, "kategori": "makanan" },
            { "nama": "Mie Goreng/Rebus Spesial", "harga": 17000, "kalori": 900, "favorit": true, "kategori": "makanan" }
        ]
    }
];

    // ==================== GLOBAL VARIABLES ====================
    const body = document.body;
    const boothsContainer = document.getElementById('booths-container');
    const menuSearch = document.getElementById('menu-search');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const resultsInfo = document.getElementById('results-info');
    const resultsCount = document.getElementById('results-count');

    let currentFilters = {
        search: '',
        minPrice: null,
        maxPrice: null,
        category: 'all'
    };

    // ==================== UTILITY FUNCTIONS ====================
    function formatPrice(price) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ==================== BOOTH RENDERING ====================
    function createBoothElement(booth) {
        const boothElement = document.createElement('div');
        boothElement.className = 'booth';
        boothElement.setAttribute('data-booth-name', booth.nama.toLowerCase());

        // Create image with lazy loading
        const imgContainer = document.createElement('div');
        imgContainer.className = 'booth-img-container';
        const img = document.createElement('img');
        img.className = 'booth-img';
        img.src = booth.foto;
        img.alt = `Foto ${booth.nama}`;
        img.loading = 'lazy';
        imgContainer.appendChild(img);

        // Create booth details
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'booth-details';

        const boothName = document.createElement('h3');
        boothName.className = 'booth-name';
        boothName.textContent = booth.nama;

        const menuContainer = document.createElement('div');
        menuContainer.className = 'booth-menu';

        // Create menu items
        booth.menu.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = `menu-item ${item.kategori}`;
            menuItem.setAttribute('data-item-name', item.nama.toLowerCase());
            menuItem.setAttribute('data-price', item.harga);
            menuItem.setAttribute('data-category', item.kategori);

            const itemName = document.createElement('div');
            itemName.className = item.favorit ? 'menu-item-name favorite' : 'menu-item-name';
            
            const nameText = document.createElement('span');
            nameText.textContent = item.nama;
            
            const categoryBadge = document.createElement('span');
            categoryBadge.className = `category-badge ${item.kategori}`;
            categoryBadge.textContent = item.kategori;
            
            itemName.appendChild(nameText);
            itemName.appendChild(categoryBadge);

            const itemDetails = document.createElement('div');
            itemDetails.className = 'menu-item-details';

            const itemPrice = document.createElement('span');
            itemPrice.className = 'menu-item-price';
            itemPrice.textContent = formatPrice(item.harga);

            const itemCalories = document.createElement('span');
            itemCalories.className = 'menu-item-calories';
            itemCalories.textContent = `${item.kalori} kal`;

            itemDetails.appendChild(itemPrice);
            itemDetails.appendChild(itemCalories);

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemDetails);
            menuContainer.appendChild(menuItem);
        });

        // Create contact button
        const contactLink = document.createElement('a');
        contactLink.className = 'booth-contact';
        contactLink.href = `https://wa.me/${booth.whatsapp}`;
        contactLink.target = '_blank';
        contactLink.rel = 'noopener noreferrer';
        contactLink.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Pesan via WhatsApp';

        // Assemble booth element
        detailsContainer.appendChild(boothName);
        detailsContainer.appendChild(menuContainer);
        detailsContainer.appendChild(contactLink);

        boothElement.appendChild(imgContainer);
        boothElement.appendChild(detailsContainer);

        return boothElement;
    }

    function renderBooths() {
        boothsContainer.innerHTML = '';
        
        if (booths.length === 0) {
            const noBoothMsg = document.createElement('p');
            noBoothMsg.className = 'no-booth-message';
            noBoothMsg.textContent = 'Tidak ada booth yang tersedia.';
            boothsContainer.appendChild(noBoothMsg);
            return;
        }

        booths.forEach((booth, index) => {
            const boothElement = createBoothElement(booth);
            boothElement.style.animationDelay = `${index * 0.2}s`;
            boothsContainer.appendChild(boothElement);
        });
    }

    // ==================== ENHANCED FILTER FUNCTIONS ====================
    function applyFilters() {
        const booths = document.querySelectorAll('.booth');
        let totalVisibleItems = 0;
        let visibleBooths = 0;

        booths.forEach(booth => {
            const menuItems = booth.querySelectorAll('.menu-item');
            let boothHasVisibleItems = false;

            menuItems.forEach(item => {
                let isVisible = true;
                
                // Search filter
                if (currentFilters.search) {
                    const itemName = item.getAttribute('data-item-name');
                    if (!itemName.includes(currentFilters.search.toLowerCase())) {
                        isVisible = false;
                    }
                }
                
                // Price filter
                const itemPrice = parseInt(item.getAttribute('data-price'));
                if (currentFilters.minPrice && itemPrice < currentFilters.minPrice) {
                    isVisible = false;
                }
                if (currentFilters.maxPrice && itemPrice > currentFilters.maxPrice) {
                    isVisible = false;
                }
                
                // Category filter
                if (currentFilters.category !== 'all') {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory !== currentFilters.category) {
                        isVisible = false;
                    }
                }
                
                // Apply visibility
                item.style.display = isVisible ? 'block' : 'none';
                
                if (isVisible) {
                    boothHasVisibleItems = true;
                    totalVisibleItems++;
                }
            });

            booth.style.display = boothHasVisibleItems ? 'block' : 'none';
            if (boothHasVisibleItems) {
                visibleBooths++;
            }
        });

        // Update results info
        updateResultsInfo(totalVisibleItems, visibleBooths);
        
        // Show no results message
        showNoResultsMessage(totalVisibleItems === 0);
    }

    function updateResultsInfo(itemCount, boothCount) {
        if (itemCount > 0) {
            resultsCount.textContent = itemCount;
            resultsInfo.style.display = 'block';
        } else {
            resultsInfo.style.display = 'none';
        }
    }

    function showNoResultsMessage(show) {
        const existingMsg = document.querySelector('.no-results-message');
        
        if (show && !existingMsg) {
            const noResultsMsg = document.createElement('p');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.textContent = 'Tidak ada menu yang sesuai dengan filter yang dipilih.';
            boothsContainer.appendChild(noResultsMsg);
        } else if (!show && existingMsg) {
            existingMsg.remove();
        }
    }

    function resetFilters() {
        currentFilters = {
            search: '',
            minPrice: null,
            maxPrice: null,
            category: 'all'
        };
        
        // Reset UI
        menuSearch.value = '';
        minPriceInput.value = '';
        maxPriceInput.value = '';
        
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-category="all"]').classList.add('active');
        
        // Apply filters
        applyFilters();
    }

    // ==================== EVENT LISTENERS ====================
    
    // Search input
    const debouncedSearch = debounce((value) => {
        currentFilters.search = value.trim();
        applyFilters();
    }, 300);
    
    menuSearch.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });

    // Price inputs
    const debouncedPriceFilter = debounce(() => {
        currentFilters.minPrice = minPriceInput.value ? parseInt(minPriceInput.value) : null;
        currentFilters.maxPrice = maxPriceInput.value ? parseInt(maxPriceInput.value) : null;
        applyFilters();
    }, 500);
    
    minPriceInput.addEventListener('input', debouncedPriceFilter);
    maxPriceInput.addEventListener('input', debouncedPriceFilter);

    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilters.category = button.getAttribute('data-category');
            applyFilters();
        });
    });

    // Reset filters button
    resetFiltersBtn.addEventListener('click', resetFilters);

    // ==================== INITIALIZATION ====================
    function init() {
        renderBooths();
        applyFilters(); // Initial filter application
    }

    // Initialize app
    init();
});