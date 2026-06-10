# 🧮 MemuCalc (Memory Utility Calculator)

MemuCalc, standart matematiksel işlemlerin yanı sıra gelişmiş bellek yönetim fonksiyonlarını (`M+`, `MR`, `MC`) barındıran, kurumsal standartlarda geliştirilmiş modern bir React hesap makinesi uygulamasıdır.

Bu proje, karmaşık bileşen durumlarını (state) tek bir merkezden, öngörülebilir ve test edilebilir bir yapıyla yönetmek amacıyla **React useReducer Hook'u** kullanılarak mimari edilmiştir.

---

## 🚀 Canlı Önizleme (Live Demo)

Projenin canlı versiyonuna aşağıdaki linkten ulaşabilirsiniz:
🔗 [MemuCalc Canlı Uygulama Linki](https://memu-calc-yavuzs-cakmaks-projects.vercel.app)

MemuCalc Proje Önizleme Resmi: <img width="1536" height="632" alt="calculator" src="https://github.com/user-attachments/assets/894ac802-dcfc-49b8-afcf-664f3985711e" />


---

## ✨ Öne Çıkan Özellikler

- **useReducer ile Global State Yönetimi:** `useState` kalabalığı yerine, Redux felsefesine uygun Action-Reducer mimarisi.
- **Gelişmiş Bellek Hücresi (Memory Operations):** \* `M+`: Ekrandaki mevcut değeri hafıza kasasına kilitler.
  - `MR` (Memory Recall): Hafızadaki sayıyı ekrana string tabanlı akışla geri çağırır.
  - `MC` (Memory Clear): Hafıza hücresini güvenli bir şekilde sıfırlar.
- **İşlem Güvenliği (Temporary Register):** Operatör değişikliklerinde ekrandaki veriyi kaybetmemek için `temp` değişkeniyle arka planda veri izolasyonu sağlanmıştır.
- **Gelişmiş Mocking & Validasyon Altyapısı:** Proje içinde veri doğrulama için **Yup** şemaları ve API simülasyonları için **MSW (Mock Service Worker)** entegrasyonu hazır bulunmaktadır.
- **Kullanıcı Dostu Arayüz:** Derin mor (`#574b90`) ve indigo tonlarında, Lato fontuyla desteklenmiş modern, scannable ve responsive tasarım.

---

## 🛠️ Teknoloji Yığını (Tech Stack)

- **Frontend:** React.js, JavaScript (ES6+)
- **State Management:** React `useReducer` Hook
- **Form & Data Validation:** Yup
- **API Mocking:** MSW (Mock Service Worker)
- **Tasarım/Stil:** CSS3, Bootstrap grid yapısı
  
---
👨‍💻 Hazırlayan: Yavuz Selim Çakmak
📫 İletişim
cakmakselimfb58@gmail.com LinkedIn: linkedin.com/in/yavuzscakmak
---

## 📂 Proje Klasör Yapısı

```text
src/
├── components/
│   ├── CalcButton.jsx      # Dinamik prop yapılı evrensel buton bileşeni
│   └── TotalDisplay.jsx    # readOnly korumalı ekran bileşeni
├── store/
│   ├── actions/
│   │   └── actions.jsx     # Action Type sabitleri ve Action Creator fonksiyonları
│   └── reducers/
│       └── reducers.jsx    # Hesaplama motoru (calculateResult) ve ana Reducer
├── mocks/                  # MSW ve Yup API validasyon katmanı
│   ├── handlers.js
│   ├── helper.js
│   ├── server.js
│   └── worker.js
├── App.jsx                 # Uygulamanın kalbi, useReducer köprüsü
└── index.css               # Özelleştirilmiş global stil şablonları

⚙️ Kurulum ve Çalıştırma
Projeyi yerelde çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

Projeyi bilgisayarınıza klonlayın:

Bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/MemuCalc.git](https://github.com/YOUR_GITHUB_USERNAME/MemuCalc.git)
Proje klasörüne gidin:

Bash
cd MemuCalc
Gerekli bağımlılıkları yükleyin:

Bash
npm install
Uygulamayı lokal sunucuda ayağa kaldırın:

Bash
npm run dev
# veya projenizin script ayarına göre: npm start
```
