# brute-tiktok

**brute-tiktok** adalah sebuah tools semi-otomatis yang digunakan untuk menambahkan views atau favorites pada video TikTok. Prosesnya dilakukan dengan memasukkan URL video TikTok yang ingin ditingkatkan views atau favorites-nya, kemudian script akan berjalan secara terus menerus hingga dihentikan.

## Fitur Utama
- **Tambah Views:** Views pada video akan bertambah sekitar setiap 1-2 menit dengan kenaikan antara 500 hingga 2000 views.
- **Tambah Favorites:** Favorites akan bertambah sekitar setiap 1-2 menit dengan kenaikan antara 10 hingga 50 favorites.
- Menggunakan **API dari zefoy.com**.
- **Semi-otomatis:** Tools ini tidak berjalan dalam mode headless karena membutuhkan interaksi manual untuk mengisi validasi captcha.

## Persyaratan
- **Node.js**: Versi terbaru.
- **Chromium**: Untuk mengotomatiskan browser tanpa headless mode.
- **API dari zefoy.com**: Digunakan untuk berinteraksi dengan TikTok.

## Instalasi
1. Clone repository ini:
    ```bash
    git clone https://github.com/fzrilsh/brute-tiktok
    ```

2. Masuk ke direktori project dan install semua package:
    ```bash
    cd brute-tiktok && npm install
    ```

3. Pastikan **Chromium** telah terinstall dengan menjalankan perintah berikut:
    ```bash
    node node_modules/puppeteer/install.js
    ```

## Cara Menjalankan Script
1. Untuk memulai script, jalankan perintah:
    ```bash
    node .
    ```

2. Ikuti langkah-langkah yang muncul di terminal, termasuk memasukkan URL video TikTok yang ingin ditingkatkan views atau favorites-nya.

3. Browser **Chromium** akan terbuka dan berjalan tanpa mode headless. Anda perlu mengisi validasi captcha secara manual.

## Catatan
- Penambahan views dan favorites membutuhkan waktu antara 1 hingga 2 menit untuk setiap batch.
- Harap perhatikan bahwa tools ini semi-otomatis karena memerlukan pengisian captcha secara manual.
- Pastikan untuk mengikuti kebijakan penggunaan dari zefoy.com.

## Lisensi
Proyek ini dilisensikan di bawah lisensi [MIT](./LICENSE).
