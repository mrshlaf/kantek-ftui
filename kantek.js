/**
 * KANTEK.JS
 * JavaScript untuk website Kantin Teknik FTUI
 * Fitur: Dark mode, Render booth otomatis, Filter menu, Smooth scroll, Animasi, dll
 */

document.addEventListener('DOMContentLoaded', function() {
    // ==================== DATA BOOTH ====================
    const booths = [
        {
    "nama": "Sate Madura FTUI Bang Udi",
    "foto": "photos/booth1.jpg",
    "whatsapp": "6287887722899",
    "menu": [
    { "nama": "Sate Ayam", "harga": 18000, "kalori": 300, "favorit": false },
    { "nama": "Sate Ayam + Nasi/Lontong", "harga": 21000, "kalori": 600, "favorit": false },
    { "nama": "Sate Ayam Full Daging", "harga": 20000, "kalori": 400, "favorit": false },
    { "nama": "Sate Ayam Full Daging + Nasi/Lontong", "harga": 23000, "kalori": 700, "favorit": false },
    { "nama": "Sate Kambing", "harga": 29000, "kalori": 400, "favorit": false },
    { "nama": "Sate Kambing + Nasi/Lontong", "harga": 32000, "kalori": 600, "favorit": false },
    { "nama": "Tambahan Kotak", "harga": 1000, "kalori": 0, "favorit": false }
    ]
},
{
    "nama": "Nasi Bakar Mei Nurhayati",
    "foto": "photos/booth2.jpg",
    "whatsapp": "6281311025189",
    "menu": [
    { "nama": "Gado-gado + Telur", "harga": 17000, "kalori": 450, "favorit": false },
    { "nama": "Gado-gado Nasi + Telur", "harga": 18000, "kalori": 700, "favorit": false },
    { "nama": "Gado-gado Lontong + Telur", "harga": 18000, "kalori": 600, "favorit": false },
    { "nama": "Nasi Bakar Isi Tuna", "harga": 16000, "kalori": 400, "favorit": false },
    { "nama": "Nasi Bakar Isi Ayam", "harga": 17000, "kalori": 600, "favorit": false },
    { "nama": "Nasi Bakar Isi Cumi", "harga": 18000, "kalori": 500, "favorit": false }
    ]
},
{
    "nama": "Japanese Food",
    "foto": "photos/booth3.jpg",
    "whatsapp": "6285711382879",
    "menu": [
    { "nama": "Chicken Katsu + Nasi", "harga": 20000, "kalori": 750, "favorit": false },
    { "nama": "Chicken Katsu Spicy + Nasi", "harga": 22000, "kalori": 780, "favorit": false },
    { "nama": "Chicken Katsu Blackpepper + Nasi", "harga": 22000, "kalori": 775, "favorit": false },
    { "nama": "Chicken Teriyaki + Nasi", "harga": 20000, "kalori": 700, "favorit": false },
    { "nama": "Chicken Teriyaki Spicy + Nasi", "harga": 22000, "kalori": 725, "favorit": false },
    { "nama": "Chicken Teriyaki Blackpepper + Nasi", "harga": 22000, "kalori": 720, "favorit": false },
    { "nama": "Tambahan Bungkus", "harga": 1000, "kalori": 0, "favorit": false }
    ]
},
{
    nama: "Pecel Ayam Penyet",
    foto: "photos/booth4.jpg",
    whatsapp: "6287785864698",
    menu: [
        { nama: "Pecel Ayam", harga: 19000, kalori: 650, favorit: false },
        { nama: "Pecel Ayam + Tahu/Tempe", harga: 22000, kalori: 750, favorit: true },
        { nama: "Ayam Penyet + Tahu/Tempe", harga: 22000, kalori: 850, favorit: false }
    ]
},
{
    nama: "Gorengan Mantul",
    foto: "photos/booth5.jpg",
    whatsapp: "6285718861539",
    menu: [
        { nama: "Gorengan Komplit (Lontong, Bakwan, Martabak Tahu, Risol Bihun, Risol Mayo, Omelet, Pisang Goreng, Tempe)", harga: 2000, kalori: 120, favorit: true },
        { nama: "Gorengan Premium", harga: 4000, kalori: 180, favorit: false }
    ]
},
{
    nama: "Kantin Mama Icut",
    foto: "photos/booth6.jpg",
    whatsapp: "628778330213",
    menu: [
        { nama: "Sate Taichan", harga: 15000, kalori: 350, favorit: true },
        { nama: "Donburi Sambal Matah", harga: 19000, kalori: 650, favorit: false },
        { nama: "Sayap Pedas", harga: 12000, kalori: 550, favorit: false }
    ]
},
{
    nama: "Kantin Nasi Ulam",
    foto: "photos/booth7.jpg",
    whatsapp: "6285892230543", // atau bisa juga "62816821329"
    menu: [
        { nama: "Ayam Remuk", harga: 21000, kalori: 650, favorit: false },
        { nama: "Ayam Kebet", harga: 21000, kalori: 550, favorit: false },
        { nama: "Ayam Sabet / Ayam Sabuk", harga: 16000, kalori: 700, favorit: true }
    ],
    opsiTambahan: [
        { nama: "Dibungkus", tambahanHarga: 1000 }
    ]
},
{
    nama: "Nasi Padang",
    foto: "photos/booth8.jpg",
    whatsapp: "", // belum ada nomor, bisa ditambah nanti
    menu: [
        { nama: "Nasi Padang", harga: 15000, kalori: 700, favorit: true },
        { nama: "Nasi Gila Keju", harga: 18000, kalori: 800, favorit: false },
        { nama: "Nasi Gila", harga: 15000, kalori: 750, favorit: false }
    ],
    opsiTambahan: [
        { nama: "Dibungkus", tambahanHarga: 1000 }
    ]
},
{
    nama: "Batagor & Siomay Ikan",
    foto: "photos/booth9.jpg",
    whatsapp: "", // nomor belum ada
    menu: [
        { nama: "Batagor / Siomay Ikan", harga: 10000, kalori: 300, favorit: true }
    ]
},
{
    nama: "Ketoprak Bang Asep",
    foto: "photos/booth10.jpg",
    whatsapp: "6287878566776",
    menu: [
        { nama: "Ketoprak", harga: 13000, kalori: 550, favorit: true },
        { nama: "Ketoprak Keju", harga: 18000, kalori: 650, favorit: false },
        { nama: "Ketoprak Telur", harga: 16000, kalori: 600, favorit: false },
        { nama: "Ketoprak Keju + Telur", harga: 20000, kalori: 700, favorit: true },
        { nama: "Kentang Goreng", harga: 5000, kalori: 350, favorit: false, catatan: "Start from 5000" }
    ]
},
{
    nama: "Nasi Uduk Maknyus",
    foto: "photos/booth11.jpg",
    whatsapp: "", // belum ada nomor
    menu: [
        { nama: "Nasi Uduk (Tempe, Orek, Mie)", harga: 11000, kalori: 750, favorit: false },
        { nama: "Nasi Uduk (Telur, Sayur)", harga: 13000, kalori: 600, favorit: false },
        { nama: "Nasi Uduk (Kikil, Tempe Orek)", harga: 14000, kalori: 800, favorit: false },
        { nama: "Nasi Uduk (Ati Ampela, Bihun)", harga: 15000, kalori: 850, favorit: true },
        { nama: "Nasi Uduk (Ayam Goreng, Kentang Balado)", harga: 17000, kalori: 950, favorit: true }
    ]
},
{
    nama: "Soto Ayam Lamongan Pak Kumis",
    foto: "photos/booth12.jpg",
    whatsapp: "", // belum ada nomor
    menu: [
        { nama: "Soto Ayam + Nasi", harga: 17000, kalori: 500, favorit: true },
        { nama: "Ayam Kremes + Nasi", harga: 22000, kalori: 800, favorit: false },
        { nama: "Pecel Lele + Nasi", harga: 17000, kalori: 500, favorit: false },
        { nama: "Lele Kremes + Nasi", harga: 18000, kalori: 650, favorit: true }
    ],
    opsiTambahan: [
        { nama: "Dibungkus", tambahanHarga: 1000 }
    ]
},
{
    nama: "Bebek Juara",
    foto: "photos/booth13.jpg",
    whatsapp: "", // belum ada nomor
    menu: [
        { nama: "Nasi + Bebek Goreng + Tempe + Timun + Sambal", harga: 20000, kalori: 750, favorit: true },
        { nama: "Nasi + Bebek Bakar + Tempe + Timun + Sambal", harga: 20000, kalori: 800, favorit: true },
        { nama: "Nasi + Telor + Sambal + Tempe + Timun", harga: 10000, kalori: 550, favorit: false }
    ]
},
{
    nama: "Beef Patty Steak",
    foto: "photos/booth14.jpg",
    whatsapp: "", // belum ada nomor
    menu: [
        { nama: "Beef Patty Steak - Barbeque", harga: 25000, kalori: 600, favorit: false },
        { nama: "Beef Patty Steak - Mushroom", harga: 25000, kalori: 650, favorit: true },
        { nama: "Beef Patty Steak - Blackpepper", harga: 25000, kalori: 600, favorit: false }
    ],
    opsiTambahan: [
        { nama: "Tambah Nasi", tambahanHarga: 5000 }
    ]
},
{
    nama: "Kantin Soto",
    foto: "photos/booth15.jpg",
    whatsapp: "628551262341",
    menu: [
        { nama: "Soto Daging + Nasi", harga: 19000, kalori: 500, favorit: true },
        { nama: "Soto Mie + Nasi", harga: 17000, kalori: 600, favorit: true },
        { nama: "Soto Babat + Nasi", harga: 17000, kalori: 550, favorit: false },
        { nama: "Soto Campur (Daging + Babat) + Nasi", harga: 20000, kalori: 650, favorit: true }
    ]
},
    {
        "nama": "Nasi Campur & Sop Bandeng Presto",
        "foto": "photos/booth16.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Nasi + Tahu + Tempe + Sayur", "harga": 13000, "kalori": 500, "favorit": false },
            { "nama": "Nasi + Telor + Sayur", "harga": 14000, "kalori": 500, "favorit": false },
            { "nama": "Nasi + Ikan Cue + Sayur", "harga": 15000, "kalori": 500, "favorit": false },
            { "nama": "Nasi + Bandeng + Sayur", "harga": 16000, "kalori": 550, "favorit": false },
            { "nama": "Nasi + Ayam + Sayur", "harga": 17000, "kalori": 600, "favorit": true },
            { "nama": "Nasi + Sop Kimlo Ayam", "harga": 17000, "kalori": 500, "favorit": true },
            { "nama": "Nasi + Sop Kimlo + Bandeng Presto", "harga": 21000, "kalori": 600, "favorit": true }
        ]
    },
    {
        "nama": "Gado-gado & Nasi Bakar",
        "foto": "photos/booth17.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Gado-gado + Telur", "harga": 17000, "kalori": 450, "favorit": false },
            { "nama": "Gado-gado Nasi + Telur", "harga": 18000, "kalori": 550, "favorit": false },
            { "nama": "Gado-gado Lontong + Telur", "harga": 18000, "kalori": 500, "favorit": false },
            { "nama": "Nasi Bakar Isi Tumis", "harga": 16000, "kalori": 600, "favorit": false },
            { "nama": "Nasi Bakar Isi Ayam", "harga": 17000, "kalori": 700, "favorit": true },
            { "nama": "Nasi Bakar Isi Cumi", "harga": 18000, "kalori": 700, "favorit": true }
        ]
    },
    {
        "nama": "Fried Chicken & Bubur Ayam",
        "foto": "photos/booth18.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Fried Chicken + Saus Sambal", "harga": 15000, "kalori": 500, "favorit": false },
            { "nama": "Fried Chicken + Sambal Geprek", "harga": 18000, "kalori": 500, "favorit": true },
            { "nama": "Bubur Ayam + Usus", "harga": 14000, "kalori": 400, "favorit": false },
            { "nama": "Bubur Ayam + Ati Ampela", "harga": 14000, "kalori": 450, "favorit": false },
            { "nama": "Bubur Ayam + Telor Puyuh", "harga": 15000, "kalori": 450, "favorit": false },
            { "nama": "Bubur Ayam", "harga": 12000, "kalori": 350, "favorit": false }
        ]
    },
    {
        "nama": "Batagor & Siomay Ayam",
        "foto": "photos/booth19.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Batagor / Siomay Ayam", "harga": 10000, "kalori": 300, "favorit": false }
        ]
    },
    {
        "nama": "Cream Soup & Macaroni",
        "foto": "photos/booth20.jpg",
        "whatsapp": "081384269033",
        "menu": [
            { "nama": "Makaroni Schotel Ayam", "harga": 20000, "kalori": 400, "favorit": false },
            { "nama": "Makaroni Schotel Daging", "harga": 20000, "kalori": 450, "favorit": false },
            { "nama": "Lasagna", "harga": 20000, "kalori": 500, "favorit": false },
            { "nama": "Zuppa Soup", "harga": 17000, "kalori": 250, "favorit": false }
        ]
    },
    {
        "nama": "Fu Yung Hai & Tahu Telor",
        "foto": "photos/booth21.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Fu Yung Hai", "harga": 12000, "kalori": 350, "favorit": false },
            { "nama": "Fu Yung Hai + Nasi", "harga": 17000, "kalori": 550, "favorit": false },
            { "nama": "Tahu Telor + Lontong", "harga": 16000, "kalori": 450, "favorit": false },
            { "nama": "Tahu Telor + Nasi", "harga": 16000, "kalori": 550, "favorit": false },
            { "nama": "Tahu Telor", "harga": 11000, "kalori": 350, "favorit": false },
            { "nama": "Tambahan Bungkus", "harga": 1000, "kalori": 0, "favorit": false }
        ]
    },
    {
        "nama": "Toko Salad",
        "foto": "photos/booth22.jpg",
        "whatsapp": "089626181633",
        "menu": [
            { "nama": "Puding Pink", "harga": 8000, "kalori": 150, "favorit": false },
            { "nama": "Salad Buah", "harga": 10000, "kalori": 250, "favorit": false },
            { "nama": "Salad Sayur", "harga": 10000, "kalori": 100, "favorit": false },
            { "nama": "Sandwich", "harga": 10000, "kalori": 300, "favorit": false },
            { "nama": "Sandwich Daging", "harga": 15000, "kalori": 500, "favorit": false },
            { "nama": "Buah Potong", "harga": 6000, "kalori": 120, "favorit": false },
            { "nama": "Jasuke (Small)", "harga": 7000, "kalori": 300, "favorit": false },
            { "nama": "Jasuke (Large)", "harga": 10000, "kalori": 600, "favorit": false }
        ]
    },
    {
        "nama": "Roti - Kebab - Dimsum",
        "foto": "photos/booth23.jpg",
        "whatsapp": "089507366643",
        "menu": [
            { "nama": "Kebab", "harga": 15000, "kalori": 300, "favorit": false },
            { "nama": "Kebab + Telur", "harga": 19000, "kalori": 350, "favorit": false },
            { "nama": "Kebab + Keju", "harga": 19000, "kalori": 350, "favorit": false },
            { "nama": "Kebab + Telur + Keju", "harga": 22000, "kalori": 400, "favorit": false },
            { "nama": "Roti John", "harga": 10000, "kalori": 350, "favorit": false },
            { "nama": "Roti John + Keju", "harga": 22000, "kalori": 400, "favorit": false },
            { "nama": "Burger", "harga": 15000, "kalori": 400, "favorit": false },
            { "nama": "Burger + Keju", "harga": 18000, "kalori": 450, "favorit": false },
            { "nama": "Dimsum", "harga": 16000, "kalori": 150, "favorit": false },
            { "nama": "Dimsum + Keju", "harga": 18000, "kalori": 200, "favorit": false },
            { "nama": "Roti Toast", "harga": 18000, "kalori": 200, "favorit": false },
            { "nama": "Roti Toast + Keju", "harga": 22000, "kalori": 300, "favorit": false },
            { "nama": "Taco", "harga": 15000, "kalori": 200, "favorit": false },
            { "nama": "Taco + Keju", "harga": 20000, "kalori": 250, "favorit": false },
            { "nama": "Hotdog", "harga": 18000, "kalori": 200, "favorit": false },
            { "nama": "Hotdog + Keju", "harga": 20000, "kalori": 250, "favorit": false }
        ]
    },
    {
        "nama": "Pempek Cek Ani",
        "foto": "photos/booth24.jpg",
        "whatsapp": "082311351569",
        "menu": [
            { "nama": "Kapal Selam", "harga": 16000, "kalori": 350, "favorit": false },
            { "nama": "Pempek Telor", "harga": 10000, "kalori": 350, "favorit": false },
            { "nama": "Pempek Adaan", "harga": 5000, "kalori": 300, "favorit": false },
            { "nama": "Tekwan", "harga": 16000, "kalori": 250, "favorit": false },
            { "nama": "Lenggang", "harga": 17000, "kalori": 300, "favorit": false },
            { "nama": "Pempek Kulit", "harga": 5000, "kalori": 350, "favorit": false },
            { "nama": "Pempek Keriting", "harga": 5000, "kalori": 350, "favorit": false },
            { "nama": "Lenjer Besar", "harga": 12000, "kalori": 400, "favorit": false },
            { "nama": "Lenjer Kecil", "harga": 5000, "kalori": 250, "favorit": false },
            { "nama": "Tambahan Bungkus", "harga": 1000, "kalori": 0, "favorit": false }
        ]
    },
        {
        "nama": "Warung 2 Dekat Tangga Kantas",
        "foto": "photos/booth25.jpg",
        "whatsapp": "085788829553",
        "menu": [
            { "nama": "Air Mineral", "harga": 6000, "kalori": 0, "favorit": false },
            { "nama": "Soda", "harga": 4500, "kalori": 150, "favorit": false },
            { "nama": "Yogurt", "harga": 7000, "kalori": 100, "favorit": false },
            { "nama": "Minuman Kemasan", "harga": 6500, "kalori": 120, "favorit": false },
            { "nama": "Teh Kemasan", "harga": 6000, "kalori": 90, "favorit": false },
            { "nama": "Susu", "harga": 7000, "kalori": 150, "favorit": false },
            { "nama": "Kopi Kemasan", "harga": 8500, "kalori": 100, "favorit": false },
            { "nama": "Minuman Isotonik", "harga": 6000, "kalori": 80, "favorit": false },
            { "nama": "Biskuit", "harga": 4500, "kalori": 200, "favorit": false },
            { "nama": "Permen", "harga": 4500, "kalori": 50, "favorit": false },
            { "nama": "Yupi", "harga": 2500, "kalori": 70, "favorit": false },
            { "nama": "Roti", "harga": 3500, "kalori": 150, "favorit": false },
            { "nama": "Ciki", "harga": 4500, "kalori": 150, "favorit": false },
            { "nama": "Waffer", "harga": 6000, "kalori": 200, "favorit": false },
            { "nama": "Coklat", "harga": 8500, "kalori": 250, "favorit": false }
        ]
    },
    {
        "nama": "Masakan Sunda",
        "foto": "photos/booth26.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Nasi", "harga": 4000, "kalori": 135, "favorit": false },
            { "nama": "Tumisan", "harga": 3000, "kalori": 120, "favorit": false },
            { "nama": "Gorengan", "harga": 2000, "kalori": 137, "favorit": false },
            { "nama": "Tahu", "harga": 3000, "kalori": 35, "favorit": false },
            { "nama": "Telor", "harga": 4000, "kalori": 77, "favorit": false },
            { "nama": "Telor Dadar", "harga": 6000, "kalori": 93, "favorit": false },
            { "nama": "Telor Kecap", "harga": 6000, "kalori": 398, "favorit": false },
            { "nama": "Telor Santen", "harga": 6000, "kalori": 250, "favorit": false },
            { "nama": "Ati Ampela", "harga": 8000, "kalori": 145, "favorit": false },
            { "nama": "Ikan Tongkol", "harga": 8000, "kalori": 121, "favorit": false },
            { "nama": "Ikan Mujair", "harga": 15000, "kalori": 107, "favorit": false },
            { "nama": "Terong", "harga": 3000, "kalori": 148, "favorit": false },
            { "nama": "Kentang", "harga": 3000, "kalori": 192, "favorit": false },
            { "nama": "Tempe Orek", "harga": 3000, "kalori": 175, "favorit": false },
            { "nama": "Pare", "harga": 3000, "kalori": 82, "favorit": false }
        ]
    },
    {
        "nama": "Warung Aliyanto",
        "foto": "photos/booth27.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Susu Kemasan", "harga": 8500, "kalori": 150, "favorit": false },
            { "nama": "Air Mineral", "harga": 4000, "kalori": 0, "favorit": false },
            { "nama": "Soda", "harga": 4500, "kalori": 150, "favorit": false },
            { "nama": "Teh Kemasan", "harga": 6000, "kalori": 90, "favorit": false },
            { "nama": "Kopi Kemasan", "harga": 8500, "kalori": 100, "favorit": false },
            { "nama": "Minuman Kemasan", "harga": 6500, "kalori": 120, "favorit": false },
            { "nama": "Minuman Isotonik", "harga": 6000, "kalori": 80, "favorit": false },
            { "nama": "Yogurt", "harga": 5000, "kalori": 100, "favorit": false },
            { "nama": "Coklat", "harga": 2000, "kalori": 250, "favorit": false },
            { "nama": "Roti", "harga": 3500, "kalori": 150, "favorit": false },
            { "nama": "Snack Ringan", "harga": 8000, "kalori": 200, "favorit": false },
            { "nama": "Onigiri", "harga": 10000, "kalori": 200, "favorit": false }
        ]
    },
    {
        "nama": "Warung 2 Dekat Tangga Kantas",
        "foto": "photos/booth28.jpg",
        "whatsapp": "085788829553",
        "menu": [
            { "nama": "Air Mineral", "harga": 6000, "kalori": 0, "favorit": false },
            { "nama": "Soda", "harga": 4500, "kalori": 150, "favorit": false },
            { "nama": "Yogurt", "harga": 7000, "kalori": 100, "favorit": false },
            { "nama": "Minuman Kemasan", "harga": 6500, "kalori": 120, "favorit": false },
            { "nama": "Teh Kemasan", "harga": 6000, "kalori": 90, "favorit": false },
            { "nama": "Susu", "harga": 7000, "kalori": 150, "favorit": false },
            { "nama": "Kopi Kemasan", "harga": 8500, "kalori": 100, "favorit": false },
            { "nama": "Minuman Isotonik", "harga": 6000, "kalori": 80, "favorit": false },
            { "nama": "Biskuit", "harga": 4500, "kalori": 200, "favorit": false },
            { "nama": "Permen", "harga": 4500, "kalori": 50, "favorit": false },
            { "nama": "Yupi", "harga": 2500, "kalori": 70, "favorit": false },
            { "nama": "Roti", "harga": 3500, "kalori": 150, "favorit": false },
            { "nama": "Ciki", "harga": 4500, "kalori": 150, "favorit": false },
            { "nama": "Waffer", "harga": 6000, "kalori": 200, "favorit": false },
            { "nama": "Coklat", "harga": 8500, "kalori": 250, "favorit": false }
        ]
    },
    {
        "nama": "Masakan Sunda",
        "foto": "photos/booth29.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Nasi", "harga": 4000, "kalori": 135, "favorit": false },
            { "nama": "Tumisan", "harga": 3000, "kalori": 120, "favorit": false },
            { "nama": "Gorengan", "harga": 2000, "kalori": 137, "favorit": false },
            { "nama": "Tahu", "harga": 3000, "kalori": 35, "favorit": false },
            { "nama": "Telor", "harga": 4000, "kalori": 77, "favorit": false },
            { "nama": "Telor Dadar", "harga": 6000, "kalori": 93, "favorit": false },
            { "nama": "Telor Kecap", "harga": 6000, "kalori": 398, "favorit": false },
            { "nama": "Telor Santen", "harga": 6000, "kalori": 250, "favorit": false },
            { "nama": "Ati Ampela", "harga": 8000, "kalori": 145, "favorit": false },
            { "nama": "Ikan Tongkol", "harga": 8000, "kalori": 121, "favorit": false },
            { "nama": "Ikan Mujair", "harga": 15000, "kalori": 107, "favorit": false },
            { "nama": "Terong", "harga": 3000, "kalori": 148, "favorit": false },
            { "nama": "Kentang", "harga": 3000, "kalori": 192, "favorit": false },
            { "nama": "Tempe Orek", "harga": 3000, "kalori": 175, "favorit": false },
            { "nama": "Pare", "harga": 3000, "kalori": 82, "favorit": false }
        ]
    },
    {
        "nama": "Warung Aliyanto",
        "foto": "photos/booth30.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Susu Kemasan", "harga": 8500, "kalori": 150, "favorit": false },
            { "nama": "Air Mineral", "harga": 4000, "kalori": 0, "favorit": false },
            { "nama": "Soda", "harga": 4500, "kalori": 150, "favorit": false },
            { "nama": "Teh Kemasan", "harga": 6000, "kalori": 90, "favorit": false },
            { "nama": "Kopi Kemasan", "harga": 8500, "kalori": 100, "favorit": false },
            { "nama": "Minuman Kemasan", "harga": 6500, "kalori": 120, "favorit": false },
            { "nama": "Minuman Isotonik", "harga": 6000, "kalori": 80, "favorit": false },
            { "nama": "Yogurt", "harga": 5000, "kalori": 100, "favorit": false },
            { "nama": "Coklat", "harga": 2000, "kalori": 250, "favorit": false },
            { "nama": "Roti", "harga": 3500, "kalori": 150, "favorit": false },
            { "nama": "Snack Ringan", "harga": 8000, "kalori": 200, "favorit": false },
            { "nama": "Onigiri", "harga": 10000, "kalori": 200, "favorit": false }
        ]
    },
    {
        "nama": "Thai Tea & Ice Cream",
        "foto": "photos/booth31.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Lemon Tea Medium", "harga": 7000, "kalori": 150, "favorit": false },
            { "nama": "Lemon Tea Large", "harga": 9000, "kalori": 250, "favorit": false },
            { "nama": "Ice Cream Cone", "harga": 5000, "kalori": 250, "favorit": false },
            { "nama": "Ice Cream Roti", "harga": 8000, "kalori": 300, "favorit": false },
            { "nama": "Ice Cream Cup", "harga": 10000, "kalori": 300, "favorit": false },
            { "nama": "Strawberry Topping", "harga": 3000, "kalori": 50, "favorit": false },
            { "nama": "Kiwi Topping", "harga": 3000, "kalori": 50, "favorit": false },
            { "nama": "Anggur Topping", "harga": 3000, "kalori": 50, "favorit": false },
            { "nama": "Cappucino Medium", "harga": 8000, "kalori": 150, "favorit": false },
            { "nama": "Cappucino Large", "harga": 10000, "kalori": 200, "favorit": false },
            { "nama": "Vanilla Latte", "harga": 10000, "kalori": 200, "favorit": false },
            { "nama": "Bubble Gum", "harga": 10000, "kalori": 200, "favorit": false },
            { "nama": "Thai Tea", "harga": 10000, "kalori": 250, "favorit": false },
            { "nama": "Red Velvet", "harga": 10000, "kalori": 300, "favorit": false },
            { "nama": "Hazelnut", "harga": 10000, "kalori": 250, "favorit": false },
            { "nama": "Milo Coffee", "harga": 10000, "kalori": 250, "favorit": false },
            { "nama": "Mango", "harga": 10000, "kalori": 250, "favorit": false },
            { "nama": "Taro", "harga": 10000, "kalori": 250, "favorit": false },
            { "nama": "Green Tea", "harga": 8000, "kalori": 30, "favorit": false },
            { "nama": "Original Choco", "harga": 10000, "kalori": 300, "favorit": false },
            { "nama": "Boba Topping", "harga": 3000, "kalori": 100, "favorit": false },
            { "nama": "Ice Cream Topping", "harga": 3000, "kalori": 150, "favorit": false }
        ]
    },
    {
        "nama": "Kantin Sumarso",
        "foto": "photos/booth32.jpg",
        "whatsapp": "",
        "menu": [
            { "nama": "Nasi Goreng Ayam", "harga": 15000, "kalori": 450, "favorit": false },
            { "nama": "Nasi Goreng Bakso", "harga": 15000, "kalori": 500, "favorit": false },
            { "nama": "Nasi Goreng Sosis", "harga": 15000, "kalori": 480, "favorit": false },
            { "nama": "Nasi Goreng Ati Ampela", "harga": 17000, "kalori": 500, "favorit": false },
            { "nama": "Nasi Goreng Kornet", "harga": 17000, "kalori": 430, "favorit": false },
            { "nama": "Nasi Goreng Teri", "harga": 17000, "kalori": 400, "favorit": false },
            { "nama": "Nasi Goreng Spesial", "harga": 17000, "kalori": 800, "favorit": false },
            { "nama": "Kwetiau Goreng/Rebus Ayam", "harga": 15000, "kalori": 525, "favorit": false },
            { "nama": "Kwetiau Goreng/Rebus Bakso", "harga": 15000, "kalori": 575, "favorit": false },
            { "nama": "Kwetiau Goreng/Rebus Sosis", "harga": 15000, "kalori": 555, "favorit": false },
            { "nama": "Kwetiau Goreng/Rebus Ati Ampela", "harga": 17000, "kalori": 575, "favorit": false },
            { "nama": "Kwetiau Goreng/Rebus Kornet", "harga": 17000, "kalori": 505, "favorit": false },
            { "nama": "Kwetiau Goreng/Rebus Teri", "harga": 17000, "kalori": 475, "favorit": false },
            { "nama": "Kwetiau Goreng/Rebus Spesial", "harga": 17000, "kalori": 875, "favorit": false },
            { "nama": "Mie Goreng/Rebus Ayam", "harga": 15000, "kalori": 550, "favorit": false },
            { "nama": "Mie Goreng/Rebus Bakso", "harga": 15000, "kalori": 600, "favorit": false },
            { "nama": "Mie Goreng/Rebus Sosis", "harga": 15000, "kalori": 580, "favorit": false },
            { "nama": "Mie Goreng/Rebus Ati Ampela", "harga": 17000, "kalori": 600, "favorit": false },
            { "nama": "Mie Goreng/Rebus Kornet", "harga": 17000, "kalori": 530, "favorit": false },
            { "nama": "Mie Goreng/Rebus Teri", "harga": 17000, "kalori": 500, "favorit": false },
            { "nama": "Mie Goreng/Rebus Spesial", "harga": 17000, "kalori": 900, "favorit": false }
        ]
    }
    ];

    // ==================== GLOBAL VARIABLES ====================
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const scrollTopBtn = document.getElementById('scroll-top');
    const boothsContainer = document.getElementById('booths-container');
    const menuSearch = document.getElementById('menu-search');

    // ==================== NAVBAR FUNCTIONS ====================
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Change active nav link on scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ==================== THEME TOGGLE ====================
    // Check for saved theme preference
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }

    // Toggle between light and dark mode
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==================== SCROLL FUNCTIONS ====================
    // Show/hide scroll to top button
    function toggleScrollTopBtn() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==================== BOOTH RENDERING ====================
    // Format price to IDR
    function formatPrice(price) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    }

    // Create booth element
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
            menuItem.className = 'menu-item';
            menuItem.setAttribute('data-item-name', item.nama.toLowerCase());

            const itemName = document.createElement('div');
            itemName.className = item.favorit ? 'menu-item-name favorite' : 'menu-item-name';
            itemName.textContent = item.nama;

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

    // Render all booths
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
            // Add delay to stagger animations
            boothElement.style.animationDelay = `${index * 0.2}s`;
            boothsContainer.appendChild(boothElement);
        });
    }

    // ==================== FILTER FUNCTIONS ====================
    // Filter menu items based on search query
    function filterMenuItems(query) {
        const searchTerm = query.toLowerCase().trim();
        const booths = document.querySelectorAll('.booth');
        let hasResults = false;

        booths.forEach(booth => {
            const menuItems = booth.querySelectorAll('.menu-item');
            let boothHasVisibleItems = false;

            menuItems.forEach(item => {
                const itemName = item.getAttribute('data-item-name');
                if (itemName.includes(searchTerm)) {
                    item.style.display = 'block';
                    boothHasVisibleItems = true;
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });

            booth.style.display = boothHasVisibleItems ? 'block' : 'none';
        });

        // Show message when no results
        const existingMsg = document.querySelector('.no-results-message');
        if (!hasResults) {
            if (!existingMsg) {
                const noResultsMsg = document.createElement('p');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.textContent = `Tidak ada menu dengan kata "${query}"`;
                boothsContainer.appendChild(noResultsMsg);
            }
        } else if (existingMsg) {
            existingMsg.remove();
        }
    }

    // Listen to search input
    menuSearch.addEventListener('input', (e) => {
        filterMenuItems(e.target.value);
    });

    // ==================== ANIMATION OBSERVER ====================
    // Detect when elements enter viewport for animations
    function setupIntersectionObserver() {
        const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        fadeElements.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    }

    // ==================== INITIALIZATION ====================
    function init() {
        // Initialize theme
        initTheme();
        
        // Render booths
        renderBooths();
        
        // Setup animations
        setupIntersectionObserver();
        
        // Add scroll event listeners
        window.addEventListener('scroll', () => {
            toggleScrollTopBtn();
            updateActiveNavLink();
        });
        
        // Trigger initial scroll functions
        toggleScrollTopBtn();
        updateActiveNavLink();
    }

    // Initialize app
    init();
});