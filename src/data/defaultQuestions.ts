import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN 1: PILIHAN GANDA (10 SOAL)
  // Lingkup Materi: Penjumlahan dan Pengurangan Kelas 2 SD
  // ==========================================
  {
    id: 1,
    type: 'pg',
    topic: 'Penjumlahan Cara Bersusun Panjang',
    difficulty: 'Mudah',
    text: 'Perhatikan penjumlahan dengan cara bersusun panjang berikut:\n\n34 = 30 + 4\n25 = 20 + 5\n---------- +\n   = ... + 9\n   = 59\n\nBilangan puluhan yang tepat untuk mengisi titik-titik tersebut adalah...',
    options: [
      { id: 'A', text: '40' },
      { id: 'B', text: '50' },
      { id: 'C', text: '60' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada cara bersusun panjang, puluhan dijumlahkan dengan puluhan:\n30 + 20 = 50.\nSatuan dijumlahkan dengan satuan:\n4 + 5 = 9.\nSehingga 50 + 9 = 59. Bilangan yang tepat mengisi titik-titik adalah 50.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Penjumlahan Susun Pendek dengan Menyimpan',
    difficulty: 'Sedang',
    text: 'Siti menghitung hasil penjumlahan 48 + 27 menggunakan cara bersusun pendek:\n\n   48\n   27\n  ----\n\nHasil penjumlahan dari 48 + 27 adalah...',
    options: [
      { id: 'A', text: '65' },
      { id: 'B', text: '71' },
      { id: 'C', text: '75' },
    ],
    correctAnswer: 'C',
    explanation:
      'Langkah menghitung dengan cara bersusun pendek:\n1. Jumlahkan angka satuan: 8 + 7 = 15. Tulis angka 5 pada satuan, simpan 1 puluhan di atas angka puluhan.\n2. Jumlahkan angka puluhan: 1 (simpanan) + 4 + 2 = 7.\nJadi, 48 + 27 = 75.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Penjumlahan Pasangan Bilangan',
    difficulty: 'Mudah',
    text: 'Budi menghitung 29 + 15 dengan cara mengubah 29 menjadi puluhan terdekat:\n\n29 + 15 = (29 + 1) + 14\n        = 30 + 14\n\nHasil akhir dari penjumlahan tersebut adalah...',
    options: [
      { id: 'A', text: '44' },
      { id: 'B', text: '45' },
      { id: 'C', text: '54' },
    ],
    correctAnswer: 'A',
    explanation:
      'Cara pasangan bilangan: 15 diuraikan menjadi 1 + 14. Angka 1 digabungkan ke 29 agar menjadi puluhan penuh yaitu 30.\nKemudian 30 + 14 = 44.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pengurangan Cara Bersusun Panjang',
    difficulty: 'Mudah',
    text: 'Perhatikan pengurangan bersusun panjang berikut:\n\n58 = 50 + 8\n23 = 20 + 3\n---------- -\n   = (50 - 20) + (8 - 3)\n   = ... + 5\n   = 35\n\nBilangan puluhan yang tepat untuk mengisi titik-titik adalah...',
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '30' },
      { id: 'C', text: '40' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pengurangan nilai puluhan: 50 - 20 = 30.\nPengurangan nilai satuan: 8 - 3 = 5.\nSehingga 30 + 5 = 35. Bilangan pengisi titik-titik adalah 30.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Pengurangan Susun Pendek dengan Meminjam',
    difficulty: 'Sedang',
    text: 'Hasil pengurangan dari 63 - 28 dengan cara bersusun pendek adalah...\n\n   63\n   28\n  ---- -\n   ...',
    options: [
      { id: 'A', text: '35' },
      { id: 'B', text: '45' },
      { id: 'C', text: '43' },
    ],
    correctAnswer: 'A',
    explanation:
      'Langkah menghitung pengurangan dengan meminjam:\n1. Satuan: 3 tidak dapat dikurangi 8, pinjam 1 puluhan dari 6 sehingga 3 menjadi 13. Lalu 13 - 8 = 5.\n2. Puluhan: Angka 6 telah dipinjam 1 sehingga bersisa 5. Lalu 5 - 2 = 3.\nJadi, 63 - 28 = 35.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Pengurangan Mundur / Garis Bilangan',
    difficulty: 'Mudah',
    text: 'Edo bermain lompat angka di lantai berpetak. Edo mula-mula berada di angka 45. Edo kemudian melangkah mundur sebanyak 12 langkah. Posisi Edo sekarang berada di angka...',
    options: [
      { id: 'A', text: '32' },
      { id: 'B', text: '33' },
      { id: 'C', text: '37' },
    ],
    correctAnswer: 'B',
    explanation:
      'Melangkah mundur artinya melakukan operasi pengurangan:\n45 - 12 = (45 - 10) - 2 = 35 - 2 = 33.\nJadi posisi Edo sekarang berada di angka 33.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Soal Cerita Penjumlahan',
    difficulty: 'Sedang',
    text: 'Dayu memiliki 36 butir kelereng merah di dalam toples. Ayah membelikan Dayu kelereng baru sebanyak 25 butir. Berapa jumlah seluruh kelereng Dayu sekarang?',
    options: [
      { id: 'A', text: '51 butir' },
      { id: 'B', text: '61 butir' },
      { id: 'C', text: '71 butir' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kalimat matematika penjumlahan: 36 + 25\nSatuan: 6 + 5 = 11 (tulis 1 simpan 1 puluhan).\nPuluhan: 1 + 3 + 2 = 6.\nJadi jumlah seluruh kelereng Dayu sekarang adalah 61 butir.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Soal Cerita Pengurangan',
    difficulty: 'Sedang',
    text: 'Ibu membeli 54 buah jeruk segar di pasar. Sebanyak 18 buah jeruk dibagikan kepada tetangga sebelah rumah. Berapa sisa buah jeruk yang dimiliki Ibu sekarang?',
    options: [
      { id: 'A', text: '36 buah' },
      { id: 'B', text: '42 buah' },
      { id: 'C', text: '46 buah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat matematika pengurangan: 54 - 18\nSatuan: 4 pinjam 1 puluhan menjadi 14, 14 - 8 = 6.\nPuluhan: 5 bersisa 4, 4 - 1 = 3.\nJadi sisa buah jeruk yang dimiliki Ibu sekarang adalah 36 buah.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Soal Cerita Penjumlahan dan Pengurangan Gabungan',
    difficulty: 'Sukar',
    text: 'Di ruang perpustakaan SD Negeri 3 Loloan Timur ada 40 buku cerita. Pada hari Senin perpustakaan mendapat kiriman 25 buku baru, kemudian 15 buku dipinjam oleh siswa kelas 2. Banyak buku cerita yang ada di perpustakaan sekarang adalah...',
    options: [
      { id: 'A', text: '45 buku' },
      { id: 'B', text: '50 buku' },
      { id: 'C', text: '55 buku' },
    ],
    correctAnswer: 'B',
    explanation:
      'Langkah 1 (Penjumlahan): 40 + 25 = 65 buku.\nLangkah 2 (Pengurangan): 65 - 15 = 50 buku.\nJadi banyak buku cerita di perpustakaan sekarang adalah 50 buku.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Soal Cerita Selisih / Pengurangan',
    difficulty: 'Sedang',
    text: 'Made mengumpulkan 72 tutup botol bekas untuk tugas prakarya, sedangkan Beni mengumpulkan 48 tutup botol. Berapa selisih banyak tutup botol yang dikumpulkan Made dan Beni?',
    options: [
      { id: 'A', text: '24 tutup botol' },
      { id: 'B', text: '26 tutup botol' },
      { id: 'C', text: '34 tutup botol' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mencari selisih dilakukan dengan pengurangan: 72 - 48\nSatuan: 12 - 8 = 4.\nPuluhan: 6 - 4 = 2.\nJadi selisih banyak tutup botol Made dan Beni adalah 24 buah.',
  },

  // ==========================================
  // BAGIAN 2: SOAL BENAR - SALAH (5 SOAL)
  // Lingkup Materi: Penjumlahan dan Pengurangan Kelas 2 SD
  // ==========================================
  {
    id: 11,
    type: 'pgk_kategori',
    topic: 'Cara Penjumlahan Nilai Tempat',
    difficulty: 'Mudah',
    text: 'Perhatikan pernyataan tentang cara melakukan penjumlahan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Penjumlahan 26 + 17 dapat dihitung dengan menjumlahkan puluhannya terlebih dahulu (20 + 10 = 30) lalu satuannya (6 + 7 = 13), sehingga 30 + 13 = 43.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan tersebut BENAR. Ini adalah salah satu cara melakukan penjumlahan dengan memisahkan nilai tempat puluhan dan satuan untuk mempermudah perhitungan mental.',
  },
  {
    id: 12,
    type: 'pgk_kategori',
    topic: 'Cara Penjumlahan Susun Pendek Menyimpan',
    difficulty: 'Mudah',
    text: 'Perhatikan aturan penjumlahan bersusun dengan teknik menyimpan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Pada penjumlahan susun pendek 38 + 15, hasil satuan 8 + 5 = 13 ditulis angka 3 pada tempat satuan dan angka 1 disimpan untuk dijumlahkan pada nilai puluhan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan tersebut BENAR. Angka 13 terdiri dari 1 puluhan dan 3 satuan, maka angka 3 ditulis pada satuan dan 1 disimpan pada puluhan.',
  },
  {
    id: 13,
    type: 'pgk_kategori',
    topic: 'Perhitungan Pengurangan',
    difficulty: 'Sedang',
    text: 'Perhatikan hasil pengurangan dua bilangan puluhan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Hasil pengurangan dari 50 - 24 adalah sama dengan 36.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan tersebut SALAH. Hasil pengurangan yang benar dari 50 - 24 adalah 26 (karena 50 - 20 = 30, lalu 30 - 4 = 26), bukan 36.',
  },
  {
    id: 14,
    type: 'pgk_kategori',
    topic: 'Cara Pengurangan dengan Meminjam',
    difficulty: 'Sedang',
    text: 'Perhatikan teknik meminjam pada operasi pengurangan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Pada pengurangan 72 - 35, karena angka satuan 2 lebih kecil dari 5, maka angka 2 meminjam 1 puluhan dari angka 7 sehingga menjadi 12, lalu 12 - 5 = 7.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan tersebut BENAR. Karena 2 satuan tidak dapat dikurangi 5, maka meminjam 1 puluhan (10 satuan) dari angka 7 sehingga menjadi 10 + 2 = 12, lalu 12 - 5 = 7.',
  },
  {
    id: 15,
    type: 'pgk_kategori',
    topic: 'Soal Cerita Penjumlahan dan Pengurangan',
    difficulty: 'Sedang',
    text: 'Perhatikan soal cerita berikut:\nLani mempunyai 45 buah rambutan manis. Sebanyak 20 buah dimakan bersama adik, kemudian Ayah memberi Lani tambahan 10 buah rambutan.',
    statements: [
      {
        id: 's1',
        text: 'Banyak buah rambutan milik Lani sekarang adalah 35 buah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan tersebut BENAR. Perhitungannya:\nMula-mula: 45 buah.\nDimakan: 45 - 20 = 25 buah.\nDiberi lagi: 25 + 10 = 35 buah rambutan.',
  },
];
