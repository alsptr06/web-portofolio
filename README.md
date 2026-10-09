# 🚀 Modern 3D Portfolio Web

Web portofolio modern, responsif, dan interaktif yang dibangun menggunakan arsitektur modular dengan **React 19**, **Vite**, **Tailwind CSS v4**, dan **Three.js**.

---

## 📁 Struktur Direktori Proyek

```text
portfolio-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Otomatisasi CI/CD GitHub Actions ke Cloud / VPS
├── public/
│   ├── textures/               # Aset tekstur material 3D
│   ├── robot.glb               # Model 3D format GLTF / GLB
│   └── favicon.svg             # Favicon web
├── src/
│   ├── assets/
│   │   └── profile.jpeg        # Foto profil pengguna
│   ├── components/
│   │   ├── Footer.jsx          # Komponen footer (tombol My Works, CV, spinning badge)
│   │   ├── Navbar.jsx          # Bar navigasi atas & tombol Let's Talk
│   │   ├── RobotModel.jsx      # Model 3D interaktif Three.js + OrbitControls + loading state
│   │   ├── Sidebar.jsx         # Sidebar profil kiri, avatar, bio, medsos, CTA
│   │   └── StatCard.jsx        # Komponen kartu statistik metrik
│   ├── data/
│   │   └── portfolioData.js    # Pusat data konfigurasi profil, proyek, resume, dan sosmed
│   ├── pages/
│   │   ├── Home.jsx            # Halaman utama dengan hero & 3D canvas interaktif
│   │   ├── Portfolio.jsx       # Halaman galeri proyek dengan filter kategori
│   │   ├── About.jsx           # Halaman tentang saya, statistik, & biografi
│   │   ├── Resume.jsx          # Riwayat pendidikan, pengalaman kerja, & alat favorit
│   │   └── Contact.jsx         # Saluran kontak langsung WhatsApp, email, dan medsos
│   ├── App.jsx                 # Orkestrasi layout utama, tab switching, & background glow
│   ├── index.css               # Konfigurasi Tailwind CSS v4 & custom scrollbar
│   └── main.jsx                # Entry point React DOM
├── .dockerignore
├── .gitignore
├── Dockerfile                  # Containerization Nginx Alpine
├── eslint.config.js            # Konfigurasi linter ESLint
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ Fitur Utama

1. **Struktur Modular & Clean Code**: Setiap halaman (`Home`, `Portfolio`, `About`, `Resume`, `Contact`) dan komponen (`Sidebar`, `Navbar`, `Footer`, `RobotModel`, `StatCard`) terpisah rapi.
2. **Model 3D Interaktif (Three.js)**: Memuat model 3D `robot.glb` secara mulus dengan pencahayaan dinamis, rotasi otomatis, interaksi drag kursor (*OrbitControls*), serta indikator persentase loading.
3. **Data Terpusat (`src/data/portfolioData.js`)**: Mudah mengubah konten personal, tautan sosial media, data proyek, riwayat pendidikan, dan keahlian tanpa perlu menyentuh markup komponen.
4. **Desain Modern Cyberpunk / Dark Glow**: Background gelap elegan (`#0b0b0f`), ambient aura ungu, dan kartu bergradasi.
5. **Siap Container & CI/CD**: Dilengkapi dengan `Dockerfile` (Nginx Alpine) dan alur kerja GitHub Actions `.github/workflows/deploy.yml`.

---

## 🛠️ Panduan Menjalankan Proyek

### 1. Masuk ke direktori proyek
```bash
cd portfolio-web
```

### 2. Instal dependensi
```bash
npm install
```

### 3. Jalankan server pengembangan (Development)
```bash
npm run dev
```
Buka browser pada URL yang ditampilkan di terminal (biasanya `http://localhost:5173`).

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build yang optimal akan berada di direktori `dist/`.

### 5. Jalankan Container Docker
```bash
# Build Docker image
docker build -t portfolio-web .

# Jalankan kontainer pada port 3000
docker run -d -p 3000:80 --name portfolio-app portfolio-web
```

---

## ⚙️ Kustomisasi Data Profil

Cukup buka berkas:
👉 `src/data/portfolioData.js`

Anda dapat langsung mengganti:
- Nama, deskripsi, email, telepon, dan tautan sosial media
- Data proyek di array `projectsData`
- Data pendidikan di array `educationData`
- Pengalaman kerja di array `experienceData`
- Daftar tools / tech stack di array `toolsData`
- Foto profil di `src/assets/profile.jpeg`
